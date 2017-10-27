document.addEventListener('DOMContentLoaded', function () {

	function playSound(e) {
		const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
		const pad = document.querySelector(`.pad[data-key="${e.keyCode}"]`);

		if (!sound) return; // stop the function from running if there is no sound file

		sound.currentTime = 0; // rewind to the start, no need to wait to the sound end
		sound.play();
		pad.classList.add('playing');
	}


	function removeTransition(e) {
		if (e.propertyName !== 'box-shadow' && e.propertyName !== 'background-image') return;
		this.classList.remove('playing');
		console.log(e);
	}


	window.addEventListener('keydown', playSound);
	
	const pads = document.querySelectorAll('.pad');
	// pads.forEach(pad => pad.addEventListener('transitionend', removeTransition));

	// Unobstrusive event binding
	pads.forEach(pad => pad.addEventListener('mousedown', function (e) {
		// store data-key value, a js keyCode paired with a pad to trigger corresponding sound file
		const keyValue = this.dataset.key;

		// select audio file to play based on keyValue, ie. pair an audio tag with a corresponding .pad div
		const sound = document.querySelector(`audio[data-key="${keyValue}"]`);
		
		if (!sound) return;

		sound.currentTime = 0;
		sound.play();
		this.classList.add('playing');
		console.log(e);
	}));
	pads.forEach(pad => pad.addEventListener("mouseup", function (e) {
		this.classList.remove('playing');
		console.log("e: " + e);
		console.log("this: " + this)
	}));

});


/*
 * stworzyc funkcje, ktora bedzie ustawiac klase playing
 * i przekazac jej w parametrze obiekt, w ktorym ma ustawic klase.
 * w funkcji dla eventdown - dodać klasę, w funkcji dla eventup - usunąć klasę
 * tu może transitionend event nie jest potrzebny?
 */