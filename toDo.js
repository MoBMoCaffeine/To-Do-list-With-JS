const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let todos = [];
const FILE = "toDos.json";

if (fs.existsSync(FILE)) {
  todos = JSON.parse(fs.readFileSync(FILE, "utf8"));
}
console.log("========== To-Do List CLI ==========");
console.log(`command:
    add <task>
    list
    delete <index number>
    exit
    `);
rl.setPrompt(">> ");
rl.prompt();

rl.on("line", (input) => {
  const args = input.trim().split(" ");
  const command = args[0];

  switch (command) {
    case "add":
      const task = args.slice(1).join(" ");
      if (task) {
        todos.push(task);
        fs.writeFileSync(FILE, JSON.stringify(todos, null, 2));
        console.log(`done adding: ${task}`);
      } else console.log("write a task after ((add))!");
      break;
    case "list":
      if (todos.length === 0) console.log("there is no task to show!");
      else {
        console.log("tasks: ");
        todos.forEach((t, i) => {
          console.log(`${i + 1}: ${t}`);
        });
      }
      break;
    case "delete":
      const index = parseInt(args[1]);
      if (!isNaN(index) && index > 0 && index <= todos.length) {
        const removed = todos.splice(index - 1, 1);
        fs.writeFileSync(FILE, JSON.stringify(todos, null, 2));
        console.log(`done deleting: ${removed[0]}`);
      } else {
        console.log("invalid index!");
      }
      break;
    case "exit":
      console.log("See You Soon Mate :)");
      rl.close();
      break;
    default:
      console.log(`undefiend command! try:
                add
                list
                delete
                exit
            `);
  }
  rl.prompt();
});
