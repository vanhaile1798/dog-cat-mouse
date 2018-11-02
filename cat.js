function Cat() {

}

Car.prototype.eat = function(mouse) {
	this.stomach.push(mouse);
}


module.exports = Cat;