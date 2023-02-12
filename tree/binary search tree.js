class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class BinarySearchTree{
    constructor(){
    this.root=null
    }
    insert(value){
        const NewNode= new Node(value) 
        if(this.root===null){
            this.root= NewNode;
        }else{
            let curr=this.root
            while(true){
                if(value>curr.value){
                    if(curr.right===null){
                        curr.right=NewNode
                        break
                    }else{
                        curr=curr.right
                    }
                }else if(value<curr.value){
                    if(curr.left===null){
                        curr.left=NewNode
                        break
                    }else{
                        curr=curr.left
                    }

                }
            }
        }
        
    }

    search (root,value){
        if(root===null){
            return false
        }
        else{
            if(root.value===value){
                return true
            }
            else{
                if(root.value>value){
                    return this.search(root.left, value)
                }
                else{
                    return this.search(root.right,value)
                }
            }
        }
    }
    getMin(node= this.root){
        while(node.left){
            node=node.left
        }
        return node.value

    }
    getMax(node= this.root){
        while(node.right){
            node=node.right
        }
        return node.value

    }

}
let tree= new BinarySearchTree()
tree.insert(5)
tree.insert(6)
tree.insert(4)
