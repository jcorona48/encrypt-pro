import { decryptText, encryptText, listEncryptedTexts } from "@/services";
import { type Option } from "@/types";
import { rl } from "@/utils/console";

export const OPTIONS: Option[] = [
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
            console.log("Exiting... Goodbye! 👋");
            rl.close();
            process.exit(0);
        }
    }
]