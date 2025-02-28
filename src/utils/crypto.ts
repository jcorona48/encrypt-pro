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