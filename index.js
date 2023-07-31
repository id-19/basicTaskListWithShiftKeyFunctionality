let shiftPress = false;

const handleChange = (taskID) => {
	let arr = taskID.split("");
	const stringNum = arr[4];
	const taskNum = parseInt(stringNum);
	// console.log(`The checkbox changed has task num ${taskNum}`);
	let i = 1;
	// console.log(shiftPress);
	if (shiftPress) {
		for (i = 1; i < taskNum; i++) {
			// inputElements[i - 1].checked = true;
			// console.log(i);
			inputElements[i - 1].checked = !inputElements[i - 1].checked;
		}
		// inputElements[taskNum].checked = !inputElements[taskNum].checked;
	}
};

// Using a for loop to add event listeners
let inputElements = [];
for (let i = 1; i <= 5; i++) {
	const newEle = document.getElementById(`task${i}`);
	// newEle.addEventListener("change", handleChange(e));
	newEle.addEventListener("change", (e) => {
		// console.log(e.target.id);
		handleChange(e.target.id);
	});
	inputElements.push(newEle);
}
console.log(inputElements);

//This is to detect when the shift key is pressed
addEventListener("keydown", (event) => {
	shiftPress =
		event.code == "ShiftLeft" || event.code == "ShiftRight" ? true : false;
	// console.log(
	// 	shiftPress
	// 		? "Shift Key is pressed" +
	// 				` and the value of shiftpress (which should be true) is ${shiftPress}`
	// 		: "Some other key is pressed"
	// );
});
addEventListener("keyup", (event) => {
	shiftPress =
		event.code == "ShiftLeft" || event.code == "ShiftRight" ? false : true;
	// !shiftPress
	// 	? console.log(
	// 			"The shift key was released" +
	// 				` and the value of shiftpress (which should be false) is ${shiftPress}`
	// 	  )
	// 	: console.log();
	// console.log(
	// 	!shiftPress ? "Shift Key is pressed" : "Some other key is pressed"
	// );
});
