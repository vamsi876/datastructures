class node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class linkedList{
    constructor(value){
        this.head={value:value, next:null};
        this.tail=this.head
        this.length=1

    }
    append(value){
        const newNode=new node(value)
        if (this.head==null){
            this.head=newNode;
        }
        else{
            this.tail.next=newNode;
            this.tail=newNode;
            this.length++
        }
        return this
    }
    prepend(value){
      const preNode = new node(value);
      if(this.head == null){
          this.head = preNode;
      }
      else{
          preNode.next = this.head;
          this.head = preNode;
          this.length++;
      }
      return this;
  }
  insert(index,value){
    const newNode=new node(value);
    let count=1
    let currentNode=this.head
    while(count<index){
      currentNode=currentNode.next;
      count++
    }
    newNode.next=currentNode.next;
    currentNode.next=newNode
    this.length++;
  }

  deleteTail() {
    let currentNode = this.head;
    while (currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
    this.tail = currentNode;
    this.length--;
  }
  delhead() {
    this.head = this.head.next;
    this.length--;
  }


  delete_index(index){
    let count=1;
    let currentNode=this.head;
    if(index<0 || index>=this.length){
      console.log("invalid index")
    }
    else{
      if(index==0){
        this.head=currentNode.next;
        this.length--;
      }
      else{
      var previousNode=currentNode
    while(count<=index){
      previousNode=currentNode
      currentNode=currentNode.next;
      count++
    }
    previousNode.next=currentNode.next;
    this.length--;
  }}}


    print(){
      let arr=[]
      let currentNode=this.head
      while(currentNode!==null){
        arr.push(currentNode.value)
        currentNode=currentNode.next
      }
      return arr.join(" - ")
    }
    

  search(key) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value == key) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }


  }

    
let l1=new linkedList(1);
console.log(l1.print())

l1.append(10).append(15);
console.log(l1.print())

l1.prepend(2).prepend(3).prepend(12)
console.log(l1.print())

l1.insert(1,5)
console.log(l1.print())

l1.delete_index(1)
console.log(l1.print())

l1.search(15)
console.log(l1)

