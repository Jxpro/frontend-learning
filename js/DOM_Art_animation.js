/*globals addLoadEvent*/
/*globals insertAfter*/

function moveElement(ID, final_x, final_y, interval) {
    let elem = document.getElementById(ID);
    let xpos = parseInt(elem.style.left);
    let ypos = parseInt(elem.style.top);
    if (xpos === final_x && ypos === final_y) { return; }
    if (xpos < final_x) {
        let dis = final_x - xpos;
        xpos += Math.ceil(dis / 100);
    }
    if (xpos > final_x) {
        let dis = xpos - final_x;
        xpos -= Math.ceil(dis / 100);
    }
    if (ypos < final_y) {
        let dis = final_y - ypos;
        ypos += Math.ceil(dis / 100);
    }
    if (ypos > final_y) {
        let dis = ypos - final_y;
        ypos -= Math.ceil(dis / 100);
    }
    elem.style.left = xpos + 'px';
    elem.style.top = ypos + 'px';
    setTimeout(moveElement, interval, ID, final_x, final_y, interval);
}

function temp() {
    let box = document.getElementById('box');
    box.style.top = '400px';
    box.style.left = '600px';
    setTimeout(() => {
        moveElement('box', 100, 100, 1);
    }, 1000);
}


addLoadEvent(temp);
