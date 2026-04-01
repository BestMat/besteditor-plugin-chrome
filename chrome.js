// ©2026 - BestEditor - BestMat Enterprises - All rights reserved.
// Plugin: Chrome (Webview for BestEditor)
// Author: Yuvanth B (@BestMat)

const addressBar = document.createElement("input");
addressBar.placeholder = "Enter web URL";
addressBar.className = "address-bar";

const addressBtn = document.createElement("button");
addressBtn.innerText = "Go";
addressBtn.className = "address-btn";

const webview = document.createElement("webview");

document.querySelector("body").appendChild(addressBar);
document.querySelector("body").appendChild(addressBtn);

document.querySelector(".address-btn").addEventListener("click", async () => {
    // TODO: Validate input URL
    const url = document.querySelector(".address-bar").value;
    await document.querySelector("webview").loadURL(url);
});
