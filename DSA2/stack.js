//---------------------------------------create a stack using array

// class Stack{
//     constructor(){
//         this.items=[]
//     }

//     push(value){
//         let index= this.items.length
//         this.items[index]=value
//     }

//     pop(){
//          this.items.length--
//     }

//     peek(){
//         return this.items[this.items.length-1]
//     }

//     display(){
//         return this.items
//     }


// }

// let stack = new Stack()
// stack.push(3)
// stack.push(4)
// stack.push(6)
// stack.push(5)
// stack.push(8)
// console.log(stack.display())
// stack.pop()
// console.log('stack after pop',stack.display())


//--------------------------------------stack using linked list

class Node{
    constructor(value){
        this.data=value
        this.next =null
    }
}

class Stack{
    constructor(){
        this.top=null
        this.size=0
    }

    push(value){
        let node = new Node(value)
        if(this.size===0){
            this.top = node
        }else{
            node.next = this.top
            this.top=node
        }

        this.size++
    }

    pop(){
        if(this.top===null){
            console.log('empty stack')
            return
        }
        let remove=this.top
        this.top=this.top.next
        remove.next=null
        this.size--

    }

    peek(){
        if(this.top===null){
            console.log('empty stack')
            return
        }
        return this.top.data
    }

    display(){
        if(this.top===null){
            console.log('empty stack')
            return
        }

        let arr = []
        let curr = this.top
        while(curr){
            arr.push(curr.data)
            curr=curr.next
        }

        return arr
    }
}

let stack = new Stack()
stack.push(1)
stack.push(10)
stack.push(12)
stack.push(5)
stack.push(4)
console.log(stack.display())