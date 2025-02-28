# EncryptJC

```
███████╗███╗   ██╗ ██████╗██████╗ ██╗   ██╗██████╗ ████████╗         ██╗ ██████╗
██╔════╝████╗  ██║██╔════╝██╔══██╗╚██╗ ██╔╝██╔══██╗╚══██╔══╝         ██║██╔════╝
█████╗  ██╔██╗ ██║██║     ██████╔╝ ╚████╔╝ ██████╔╝   ██║            ██║██║     
██╔══╝  ██║╚██╗██║██║     ██╔══██╗  ╚██╔╝  ██╔═══╝    ██║       ██   ██║██║     
███████╗██║ ╚████║╚██████╗██║  ██║   ██║   ██║        ██║       ╚█████╔╝╚██████╗
╚══════╝╚═╝  ╚═══╝ ╚═════╝╚═╝  ╚═╝   ╚═╝   ╚═╝        ╚═╝        ╚════╝  ╚═════╝
```

## About the Project
EncryptJC is a simple Node.js command-line tool that allows you to encrypt and decrypt text using different encryption methods. It enables users to save encrypted text with a name and retrieve it later for decryption.

## Features
- Encrypt multi-line text with a custom key
- Assign a name to each encrypted phrase
- Store encrypted texts in a JSON file
- Decrypt stored texts using the correct key
- List saved encrypted texts
- Support for multiple encryption strategies

## Installation
```sh
# Clone the repository
git clone https://github.com/jcorona48/encryptjc.git
cd encryptjc

# Install dependencies
bun install
```

## Usage
```sh
# Run the program
bun start
```
Follow the on-screen instructions to encrypt, decrypt, or list stored texts.

## Encryption Strategies
EncryptJC supports multiple encryption methods, allowing users to choose their preferred strategy:

1. **Custom Shift Cipher**
   - Each character in the text is shifted based on the corresponding character in the key.
   - Simple and effective for lightweight encryption needs.

2. **AES-256 Encryption**
   - Uses the industry-standard AES-256 algorithm for secure encryption.
   - Provides strong protection for sensitive data.

## License
This project is licensed under the MIT License. Feel free to modify and distribute it.

---
Made with ❤️ by Joan Corona
