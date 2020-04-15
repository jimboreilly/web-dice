let cube = document.querySelector('.cube');
let button = document.querySelector('.button')
let isEvenRoll = true;
let isRolling = false;
let previousState;

cube.addEventListener("transitionend", () => isRolling = false)

const random = () => Math.floor(Math.random() * 6) + 1;
const classForN = n => {
	switch (n) {
		case 1:
			return 'roll-one';

		case 2:
			return 'roll-two';

		case 3:
			return 'roll-three';

		case 4:
			return 'roll-four';

		case 5:
			return 'roll-five';

		case 6:
			return 'roll-six';
	}
}

const roll = () => {
	console.log(isRolling)

	if (!isRolling) {
		//block button spam
		isRolling = true;

		//roll
		const n = random();
		console.log("You rolled a " + n)

		//remove old transform
		if (previousState) cube.classList.remove(previousState);

		//swap even odd flip for big roll animations every time
		if (isEvenRoll) {
			cube.classList.remove('even')
			cube.classList.add('odd')
		} else {
			cube.classList.remove('odd')
			cube.classList.add('even')
		}

		//this is a dumb way to force the dice to animate if we roll the same number twice in a row
		isEvenRoll = !isEvenRoll;

		//add new class
		const newState = classForN(n);
		cube.classList.add(newState);
		previousState = newState;
	}
}