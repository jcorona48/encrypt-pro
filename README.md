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
EncryptJC is a simple Node.js command-line tool that allows you to encrypt and decrypt text using a custom encryption method. It enables users to save encrypted text with a name and retrieve it later for decryption.

## Features
- Encrypt multi-line text with a custom key
- Assign a name to each encrypted phrase
- Store encrypted texts in a JSON file
- Decrypt stored texts using the correct key
- List saved encrypted texts

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

## Encryption Method
Each character in the text is shifted based on the corresponding character in the key, ensuring a unique transformation.

## License
This project is licensed under the MIT License. Feel free to modify and distribute it.

---
Made with ❤️ by Joan Corona
