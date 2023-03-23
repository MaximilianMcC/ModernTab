const titleText = document.querySelector("#tabText");
chrome.storage.sync.get("text", (data) => {

    titleText.innerHTML = data.text;
});