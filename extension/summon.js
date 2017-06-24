document.addEventListener('DOMContentLoaded', function () {
      document.querySelector('#mainButton').addEventListener('click', main);
});
function main() {
    //alert("TEST");
    chrome.windows.create({'url': 'annoyingwindow', 'type': 'popup'}, function(window) {
  });
}
