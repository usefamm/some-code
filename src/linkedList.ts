
class Node<T> {
    public element: T;
    public next: Node<T> | null;

    constructor(element: T) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList<T> {
    private head: Node<T> | null;
    private size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    insert(element: T): void {
        const node = new Node(element);
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    delete(element: T): string | T {
        if (!this.head) return "List is empty";

        let current = this.head;
        let prev: Node<T> | null = null;

        while (current != null) {
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
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

    printList(): string {
        let current = this.head;
        const elements: T[] = [];
        while (current) {
            elements.push(current.element);
            current = current.next;
        }
        return elements.join(" ");
    }
}

export default LinkedList;
