import { askForMultilineInput, askQuestion, clearConsole } from "@/utils/console";
import { customDecrypt, customEncrypt } from "@/utils/crypto";
import { loadEncryptedData, saveEncryptedData } from "@/utils/storage";

export const encryptText = async () => {
    const name = await askQuestion("Enter a name for the phrase: ");
    const phrase = await askForMultilineInput();
    const key = await askQuestion("Enter a key of at least 8 characters: ");

    if (key.length < 8) {
        console.log("The key must be at least 8 characters long.");
        return;
    }

    const encryptedText = customEncrypt(phrase, key);
    const encryptedData = loadEncryptedData();
    encryptedData.push({ name, text: encryptedText, date: Date.now().toString() });
    saveEncryptedData(encryptedData);

    console.log("Text encrypted and saved successfully.");
};

export const decryptText = async () => {
    const encryptedData = loadEncryptedData();
    if (encryptedData.length === 0) {
        console.log("No encrypted data available.");
        return;
    }

    console.log("Select the number of the phrase you want to decrypt:");
    encryptedData.forEach((item, index) => {
        console.log(`${index + 1}. Name: ${item.name} - Date: ${item.date}`);
    });

    const choice = await askQuestion("Enter the corresponding number: ");
    const index = parseInt(choice) - 1;

    if (index < 0 || index >= encryptedData.length) {
        console.log("Invalid selection.");
        return;
    }

    clearConsole();
    console.log("Selected phrase:", encryptedData[index].name);
    const key = await askQuestion("Enter the key to decrypt: ");
    const decryptedText = customDecrypt(encryptedData[index].text, key);
    clearConsole();
    console.log("Decrypted text:", decryptedText);
    await askQuestion("Press Enter to continue...");
};

export const listEncryptedTexts = async () => {
    const encryptedData = loadEncryptedData();
    if (encryptedData.length === 0) {
        console.log("No registered texts.");
        return;
    }

    console.log("List of encrypted texts:");
    encryptedData.forEach((item, index) => {
        console.log(`${index + 1}. Name: ${item.name} - Date: ${item.date}`);
    });

    console.log("End of list.");
    await askQuestion("Press Enter to continue...");
};
