/* 
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

likes [] -- must be "no one likes this"
likes ["Peter"] -- must be "Peter likes this"
likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"
*/

// function likes(names) {
// 	var lengthNames = names.length;
// 	var message = '';
// 	if (lengthNames == 0) {
// 		message = `no one likes this`;
// 	} else if (lengthNames == 1) {
// 		message = `${names[0]} likes this`;
// 	} else if (lengthNames == 2) {
// 		message = `${names[0]} and ${names[1]} like this`;
// 	} else if (lengthNames == 3) {
// 		message = `${names[0]}, ${names[1]} and ${names[2]} like this`;
// 	} else if (lengthNames >= 4) {
// 		message = `${names[0]}, ${names[1]} and ${lengthNames - 2} others like this`;
// 	}
// 	// console.log(message);
// 	return message;
// }

function likes(names) {
	var lengthNames = names.length;

	switch (true) {
		case lengthNames === 1:
			return `${names[0]} likes this`;
		case lengthNames === 2:
			return `${names[0]} and ${names[1]} like this`;
		case lengthNames === 3:
			return (message = `${names[0]}, ${names[1]} and ${names[2]} like this`);
		case lengthNames > 3:
			return (message = `${names[0]}, ${names[1]} and ${lengthNames - 2} others like this`);
		default:
			return 'no one likes this';
	}
}
console.log(likes([]));
console.log(likes([ 'Peter' ]));
console.log(likes([ 'Jacob', 'Alex' ]));
console.log(likes([ 'Max', 'John', 'Mark' ]));
console.log(likes([ 'Alex', 'Jacob', 'Mark', 'Max', 'vivian' ]));
