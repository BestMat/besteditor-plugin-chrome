// ©2026 - BestEditor - BestMat Enterprises - All rights reserved.
// Plugin: Chrome (Webview for BestEditor)
// Author: Yuvanth B (@BestMat)

const addressBar = document.createElement("input");
addressBar.placeholder = "Enter web URL";
addressBar.className = "address-bar";

const addressBtn = document.createElement("button");
addressBtn.value = "Go";
addressBtn.className = "address-btn";

const webview = document.createElement("webview");
document.appendChild(addressBar);
document.appendChild(addressBtn);

document.querySelector(".address-btn").addEventListener(async () => {
    // TODO: Validate input URL
    const url = document.querySelector(".address-bar").value;
    await document.querySelector("webview").loadURL(url);
});

export default plugin = {
    name: "Chrome (Webview for BestEditor)"
};
