const titleInput = document.querySelector("#titleText");
titleInput.addEventListener("input", () => {

    // Update the new tab text
    chrome.storage.sync.set({ "text": titleInput.value }, () => {
        console.log("Updated text");
    });
});