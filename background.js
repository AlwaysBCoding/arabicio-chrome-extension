// function releaseDropdown() {
//   chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
//     var specTab = tabs[0];
//     chrome.tabs.insertCSS(specTab.id, {file: "dropdown.css"});
//     chrome.tabs.executeScript(specTab.id, {file: "dropdown.js"});
//   });
// }

chrome.runtime.onMessage.addListener(

  function(request, sender, sendResponse) {

    var word = request.word;
    var url = "https://www.googleapis.com/language/translate/v2?q=" + word + "&target=en&source=ar&key=AIzaSyDeCoDvPCbyjTQfwec24YjsVtFrF2e9srk";
    var translation = null;

    $.ajax({
      async: false,
      url: url,
      success: function(response) {
        translation = response["data"]["translations"][0]["translatedText"].toLowerCase();
      }
    });

    // releaseDropdown();
    sendResponse({word: translation});
  }

);
