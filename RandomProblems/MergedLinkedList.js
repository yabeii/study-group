class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  addNext(node) {
    this.next = node;
  }
}

class LinkedList {
  constructor(nodeValue) {
    this.head = new Node(nodeValue);
    this.tail = this.head;
  }

  addNext(nodeValue) {
    this.tail.addNext(new Node(nodeValue));
    this.tail = this.tail.next;
  }

  print() {
    let pointer = this.head;
    let msg = "";
    while (pointer.next !== null) {
      msg += `${pointer.value} -> `;
      pointer = pointer.next;
    }
    msg += `${pointer.value}`;
    console.log(msg);
  }
}

let list = new LinkedList(1);
list.addNext(2);
list.addNext(3);

list.print();

let list2 = new LinkedList(2);
list2.addNext(3);
// list2.addNext(4);
list2.addNext(5);

list2.print();


function mergeTwoList (listOne, listTwo) {
  let pointerOne = listOne.head;
  let pointerTwo = listTwo.head;
  let merged;

  if (pointerOne.value < pointerTwo.value) {
    merged = new LinkedList(pointerOne.value);
    pointerOne = pointerOne.next;
  } else {
    merged = new LinkedList(pointerTwo.value);
    pointerTwo = pointerTwo.next;
  }

  while (pointerOne !== null && pointerTwo !== null) {
    if (pointerOne.value < pointerTwo.value) {
      merged.addNext(pointerOne.value);
      pointerOne = pointerOne.next;
    } else {
      merged.addNext(pointerTwo.value);
      pointerTwo = pointerTwo.next;
    }
  }

  if (pointerOne === null) {
    merged.tail.next = pointerTwo;
  } 
  if (pointerTwo === null) {
    merged.tail.next = pointerOne;
  }

  return merged;
}

let sample = mergeTwoList(list, list2);
sample.print();