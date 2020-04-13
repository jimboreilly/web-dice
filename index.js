let state = 1;
let cube = document.querySelector('.cube');

const rotate = () => {
	state++;
	if (state === 7) state = 1
	console.log("You rolled a " + state)

	switch (state) {

		case 1:
			cube.classList.remove('roll-six');
			cube.classList.add('roll-one');
			break;

		case 2:
			cube.classList.remove('roll-one');
			cube.classList.add('roll-two');
			break;

		case 3:
			cube.classList.remove('roll-two');
			cube.classList.add('roll-three');
			break;

		case 4:
			cube.classList.remove('roll-three');
			cube.classList.add('roll-four');
			break;

		case 5:
			cube.classList.remove('roll-four');
			cube.classList.add('roll-five');
			break;

		case 6:
			cube.classList.remove('roll-five');
			cube.classList.add('roll-six');
			break;

	}
}