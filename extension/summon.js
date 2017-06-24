document.addEventListener('DOMContentLoaded', function () {
      document.querySelector('#mainButton').addEventListener('click', main);
});
function main() {
    //alert("TEST");
    chrome.windows.create({'url': 'annoyingwindow.html', 'type': 'popup', 'width': 400, 'height': 400}, function(window) {
  });
}
