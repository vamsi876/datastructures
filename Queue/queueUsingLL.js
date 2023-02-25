class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class QueueUsingLL {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    this.size++;
  }

  dequeue() {
    let current = this.head;
    if (this.head == null) console.log("Null");
    else {
      let list = "";
      while (current.next.next) {
        current = current.next;
      }
      current.next = null;
    }
  }

  print() {
    let current = this.head;
    if (this.head == null) console.log("Null");
    else {
      let list = "";
      while (current) {
        list += current.value + " -> ";
        current = current.next;
      }
      console.log(`${list}Null`);
    }
  }
}

const queue = new QueueUsingLL();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.print();
queue.dequeue();
queue.print();
