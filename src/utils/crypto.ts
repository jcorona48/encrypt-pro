import { AES_CONFIG } from "@/config/crypto";
import crypto from "crypto";

export enum STRATEGIES {
    SHIFT = "SHIFT",
    AES = "AES",
}

const ALGORITHM = AES_CONFIG.ALGORITHM;
const IV_LENGTH = AES_CONFIG.IV_LENGTH;

export const customEncrypt = (text: string, key: string) => {
    return text.split("").map((char, index) => {
        return String.fromCharCode(char.charCodeAt(0) + key.charCodeAt(index % key.length));
    }).join("");
};

export const customDecrypt = (text: string, key: string) => {
    return text.split("").map((char, index) => {
        return String.fromCharCode(char.charCodeAt(0) - key.charCodeAt(index % key.length));
    }).join("");
};

export const aesEncrypt = (text: string, key: string) => {
    const iv = crypto.randomBytes(IV_LENGTH);
    const cipher = crypto.createCipheriv(ALGORITHM, crypto.scryptSync(key, "salt", 32), iv);

    let encrypted = cipher.update(text, "utf-8", "hex");
    encrypted += cipher.final("hex");

    return iv.toString("hex") + ":" + encrypted;
};

export const aesDecrypt = (encryptedText: string, key: string) => {
    try {
        const [ivHex, encrypted] = encryptedText.split(":");
        const iv = Buffer.from(ivHex, "hex");
        const decipher = crypto.createDecipheriv(ALGORITHM, crypto.scryptSync(key, "salt", 32), iv);

        let decrypted = decipher.update(encrypted, "hex", "utf-8");
        decrypted += decipher.final("utf-8");

        return decrypted;
    } catch (error) {
        console.error("Invalid key or encrypted text.");
        return "";
    }
};

export const ACTIONS = {
    SHIFT: {
        encrypt: customEncrypt,
        decrypt: customDecrypt,
    },
    AES: {
        encrypt: aesEncrypt,
        decrypt: aesDecrypt,
    },
}