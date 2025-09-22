# To-Do List CLI

A simple command-line interface (CLI) for managing a to-do list. Tasks can be added, listed, and deleted. The list is saved persistently in a JSON file.

## Features

- Add new tasks to the list.
- List all tasks with index numbers.
- Delete tasks by their index number.
- Save tasks to a file (`toDos.json`) for persistence.
- Simple and user-friendly command prompts.

## Installation

1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Clone or download this project to your local machine.
3. Open a terminal in the project directory.
4. Run the program with the command:

Replace `yourfilename.js` with the actual filename of the script.

## Usage

When the program starts, you will see a prompt `>> `. Use the following commands:

- `add <task>`  
Adds a new task to your to-do list.  
Example: `add Buy groceries`

- `list`  
Displays all tasks with their index numbers.

- `delete <index number>`  
Deletes the task at the specified index.  
Example: `delete 2`

- `exit`  
Exits the program.

## Example Session
`========== To-Do List CLI ==========
command:
add <task>
list
delete <index number>
exit`

`add Finish homework
done adding: Finish homework
list
tasks:
1: Finish homework
delete 1
done deleting: Finish homework
list
there is no task to show!
exit
See You Soon Mate :)`


## Notes

- Tasks are saved in the file `toDos.json`. Do not delete this file if you want to keep your tasks.
- Commands are case-sensitive.
- The program will notify and prompt again on invalid commands or indexes.


