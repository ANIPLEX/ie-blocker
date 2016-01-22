/*!
 * browser blocker v0.1.0
 * (c) 2015 Chris Pan
 * Released under the MIT License.
 */
window.onload = function () {
    var ibContainer,
        browserIcons,
        scriptPath,
        browserName;

    ibContainer = document.getElementById('ib-container');

    // the path to the image cannot be relative in a filter. Have to use javascript to get the absolute path.
    browserIcons = ibContainer.getElementsByTagName('i');
    for (var i = 0; i < document.scripts.length; i++) {

        if (match = document.scripts[i].src.match(/(.*)ie-blocker\.js/)) {
            scriptPath = match[1];
            break;
        }
    }
    for (var i = 0; i < browserIcons.length; i++) {
        if (browserName = browserIcons[i].className.match(/ib-ua-(\w+)/)[1]) {
            browserIcons[i].style['filter'] = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' +
            scriptPath + 'img/' + browserName + '.png")';
        }
    }

    ibContainer.style.display = 'block';
};
