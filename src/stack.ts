class Stack<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  push(element: T): void {
    this.items.push(element);
  }

  pop(): T | string {
    if (this.isEmpty()) return "Underflow";
    return this.items.pop() as T;
  }

  peek(): T | string {
    if (this.isEmpty()) return "Underflow";
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  printStack(): string {
    return this.items.join(" ");
  }

  size(): number {
    return this.items.length;
  }

  reverse(): void {
    this.items.reverse();
  }
}

export default Stack;
