// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null
//     }
// }


// class LL {
//     constructor(data){
//         this.head = null
//     }

//     insert(data){
//         let newNode = new Node(data)
//         if(this.head === null){
//             this.head = newNode
//             return
//         }

//         let current = this.head;
//         newNode.next = current;
//         this.head = newNode;
//     }

//     print(){
//         if(this.head === null){
//             console.log("empty LL");
//         }

//         let current = this.head;
//         let res = [];

//         while(current !== null){
//             res.push(current.data)
//             current = current.next;
//         }

//         console.log(res.join(" -> "));

//     }

//     reve(){
//         if(this.head === null){
//             console.log("empty LL");
//             return
//         }

//         let current = this.head;
//         let res = [];

//         while(current !== null){
//             res.push(current.data)
//             current = current.next;
//         }

//         res = res.reverse();
//         console.log(res.join(" -> "));

//     }
// }

// let list = new LL();

// list.insert(10)
// list.insert(11)
// list.insert(12)
// list.print()
// list.reve()



arr = [1, 3, 5, 7, 9, 11]
target = 7

let start = 0;
let end = arr.length - 1




while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
        return console.log(mid);
    }

    if (target >= arr[mid]) {
        start = mid + 1
    } else {
        end = mid - 1
    }
}