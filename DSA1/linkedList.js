
// // class Node{
// //     constructor(value){
// //         this.value=value
// //         this.next=null
// //     }
// // }


// // class LinkedList{
// //     constructor(){
// //         this.head=null
// //         this.size=0
// //     }

// //     getSize(){
// //         return this.size
// //     }

// //     isEmpty(){
// //         if(this.size==0){
// //             return true
// //         }else{
// //             return false
// //         }
// //     }


// //     append(value){
// //         let node = new Node(value)
// //         if(this.isEmpty()){
// //             this.head=node
// //         }
// //         else{
// //             let curr = this.head
// //             while(curr.next !==null){
// //                 curr=curr.next
// //             }
// //             curr.next=node
// //         }
// //         this.size++
// //     }

// //     prepend(value){
// //         let node = new Node(value)
// //             if(this.isEmpty()){
// //                 this.head=node
// //             }
// //             else{
// //                 let prev=this.head
// //                 node.next=prev
// //                 this.head=node
// //             }
// //             this.size++

// //     }

// //     display(){
// //         let arr=[]
// //         if(this.isEmpty()){
// //             return 'empty'
// //         }
// //         let curr=this.head
// //         while(curr.next!==null){
// //             arr.push(curr.value)
// //             curr=curr.next
// //         }
// //         arr.push(curr.value)
// //         return arr

// //     }

// //     insertBefore(value,target){
// //         let node =new Node(value)
// //         if(this.isEmpty()){
// //             this.head=node
// //         }else{
// //             // let prev
// //             let curr=this.head
// //             if(curr.value===target){
// //                 this.prepend(value)
// //             }
// //             while(curr.next!==null ){
// //                 if(curr.next.value===target){
// //                     node.next=curr.next
// //                     curr.next=node
// //                     this.size++
// //                     return
// //                 }
// //                 curr=curr.next
// //             }
// //         }
// //     }

// //     insertAfter(value,target){
// //         let node = new Node(value)
// //         if(this.isEmpty()){
// //             this.head=node
// //         }else{
// //             let curr= this.head
// //             if(curr.value===target){
// //                 this.append(value)
// //             }else{
// //                 while(curr.next!==null){
// //                     if(curr.value===target){
// //                         node.next=curr.next
// //                         curr.next=node
// //                         this.size++
// //                         return
// //                     }
// //                     curr=curr.next
// //                 }
// //                 if(curr.value===target){
// //                     this.append(value)
// //                 }
// //             }
// //         }
// //     }

// //     sort(){
// //         let curr=this.head
// //         let next = null
// //         while(curr){
// //             next=curr.next
// //             while(next!==null){
// //                 if(curr.value>next.value){
// //                     let temp=curr.value
// //                     curr.value=next.value
// //                     next.value=temp
// //                 }
// //                 next=next.next

// //             }

// //             curr=curr.next
// //         }
// //     }

// // }

// // let linkedList = new LinkedList()
// // console.log(linkedList.display());
// // linkedList.append(4)
// // linkedList.append(3)
// // linkedList.append(2)
// // console.log(linkedList.display());
// // linkedList.prepend(0)
// // console.log(linkedList.display());
// // linkedList.insertBefore(6,0)
// // console.log(linkedList.display());
// // linkedList.prepend(0)
// // console.log(linkedList.display());
// // linkedList.insertAfter(8,2)
// // console.log(linkedList.display());
// // linkedList.insertAfter(1,4)
// // console.log(linkedList.display());
// // console.log(linkedList.getSize());
// // const array=[11,34,]
// // for(let i=0;i<array.length;i++){
// //     linkedList.append(array[i])
// // }
// // console.log('linked before sorting',);
// // console.log(linkedList.display());
// // console.log('linked after sorting',);
// // linkedList.sort()
// // console.log(linkedList.display());


// //--------------------------------------------------------reverse a linked list

// // class Node{
// //     constructor(value){
// //         this.value=value
// //         this.next=null
// //     }
// // }


// // class LinkedList{
// //     constructor(){
// //         this.head=null
// //         this.size=0
// //     }

// //     getSize(){
// //         return this.size
// //     }

// //     isEmpty(){
// //         if(this.size==0){
// //             return true
// //         }else{
// //             return false
// //         }
// //     }

// //     append(value){
// //         let node= new Node(value)
// //         if(this.isEmpty()){
// //             this.head=node
// //         }
// //         else{
// //             let curr= this.head
// //             while(curr.next!==null){
// //                 curr=curr.next
// //             }
// //             curr.next=node
// //         }
// //         this.size++
// //     }

// //     prepend(value){
// //         let node= new Node(value)
// //         if(this.isEmpty()){
// //             this.head=node
// //         }else{
// //              node.next=this.head
// //              this.head=node
// //         }
// //         this.size++
// //     }

