function Cat() {
	this.stomach = [];
}

Car.prototype.eat = function(mouse) {
	this.stomach.push(mouse);
}


module.exports = Cat;