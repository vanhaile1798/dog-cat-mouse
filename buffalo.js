function Buffalo() {
	this.stomach = [];
}

Buffalo.prototype.eat = function(grass) {
	this.stomach.push(grass);
};

module.exports = Buffalo;