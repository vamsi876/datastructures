class node{
    constructor(value){
        this.value=value
        this.next=null;
    }
}
class stack{
    constructor(value){
        this.head={value: value, next:null}
        this.tail=this.head
        this.length=1;
    }
    add(value){
        const newNode= new node(value);
        if(this.head==null){
            this.head=this.tail= value
        }
        else{
            let temp = this.head
            this.head=newNode;
            this.head.next=temp;
        }
        this.length++
        return this
        
    }
    remove(){
        let temp;
        if(this.head==null){
            return null;
        }
        else{
            temp = this.head
            this.head.next=this.head

        }
        this.length--;
        return temp.value;
       
        

    }

}

const sll= new stack();
sll.add(2)
sll.add(4)
sll.add(5)
sll.add(8)
console.log(sll)
console.log(sll.remove())
console.log(sll)