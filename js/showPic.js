/* globals addLoadEvent*/

function showPic(whichPic) {
    document.getElementById("place").src = whichPic.href;
    document.getElementById("description").innerText = whichPic.title;
    return false;
}

function prepare() {
    if (!document.getElementById || !document.getElementsByTagName)
        return false;
    let image_gallery = document.getElementById("ImageGallery");
    if (image_gallery) {
        let link = image_gallery.getElementsByTagName("a");
        for (let i = 0; i < link.length; i++) {
            link[i].onclick = function () {
                showPic(link[i]);
                return false;
            };
        }
    }
}

function count() {
    let body = document.getElementsByTagName("body")[0];
    console.log(body.outerHTML);
    console.log(body.childNodes);
}

addLoadEvent(prepare);
addLoadEvent(function () {
    let t = document.createElement("h2");
    console.log(t.outerHTML);
    t.innerHTML =
        "&lt;p&gt;this is &lt;em&gt;my&lt;/em&gt; content &lt;/p&gt;  ";
    // document.getElementsByTagName("li")[0].appendChild(t);
});
addLoadEvent(count);
