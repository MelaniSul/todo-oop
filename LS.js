class LS {
    saveTask(task) {
        // get tasks data from Local Storage
        let tasks;
        // if data not exists
        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            // data is exists
            // get them from Local Storage
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    getTasks() {
        // get task data from Local Storage
        let tasks;
        // if data not exists
        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            // data is exists
            // get them from Local Storage
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        return tasks;
    }
}