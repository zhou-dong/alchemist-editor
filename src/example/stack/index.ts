import Stack from "alchemist-core";
import fs from "fs";

const title = "stack example"

const code = `
const queue = new Queue(5);

for(let i = 0; i < 5; i++){
  queue.offer(i);
}

for(let i = 0; i < 5; i++) {
  queue.poll();
}

queue.start(1000);
`
