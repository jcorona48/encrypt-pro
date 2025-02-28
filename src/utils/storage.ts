import type { EncryptedData } from "@/types";
import fs from "fs";

const FILE_PATH = "src/data/encrypted_data.json";

export const loadEncryptedData = () => {
    if (!fs.existsSync(FILE_PATH)) return [];
    const data = JSON.parse(fs.readFileSync(FILE_PATH, "utf-8")) as EncryptedData[];
    if (!Array.isArray(data)) return [];

    return data.map(item => ({
        ...item,
        date: new Date(parseInt(item.date)).toLocaleString(),
    }));
};

export const saveEncryptedData = (data: EncryptedData[]) => {
    fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
};
