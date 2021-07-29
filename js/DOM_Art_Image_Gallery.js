/*globals addLoadEvent*/
/*globals insertAfter*/

function showPic(witchPic) {
    let placeholder = document.getElementById('placeholder');
    let description = document.getElementById('description');

    if (!placeholder) { return false; }
    placeholder.src = witchPic.href;

    if (description) {
        let text = witchPic.innerText;
        description.firstChild.nodeValue = text;
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
    imgNode.src = '../src/img/Image_Gallery/infinity-(1).jpg';
    imgNode.alt = 'My Image Galley';
    // imgNode.height = 520; // 520px => 0
    // imgNode.style.height = '520px';
    imgNode.setAttribute('height', '500px');

    let pNode = document.createElement('p');
    pNode.id = 'description';
    let text = document.createTextNode('请选择一张图片');
    pNode.appendChild(text);

    insertAfter(imgNode, target);
    insertAfter(pNode, imgNode);
}

addLoadEvent(prePlaceHolder);
addLoadEvent(preGallery);
