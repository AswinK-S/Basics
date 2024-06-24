// create a queue using linked list 

class Node{
    constructor(value){
        this.data = value
        this.next = null
    }
}

class Queue{
    constructor(){
        this.front = null
        this.rear = null
        this.size = 0
    }


    size(){
        return this.size
    }

    enqueue(value){
        let node = new Node(value)
        if(this.size===0){
            this.front =node
            this.rear = node
        }else{
           this.rear.next=node
           this.rear =node
        }
        this.size++
    }

    dequeue(){
        if(this.size===0){
            console.log('empty queue')
            return
        }

        let removeData= this.front.data
        this.front = this.front.next
        this.size--
        return removeData
    }

    peek(){
        if(this.front ===0){
            console.log('empty');
            return
        }
        return this.front.data
    }

    display(){
        if(this.size===0){
            console.log('empty queue')
            return
        }

        let curr=this.front
        let arr=[]
        while (curr!==null){
            arr.push(curr.data)
            curr=curr.next
        }
        return arr
    }
}


let queue = new Queue()
queue.enqueue(2)
queue.enqueue(12)
queue.enqueue(24)
queue.enqueue(32)
queue.enqueue(23)
console.log('queue',queue.display());
console.log( queue.dequeue()); 
console.log('queue after dequeue',queue.display());