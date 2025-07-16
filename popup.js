
const lockScreen = document.getElementById("lockScreen");
const mainUI = document.getElementById("mainUI");
const masterInput = document.getElementById("masterInput");
const unlockBtn = document.getElementById("unlockBtn");
const lockMessage = document.getElementById("lockMessage");

const service = document.getElementById("service");
const username = document.getElementById("username");
const password = document.getElementById("password");
const saveBtn = document.getElementById("saveBtn");
const getBtn = document.getElementById("getBtn");
const message = document.getElementById("message");

let masterKey = null;

function hash(pw) {
  return CryptoJS.SHA256(pw).toString();
}

function unlockUI() {
  lockScreen.style.display = "none";
  mainUI.style.display = "block";
}

chrome.storage.local.get("masterHash", (res) => {
  if (!res.masterHash) {
    lockMessage.innerText = "🔑 Set your master password.";
  } else {
    lockMessage.innerText = "🔐 Enter your master password.";
  }
});

unlockBtn.addEventListener("click", () => {
  const input = masterInput.value;
  const inputHash = hash(input);

  chrome.storage.local.get("masterHash", (res) => {
    if (!res.masterHash) {
      chrome.storage.local.set({ masterHash: inputHash }, () => {
        masterKey = input;
        unlockUI();
      });
    } else {
      if (res.masterHash === inputHash) {
        masterKey = input;
        unlockUI();
      } else {
        lockMessage.innerText = "❌ Wrong master password.";
      }
    }
  });
});

saveBtn.addEventListener("click", () => {
  const key = `${service.value}_${username.value}`;
  const plain = password.value;

  if (!key || !plain || !masterKey) {
    message.innerText = "⚠️ Fill all fields & unlock first.";
    return;
  }

  const encrypted = CryptoJS.AES.encrypt(plain, masterKey).toString();
  chrome.storage.local.set({ [key]: encrypted }, () => {
    message.innerText = "✅ Password saved!";
    password.value = "";
  });
});

getBtn.addEventListener("click", () => {
  const key = `${service.value}_${username.value}`;

  chrome.storage.local.get([key], (res) => {
    if (res[key]) {
      const decrypted = CryptoJS.AES.decrypt(res[key], masterKey).toString(CryptoJS.enc.Utf8);
      password.value = decrypted;
      message.innerText = "🔓 Password loaded!";
    } else {
      message.innerText = "❌ No password found.";
    }
  });
});
// 👁️ Toggle Show/Hide Password
const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    toggle.innerText = "🙈";
  } else {
    password.type = "password";
    toggle.innerText = "👁️";
  }
});
