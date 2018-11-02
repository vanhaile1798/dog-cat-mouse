function Mouse(name, color) {
	this.name = name;
	this.color = color;
	this.speak = function() {
		console.log('Hello everyone here!');
	}
}

let mickeyMouse = new Mouse('Mickey', 'black');

mickeyMouse.speak();

module.exports = Mouse;