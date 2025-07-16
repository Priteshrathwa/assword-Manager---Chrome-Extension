# 🔐 Password Manager - Chrome Extension

A simple and secure Chrome extension to store, encrypt, and retrieve your passwords locally using a **master password**.

---

## 🧠 Features

- ✅ Master password protection
- 🔒 AES-encrypted password storage
- 💾 Save service, username, and password
- 📥 Retrieve and decrypt password
- 👁️ Show/hide password toggle
- 🌙 Dark/Light mode toggle
- 🖥️ Fully local (no server or external API)

---
| Technology                   | Purpose                    |
| ---------------------------- | -------------------------- |
| HTML, CSS, JS                | Core structure and styling |
| **CryptoJS**                 | AES encryption/decryption  |
| **Chrome Storage API**       | Secure local data storage  |
| Chrome Extension Manifest v3 | Extension environment      |

preview 
<h2 align="center"><strong>master password</strong></h2>
<img width="1920" height="1080" alt="Screenshot (31)" src="https://github.com/user-attachments/assets/598a7492-918b-4616-b98a-669cdab27d7a" />

<h2 align="center"><strong>saving password</strong></h2>
<img width="1920" height="1080" alt="Screenshot (32)" src="https://github.com/user-attachments/assets/2609eb4d-10ac-4056-855e-e4048f0edbda" />

<h2 align="center"><strong>getting password</strong></h2>

<img width="1920" height="1080" alt="Screenshot (33)" src="https://github.com/user-attachments/assets/cdce49e6-832e-407b-9238-68cedce3b129" />

## 🛠️ Installation

1. Clone or download this repo as a ZIP.
2. Open [Chrome Extensions](chrome://extensions/)
3. Enable **Developer mode** (top right).
4. Click **Load unpacked** and select the extracted folder.

---

## 📂 Folder Structure

```
password-manager/
│
├── popup.html          # Main extension UI
├── popup.js            # JS logic (encryption, UI, save/load)
├── style.css           # CSS styles
├── manifest.json       # Extension config
│
└── crypto-js/          # CryptoJS library files (AES, SHA256, etc.)
```

---

## 🔐 Master Password

- First launch: it will ask you to set a master password (stored as a SHA256 hash).
- All passwords are AES-encrypted using this master password.
- Passwords are stored locally via `chrome.storage.local`.


---

## 📦 Dependencies

- [CryptoJS](https://github.com/brix/crypto-js)

---

## ⚠️ Disclaimer

This is a personal project intended for learning purposes.  
Passwords are stored **locally only**, but still be careful while using sensitive credentials.

---

## 💡 Future Improvements

- Browser sync support
- Password generator
- Auto-fill support
- Export/Import encrypted passwords

---

## 🧑‍💻 Author

Made with 💙 by [@Priteshrathwa](https://github.com/Priteshrathwa)
