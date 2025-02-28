import { STRATEGIES } from "./utils/crypto";

export type EncryptedData = {
    date: string;
    name: string;
    text: string;
    strategy: STRATEGIES;
}

export type Option = {
    text: string;
    value: number;
    action: () => Promise<void> | void;
}