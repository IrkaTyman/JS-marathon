function rightNumString(){
	let numString = prompt('Введите номер, начиная с "+7" без пробелов и доп.символов');

	let result = `+7 (${numString.slice(2,5)}) ${numString.slice(5,8)}-${numString.slice(8,10)}-${numString.slice(10)}`;
	alert(` Ваш номер : ${result}`);
}

rightNumString();