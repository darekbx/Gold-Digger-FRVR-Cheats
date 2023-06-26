
function setGameData() {
    localStorage.setItem("golddiggergems", JSON.stringify({ "gems": 1000, "stars": 1000 }));
    var state = JSON.parse(localStorage.getItem("golddiggerstate"));
    state["coins"] = 1000000;
    localStorage.setItem("golddiggerstate", JSON.stringify(state));
}

chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    tabs.forEach(function(tab) {     
        chrome.scripting.executeScript({
            target: { tabId: tab.id},
               func: setGameData,
            },
            (injectionResults) => { });
    });
});