import { BANNER } from '@/config/banner';
import type { EncryptedData } from '@/types';
import readline from 'readline';

export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export const askQuestion = async (query: string) => {
    return new Promise(resolve => rl.question(query, resolve)) as Promise<string>
};

export const askForMultilineInput = async () => {
    return new Promise(resolve => {
        const lines: string[] = [];
        console.log("Enter text (press ENTER twice consecutively to finish):");
        rl.on("line", (input) => {
            if (input === "" && lines.length > 0 && lines[lines.length - 1] === "") {
                rl.removeAllListeners("line");
                resolve(lines.join("\n"));
            } else {
                lines.push(input);
            }
        });
    }) as Promise<string>;
};

export const clearConsole = () => {
    console.clear();
    console.log(BANNER);
}

export const printState = (state: any) => {
    Object.entries(state).forEach(([key, value]) => {
        if (!value) return;
        console.log(`Selected ${key}:`, value);
    });
}

export const printCleanState = (state: any) => {
    clearConsole();
    printState(state);
}

export const printOptions = (options: {
    text: string;
    value?: number;
}[], message = "\nSelect an option:") => {
    console.log(message);
    options.forEach((option, index) => {
        const value = option.value || index + 1;
        console.log(`${value}. ${option.text}`);
    });
}

export const printTableData = (encryptedData: EncryptedData[]) => {
    const tableData = Object.fromEntries(
        encryptedData.map((item, index) => [
            `#${index + 1}`,
            { Name: item.name, Strategy: item.strategy, Date: item.date, }
        ])
    )
    console.table(tableData);
}
