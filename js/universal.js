function addLoadEvent(func) {
    let old_onload = window.onload;
    if (typeof old_onload !== 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            let unused = function () { };
            old_onload(unused);
            func();
        };
    }
}

function insertAfter(newElement, targetElement) {
    let parent = targetElement.parentNode;
    if (parent.lastChild === targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}
