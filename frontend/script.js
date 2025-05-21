function generatePassword() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  let password = "";
  for (let i = 0; i < 12; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById("password").value = password;
  document.getElementById("copy-msg").innerText = "";
}

function copyPassword() {
  const passwordField = document.getElementById("password");
  const copyMsg = document.getElementById("copy-msg");

  if (!passwordField.value) {
    copyMsg.innerText = "Nothing to copy!";
    return;
  }

  navigator.clipboard.writeText(passwordField.value).then(() => {
    copyMsg.innerText = "Copied to clipboard! ✨";
    setTimeout(() => (copyMsg.innerText = ""), 2000);
  });
}