// //     display(){
// //         let arr=[]
// //         if(this.size==0){
// //             return 'empty'
// //         }else{
// //             let curr=this.head
// //             while(curr){
// //                 arr.push(curr.value)
// //                 curr=curr.next
// //             }

// //         }
// //         return arr
// //     }

// //     reverse(){
// //         let next=null
// //         let curr=this.head
// //         let prev=null
// //         while(curr){
// //             next = curr.next
// //             curr.next= prev
// //             prev =curr
// //             curr=next
// //         }
// //         this.head=prev
// //     }
// // }

// // let linkedList= new LinkedList()
// // linkedList.prepend(3)
// // linkedList.prepend(1)
// // linkedList.append(2)
// // console.log('linked list  before reverse',linkedList.display());
// // linkedList.reverse()
// // console.log('linked list after reverse',linkedList.display());

// //-------------------------------------------------------------------merge 2 linked list



// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }


// class LinkedList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }

//     getSize() {
//         return this.size
//     }

//     isEmpty() {
//         if (this.size == 0) {
//             return true
//         } else {
//             return false
//         }
//     }

//     append(value) {
//         let node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         }
//         else {
//             let curr = this.head
//             while (curr.next !== null) {
//                 curr = curr.next
//             }
//             curr.next = node
//         }
//         this.size++
//     }

//     prepend(value) {
//         let node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     display() {
//         let arr = []

//             let curr = this.head
//             while (curr) {
//                 arr.push(curr.value)
//                 curr = curr.next
//             }


//         return arr
//     }

//     reverse() {
//         let prev = null;
//         let curr = this.head
//         let next = null
//         while (curr) {
//             next = curr.next
//             curr.next = prev
//             prev = curr
//             curr = next
//         }
//         this.head = prev
//     }


//     mergeLinkedList(list) {
//         let dummy = new Node(null)
//         let curr = this.head
//         let curr2 = list.head
//         let prev = dummy
//         while (curr !== null && curr2 !== null) {
//             if (curr.value < curr2.value) {
//                 prev.next = curr
//                 curr=curr.next
//             } else {
//                 prev.next = curr2
//                 curr2=curr.next
//             }
//             prev=prev.next
//         }
//         if (curr !== null) {
//             prev.next = curr
//         } else {
//             prev.next = curr2
//         }
//         return dummy.next

//     }


// }

// let linkedList = new LinkedList()
// linkedList.prepend(3)
// linkedList.prepend(1)
// linkedList.append(2)
// console.log('linked list  before reverse', linkedList.display());
// linkedList.reverse()
// console.log('linked list after reverse', linkedList.display());
// let linkedList2=new LinkedList()
// linkedList2.append(8)
// linkedList2.append(18)
// linkedList2.append(28)
// linkedList2.append(9)
// console.log('linkedList 2',linkedList2.display());
// let mergedList = new LinkedList()
//  mergedList.head = linkedList.mergeLinkedList(linkedList2)
// console.log(mergedList.display());



//---------------------------------remove even numbers from a linked list

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    isEmpty() {
        if (this.size === 0) {
            return true
        } else {
            return false
        }
    }

    append(value) {
        let newNode = new Node(value)
        if (this.isEmpty()) {
            this.head = newNode
        } else {
            let curr = this.head
            while (curr.next !== null) {
                curr = curr.next
            }
            curr.next = newNode
        }
        this.size++

    }

    removeOdd() {
        if (this.isEmpty()) {
            console.log('empty list')
            return
        }

        while (this.head !== null && this.head.value % 2 !== 0) {
            this.head = this.head.next
            this.size--
        }

        let curr = this.head
        let prev = null
        while (curr !== null) {
            if (curr.value % 2 !== 0) {
                prev.next = curr.next
                this.size--
            } else {
                prev = curr
            }
            curr = curr.next
        }
    }

    removeEven() {
        if (this.isEmpty()) {
            console.log('empty list')
            return
        }

        while (this.head !== null && this.head.value % 2 === 0) {
            this.head = this.head.next
            this.size--
        }

        let curr = this.head
        let prev = null
        while (curr !== null) {
            if (curr.value % 2 === 0) {
                prev.next = curr.next
                this.size--
            } else {
                prev = curr
            }
            curr = curr.next
        }
    }

    display() {

        if (this.isEmpty()) {
            console.log('empty list')
            return
        }
        let arr = []
        let curr = this.head
        while (curr.next !== null) {
            arr.push(curr.value)
            curr = curr.next
        }
        arr.push(curr.value)
        console.log(arr)
    }
}

const list = new LinkedList()
list.display()
list.append(3)
list.append(4)
list.append(5)
list.append(6)
list.append(7)
list.display()
// list.removeEven()
list.removeOdd()
list.display()

