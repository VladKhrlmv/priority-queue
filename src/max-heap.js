const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}
 
	push(data, priority) {
		// this.data = data;
		// this.priority = priority;
		insertNode([data,priority]);
		shiftNodeUp([data,priority]);
	}

	pop() {
		if(this.parentNodes.length > 0) {
			detachRoot();
			restoreRootFromLastInsertedNode(root);
			shiftNodeDown(fakeDetachedNode);
			return root.data;
		}
	}

	detachRoot() {
		this.root = null;
		return this.root;
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		if(!(this.parentNodes.length > 0))
			return true;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {
		if(!(this.parentNodes.length > 0))
			this.root = node;
		this.appendChild(node);
		
			
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
