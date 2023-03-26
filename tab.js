const titleText = document.querySelector("#tabText");
chrome.storage.sync.get("text", (data) => {

    titleText.innerHTML = data.text;

    // Add default text
    if (data.text == undefined) {
        titleText.innerHTML = "AMONG";
        chrome.storage.sync.set({ "text": "AMONG" }, () => {
            console.log("Updated text");
        });
    }
});