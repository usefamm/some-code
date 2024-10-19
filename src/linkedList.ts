// src/linkedList.ts

class Node<T> {
    public element: T;
    public next: Node<T> | null;

    constructor(element: T) {
        this.element = element;
        this.next = null; // `next` can be null because the end of the list has no next node
    }
}

class LinkedList<T> {
    private head: Node<T> | null;
    private size: number;

    constructor() {
        this.head = null; // `head` is null when the list is empty
        this.size = 0;
    }

    // Insert an element at the end of the linked list
    insert(element: T): void {
        const node = new Node(element);
        
        // If the linked list is empty, make this node the head
        if (this.head === null) {
            this.head = node;
        } else {
            // Traverse the list to find the last node
            let current: Node<T> | null = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            // Add the new node at the end
            current.next = node;
        }
        this.size++;
    }

    // Delete an element from the linked list
    delete(element: T): T | string {
        // If the list is empty, return a message
        if (this.head === null) return "List is empty";

        let current: Node<T> | null = this.head;
        let prev: Node<T> | null = null;

        // Traverse the list to find the node to delete
        while (current !== null) {
            if (current.element === element) {
                if (prev === null) {
                    // If the element is found at the head, change the head
                    this.head = current.next;
                } else {
                    // Otherwise, bypass the current node
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return "Element not found";
    }

    // Print the list as a string
    printList(): string {
        let current: Node<T> | null = this.head;
        const elements: T[] = [];
        
        // Traverse the list to collect elements
        while (current !== null) {
            elements.push(current.element);
            current = current.next;
        }
        
        return elements.join(" ");
    }
}

export default LinkedList;
