// Define a list of tasks (using let/const and default values)
const tasks = [
    { id: 1, name: 'Learn JavaScript', completed: false },
    { id: 2, name: 'Build a Project', completed: false }
];

// Arrow function to add a new task
const addTask = (taskName, taskList = tasks) => {
    const newTask = { id: taskList.length + 1, name: taskName, completed: false };
    return [...taskList, newTask]; // Spread operator
};

// Arrow function to mark a task as completed
const completeTask = (taskId, taskList = tasks) => {
    return taskList.map(task =>
        task.id === taskId ? { ...task, completed: true } : task // Spread operator for immutability
    );
};

// Destructuring in parameters with default values
const printTasks = (taskList = tasks) => {
    console.log('Task List:');
    taskList.forEach(({ id, name, completed }) => {
        console.log(`${id}. ${name} - ${completed ? '✅' : '❌'}`); // Template literals
    });
};

// Simulate an async operation to fetch tasks
const fetchTasks = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(tasks); // Simulate data retrieval
        }, 1000);
    });
};

// Async/await to handle the fetch
const manageTasks = async () => {
    console.log('Fetching tasks...');
    const currentTasks = await fetchTasks(); // Awaiting the Promise
    printTasks(currentTasks);

    console.log('\nAdding a new task...');
    const updatedTasks = addTask('Practice ES6+ Features', currentTasks);
    printTasks(updatedTasks);

    console.log('\nMarking a task as completed...');
    const completedTasks = completeTask(2, updatedTasks);
    printTasks(completedTasks);
};

// Run the task manager
manageTasks();
