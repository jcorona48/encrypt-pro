import { encryptText, decryptText, listEncryptedTexts } from "@/services";
import { rl } from "@/utils/console";

export const OPTIONS = [
    {
        text: "Encrypt text",
        value: 1,
        action: encryptText
    },
    {
        text: "Decrypt text",
        value: 2,
        action: decryptText
    },
    {
        text: "List encrypted texts",
        value: 3,
        action: listEncryptedTexts
    },
    {
        text: "Exit",
        value: 4,
        action: () => {
            console.log("Exiting...");
            rl.close();
            process.exit(0);
        }
    }
]