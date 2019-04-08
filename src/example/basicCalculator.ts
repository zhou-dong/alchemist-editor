import { Index } from "../../../alchemist-core/dist";

const input = "(1+(4+5+2)-3)+(6+8)";

const index = new Index(document.getElementById("display") as HTMLElement);

const stack1 = index.createStack(10, "stack1");
const stack2 = index.createStack(10, "stack2");

input.split("").forEach(char => {
    switch (char) {
        case "(":
            break;
        case ")":
            const operator = stack2.pop();
            const num2 = parseInt(stack1.pop() as string);
            const num1 = parseInt(stack1.pop() as string);
            if (operator === "-") {
                stack1.push(num1 - num2);
            } else if (operator === "+") {
                stack1.push(num1 + num2);
            }
            break;
        case "+":
            stack2.push("+");
            break;
        case "-":
            stack2.push("-");
            break;
        default: stack1.push(char);
    }
});

while (!stack2.isEmpty()) {
    const operator = stack2.pop();
    const num2 = parseInt(stack1.pop() as string);
    const num1 = parseInt(stack1.pop() as string);
    if (operator === "-") {
        stack1.push(num1 - num2);
    } else if (operator === "+") {
        stack1.push(num1 + num2);
    }
}

index.start(500);
console.log(stack1.peek());
