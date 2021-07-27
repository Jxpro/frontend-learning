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
