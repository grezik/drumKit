/*jshint esversion: 6 */
// (function() {
//     let currEvent;

//     function getEvtType(evt) {
//         console.group();

//         currEvent = evt.type;
//         console.log(currEvent);

//         if (currEvent === "touchstart") {
//             document.querySelector(".event-type").innerHTML = '<p="red">' + currEvent + '</p>';
//         } else {
//             document.querySelector(".event-type").innerHTML = '<p>' + currEvent + '</p>';
//         }
        

//         console.groupEnd();    
//     }

//     // keyboard events
//     document.addEventListener("keypress", getEvtType, false);

//     document.addEventListener("keydown", getEvtType, false);
//     document.addEventListener("keyup", getEvtType, false);

//     // mouse events
//     document.addEventListener("click", getEvtType, false);

//     document.addEventListener("mousedown", getEvtType, false);
//     document.addEventListener("mouseup", getEvtType, false);

//     // touch events
//     document.addEventListener("touchstart", getEvtType, false);
//     document.addEventListener("touchend", getEvtType, false);
//     document.addEventListener("touchmove", getEvtType, false);
//     document.addEventListener("touchcancel", getEvtType, false);

// })();

document.addEventListener("DOMContentLoaded", function () {
    const playSound = (function(sound) {
        // logs only for testing, they do nothing
        // if (sound) {
        //     console.log(sound);
        //     console.log(pad);
        // } else return;

        if (!sound) return;

        sound.currentTime = 0;
        sound.play();

        // TODO: set playing class on pad element (ie mark pad as active)
    });
    
    const pads = document.querySelectorAll('.pad');


	window.addEventListener("keydown", function (e) {
        const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const pad = document.querySelector(`.pad[data-key="${e.keyCode}"]`);
        
        if (!pad) return;

        playSound(sound);
        pad.classList.add('playing');
	});


    window.addEventListener("keyup", function (e) {
        const pad = document.querySelector(`.pad[data-key="${e.keyCode}"]`);
        if (!pad) return;

        pad.classList.remove('playing');
        // dimPad(pad);
    });


    pads.forEach(pad => pad.addEventListener('mousedown', function (e) {
        // get data-key value, a js keyCode paired
        // with a pad to trigger corresponding sound file
        const keyValue = this.dataset.key;
        const sound = document.querySelector(`audio[data-key="${keyValue}"]`);

        if (!sound) return;

        playSound(sound);

        pad.classList.add('playing');
    }, false));

    pads.forEach(pad => pad.addEventListener('mouseup', function () {
        this.classList.remove('playing');
    }));

    
    pads.forEach(pad => pad.addEventListener('touchstart', function () {
        const keyValue = this.dataset.key;
        const sound = document.querySelector(`audio[data-key="${keyValue}"]`);

        if (!sound) return;

        playSound(sound);

        pad.classList.add('playing');
    }, false));


    pads.forEach(pad => pad.addEventListener('touchend', function () {
        this.classList.remove('playing');
    }, false));


    window.addEventListener('touchstart', function(e) {
        
    }, false);
});