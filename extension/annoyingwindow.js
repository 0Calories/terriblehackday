document.addEventListener('DOMContentLoaded', function () {
      document.querySelector('body').addEventListener('mouseover', minimize);
});

function minimize() {
    var windowID = chrome.windows.WINDOW_ID_CURRENT;
    chrome.windows.update(windowID, {'state': 'minimized'}, function(window) {});
    mousePosition();
}

function mousePosition() {

    document.onmousemove = handleMouseMove;
    

}
