
class Queue<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    enqueue(element: T): void {
        this.items.push(element);
    }

    dequeue(): T | string {
        if (this.isEmpty()) return "Underflow";
        return this.items.shift() as T;
    }

    front(): T | string {
        if (this.isEmpty()) return "No elements in Queue";
        return this.items[0];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    printQueue(): string {
        return this.items.join(" ");
    }
}

export default Queue;
