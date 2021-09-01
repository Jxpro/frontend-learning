/*globals addLoadEvent*/
/*globals insertAfter*/

function showPic(witchPic) {
    let placeholder = document.getElementById('placeholder');
    let description = document.getElementById('description');

    if (!placeholder) { return false; }
    placeholder.src = witchPic.href;

    if (description) {
        placeholder.onload = () => description.firstChild.nodeValue = witchPic.title;
    }
    return true;
}

function preGallery() {
    if (!document.getElementsByTagName) { return false; }
    if (!document.getElementById) { return false; }

    let galley = document.getElementById('imagegallery');
    if (galley) {
        let links = galley.getElementsByTagName('a');
        for (let i of links) {
            i.onclick = function () { return !showPic(this); };
            // i.setAttribute('onclick', ' return !showPic(this); ');
        }
    } else { return false; }
}

function prePlaceHolder() {
    if (!document.getElementById) { return false; }
    if (!document.createElement) { return false; }
    if (!document.createTextNode) { return false; }

    let target = document.getElementById('imagegallery');
    if (!target) { return false; }

    let imgNode = document.createElement('img');
    imgNode.id = 'placeholder';
    imgNode.src = '../src/img/Image_Gallery/placeholder.gif';
    imgNode.alt = 'My Image Galley';
    // imgNode.height = 520; // 520px => 0
    // imgNode.style.height = '520px';
    imgNode.setAttribute('height', '300px');

    let pNode = document.createElement('p');
    pNode.id = 'description';
    let text = document.createTextNode('Choose an image');
    pNode.appendChild(text);

    insertAfter(imgNode, target);
    insertAfter(pNode, imgNode);
}

addLoadEvent(prePlaceHolder);
addLoadEvent(preGallery);
