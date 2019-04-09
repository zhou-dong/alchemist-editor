import fs from "fs";
// Queue Example

const code = `// Queue Example
const capacity = 5;
const queue = new Queue(capacity);

for(let i = 0; i < capacity; i++){
  queue.offer(i + 1);
}

for(let i = 0; i < capacity; i++) {
  queue.poll();
}

queue.start(1000);
`

