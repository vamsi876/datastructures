class queue {
    constructor() {
      this.insertionstack = [];
      this.deletionstack = [];
    }
    enqueue(value) {
      this.insertionstack.push(value);
    }
    dequeue() {
      if (this.deletionstack.length == 0) {
        while (this.insertionstack.length > 0) {
          var temp = this.insertionstack.pop();
          this.deletionstack.push(temp);
        }
      }
      var poped = this.deletionstack.pop();
      while (this.deletionstack.length > 0) {
        var temp = this.deletionstack.pop();
        this.insertionstack.push(temp);
      }
      return poped;
    }
  }
  
  const qss = new queue();
  qss.enqueue(2);
  qss.enqueue(3);
  qss.enqueue(4);
  qss.enqueue(5);
  qss.enqueue(6);
  qss.enqueue(7);
  console.log(qss);
  qss.dequeue();
  console.log(qss);
  qss.enqueue(10);
  console.log(qss);
