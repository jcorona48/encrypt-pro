import readline from 'readline';
import { BANNER } from '@/config/banner';

export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export const askQuestion = (query: string) => {
    return new Promise(resolve => rl.question(query, resolve)) as Promise<string>;
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