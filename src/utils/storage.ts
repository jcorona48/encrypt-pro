import type { EncryptedData } from "@/types";
import fs from "fs";

const FILE_PATH = "storage/encrypted_data.json";

export const loadEncryptedData = () => {
    if (!fs.existsSync(FILE_PATH)) return [];
    const data = JSON.parse(fs.readFileSync(FILE_PATH, "utf-8")) as EncryptedData[];
    if (!Array.isArray(data)) return [];
    return data;
};

export const saveEncryptedData = (data: EncryptedData[]) => {
    const dir = FILE_PATH.split("/").slice(0, -1).join("/");
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); 
    fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
};
