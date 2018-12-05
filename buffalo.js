function Buffalo() {
	this.stomach = [];
}

Buffalo.prototype.eat = function(grass) {
	this.stomach.push(grass);
};

let blackBuff = new Buffalo();

module.exports = Buffalo;