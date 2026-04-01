// ©2026 - BestEditor - BestMat Enterprises - All rights reserved.
// Plugin: Chrome (Webview for BestEditor)
// Author: Yuvanth B (@BestMat)

const addressBar = document.createElement("input");
addressBar.placeholder = "Enter web URL";
addressBar.className = "address-bar";
addressBar.style.padding = "10px";
addressBar.style.fontFamily = "Monaco, monospace";
addressBar.style.borderRadius = "10px";
addressBar.style.border = "none";
addressBar.style.outline = "none";

const addressBtn = document.createElement("button");
addressBtn.innerHTML = `<i class="bi bi-search"></i>Browse`;
addressBtn.className = "address-btn";
addressBtn.style.padding = "10px";
addressBtn.style.fontFamily = "Monaco, monospace";
addressBtn.style.backgroundColor = "#DDD";
addressBtn.style.color = "#181A1F";
addressBtn.style.border = "none";
addressBtn.style.marginLeft = "10px";
addressBtn.style.borderRadius = "10px";
addressBtn.style.cursor = "pointer";

const webview = getWebview();

document.querySelector("body").appendChild(addressBar);
document.querySelector("body").appendChild(addressBtn);

document.querySelector(".address-btn").addEventListener("click", async () => {
    // TODO: Validate input URL
    let url = document.querySelector(".address-bar").value;
    if (!url.includes("://")) {
        url = `https://${url}`;
    }
    await webview.loadURL(url);
});
