/*globals addLoadEvent*/
/*globals insertAfter*/

function addControls(vid) {
    vid.controls = false;
    // console.log(vid.videoHeight);
    // console.log(vid.videoWidth);
    vid.height = vid.videoHeight;
    vid.width = vid.videoWidth;

    vid.parentNode.style.height = vid.videoHeight + 'px';
    vid.parentNode.style.width = vid.videoWidth + 'px';

    let controls = document.createElement('div');
    controls.className = 'controls';
    let play = document.createElement('button');
    play.title = 'Play';
    play.innerHTML = '<i class="fas fa-pause" style="font-size:20px"></i>';
    play.innerHTML = '<i class="fas fa-play" style="font-size:20px"></i>';

    controls.appendChild(play);

    vid.parentNode.insertBefore(controls, vid);

    play.onclick = function () {
        vid.paused ? vid.play() : vid.pause();
    };

    vid.onplay = function () {
        play.innerHTML = '<i class="fas fa-pause"></i>';
        play.setAttribute('paused', true);
        // play.paused = true;
    };

    vid.onpause = function () {
        play.innerHTML = '<i class="fas fa-play"></i>';
        play.removeAttribute('paused');
        // play.paused = false;
    };

    // vid.addEventListener('play', function () {
    //     play.innerHTML = '<i class="fas fa-pause" style="font-size:20px"></i>';
    //     play.paused = false;
    // }, false);

    // vid.addEventListener('pause', function () {
    //     play.innerHTML = '<i class="fas fa-play" style="font-size:20px"></i>';
    //     play.paused = false;
    // }, false);

    // vid.addEventListener('ended', function () {
    //     vid.pause();
    // }, false);
}


function createVideoControls() {
    let vids = document.getElementsByTagName('video');
    for (let v of vids) {
        addControls(v);
    }
}



addLoadEvent(createVideoControls);
