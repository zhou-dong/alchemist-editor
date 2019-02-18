import { Index } from "alchemist-core";

const index = new Index(document.getElementById("display"));

const stack = index.createStack("stack1");
const stack2 = index.createStack("stack2");

stack.push(0);
stack2.push("a");

stack.push(1);
stack2.push("b");

stack.push(2);
stack2.push("c");

stack.push(3);
stack2.push('d');

stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
stack.push(9);

stack.pop();

stack2.pop();

stack.pop();
stack2.pop();
stack.pop();
stack.pop();
stack2.pop();
stack.pop();
stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// stack2.pop();

index.play(1000);