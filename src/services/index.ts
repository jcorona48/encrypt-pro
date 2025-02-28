import {
    askForMultilineInput,
    askQuestion,
    clearConsole,
    printCleanState,
    printOptions,
    printTableData
} from "@/utils/console";
import { ACTIONS, STRATEGIES } from "@/utils/crypto";
import { loadEncryptedData, saveEncryptedData } from "@/utils/storage";

export const encryptText = async () => {
    const state = {
        strategy: STRATEGIES.AES,
        name: "",
        key: "",
        phrase: "",
    }

    while (true) {
        clearConsole();
        printOptions([
            { text: "Shift", },
            { text: "AES", },
        ], "Select the encryption strategy:");
        const choice = await askQuestion("Enter the corresponding number (default AES): ");
        if (choice === "1") {
            state.strategy = STRATEGIES.SHIFT;
            break;
        } else if (choice === "2") {
            state.strategy = STRATEGIES.AES;
            break;
        } else if (choice === "") break;
        console.error("Invalid selection.");
        await askQuestion("Press Enter to continue...");
    }
    printCleanState(state);

    state.name = await askQuestion("Enter a name for the phrase: ");
    while (true) {
        state.key = "";
        printCleanState(state);
        state.key = await askQuestion("Enter a key of at least 8 characters: ");
        if (state.key.length >= 8) break;
        console.error("The key must be at least 8 characters long.");
        await askQuestion("Press Enter to continue...");
    }

    printCleanState(state);
    state.phrase = await askForMultilineInput();

    const encryptedText = ACTIONS[state.strategy].encrypt(state.phrase, state.key);
    const encryptedData = loadEncryptedData();
    encryptedData.push({ name: state.name, text: encryptedText, date: Date.now().toString(), strategy: state.strategy });
    saveEncryptedData(encryptedData);

    console.log("Text encrypted and saved successfully.");
};

export const decryptText = async () => {
    const encryptedData = loadEncryptedData();
    if (encryptedData.length === 0) {
        console.error("No encrypted data available.");
        return;
    }

    console.log("Select the number of the phrase you want to decrypt:");
    printTableData(encryptedData);

    const choice = await askQuestion("Enter the corresponding number: ");
    const index = parseInt(choice) - 1;

    if (index < 0 || index >= encryptedData.length) {
        console.error("Invalid selection.");
        return;
    }
    printCleanState({
        phrase: encryptedData[index].name,
    })
    const key = await askQuestion("Enter the key to decrypt: ");
    if (!encryptedData[index].strategy) return console.log("Invalid strategy, cannot decrypt text.");
    const decryptedText = ACTIONS[encryptedData[index].strategy].decrypt(encryptedData[index].text, key);
    if(decryptedText === "") return ;
    clearConsole();
    console.log("Decrypted text: \n\n", decryptedText);
};

export const listEncryptedTexts = async () => {
    const encryptedData = loadEncryptedData();
    if (encryptedData.length === 0) {
        console.error("No registered texts.");
        return;
    }

    console.log("\nList of encrypted texts:");
    printTableData(encryptedData);
};

