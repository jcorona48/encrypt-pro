export const AES_CONFIG = {
    ALGORITHM: process.env.AES_ALGORITHM || "aes-256-cbc",
    IV_LENGTH: process.env.IV_LENGTH ? parseInt(process.env.IV_LENGTH) : 16,
}
