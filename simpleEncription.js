/* For building the encrypted string:
Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
Do this n times!

Examples:

"This is a test!", 1 -> "hsi  etTi sats!"
"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
Write two methods:

function encrypt(text, n)
function decrypt(encryptedText, n)
*/

/*
function encrypt(text, n) {
	const headStr = [];
	const endStr = [];

	if (n <= 0) return text;
	if (text === '' || text == null) return text;

	for (let i = 0; i <= text.length; i++) {
		if ((i + 1) % 2 == 0) {
			headStr.push(text[i]);
		} else {
			endStr.push(text[i]);
		}
	}
	n--;

	let finalString = [ ...headStr, ...endStr ].join('');

	if (n > 0) {
		return encrypt(finalString, n);
	} else return finalString;
}
*/

function encrypt(text, n) {
	if (n <= 0) return text;
	if (text === '' || text == null) return text;

	const stringList = text.split('').reduce((acc, char, index) => {
		if ((index + 1) % 2 == 0) {
			acc.head.push(char);
		} else {
			acc.tail.push(char);
		}

		return acc;
	}, { tail: [], head: [] });

	let finalString = [ ...stringList.head, ...stringList.tail ].join('');

	n--;

	if (n > 0) {
		return encrypt(finalString, n);
	} else return finalString;
}

function decrypt(encryptedText, n) {
	if (n <= 0) return encryptedText;
	if (encryptedText == '' || encryptedText == null) return encryptedText;

	let mid = encryptedText.length / 2;
	let head = encryptedText.slice(0, mid);
	let tail = encryptedText.slice(mid, encryptedText.length);

	const finalStr = [];

	for (let i = 0; i <= head.length; i++) {
		let pair = head[i] ? tail[i] + head[i] : tail[i];
		finalStr.push(pair);
	}
	n--;

	if (n > 0) {
		return decrypt(finalStr.join(''), n);
	}

	return finalStr.join('');
}

// console.log(encrypt('This is a test!', 0));
console.log(encrypt('This is a test!', 1));
// console.log(encrypt('This is a test!', 2));
// console.log(encrypt('This is a test!', 3));
// console.log(encrypt('This is a test!', 4));

// // decrypt('This is a test!', 0);
// console.log(decrypt('hsi  etTi sats!', 1));
// console.log(decrypt('s eT ashi tist!', 2));
// console.log(decrypt(' Tah itse sits!', 3));
