const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		if(maxSize)
			this.maxSize = maxSize ;
		else this.maxSize = 30 ;
		
        this.heap = new MaxHeap;
	}

	push(data, priority) {
		heap.push(data, priority);
		if (size()< this.maxSize) {
            this.heap.push(data, priority);
        } else {
          	throw Error;
        }
	}

	shift() {
		this.heap.push(data, priority);
	}

	size() {
		
	}

	isEmpty() {
		if(!(this.size() > 0))
			return true;
	}
}

module.exports = PriorityQueue;
