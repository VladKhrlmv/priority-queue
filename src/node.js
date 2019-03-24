class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if(this.left != null && this.right == null) {
			this.right = node;
		} else if(this.left == null && this.right == null) {
			this.left = node;
		}
		node.parent = this;
	}

	removeChild(node) {
		if(node == this.left) {
			this.left = null;
			node.parent = null;
            return;
		}
		if(node == this.right) {
			this.right = null;
			node.parent = null;
            return;
		}
		throw Error;
	}

	remove() {
		if (this.parent != null)
        	this.parent.removeChild(this);
	}

	swapWithParent() {
		if (this.parent == null) {
			return;
		}
		//5
		if(this.left != null && this.parent.right != null) {
			this.right = this.parent.right;
			let b = this.left;
			this.left = this.parent;
			this.parent.left = b;
			return;
		}

		//4
		if(this.parent.right != null){
			this.parent.left.parent = this;
			return;
		}
				
		//с 1 по 3
		let a = this.parent.parent;
		this.parent.parent = this;
		this.parent = a;	
	

		


	}
}

module.exports = Node;
