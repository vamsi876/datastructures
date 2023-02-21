class queue{
    constructor(){
    this.Elements = [];
}
push(item){
    this.Elements.push(item)
}
pop(item){
    return this.Elements.shift()
}
top(){
    return this.Elements[this.Elements.length-1]
}
size(){
    return this.Elements.length;
}
print(){
    return this.Elements.toString();
}

}
const qa= new queue()
qa.push(1)
qa.push(2)
qa.push(3)
qa.push(4)
qa.push(5)
console.log(qa)
qa.pop()
console.log(qa)
console.log(qa.top())
console.log(qa.size())
console.log(qa.print())
