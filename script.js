document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('get-task-button');
    const taskDisplay = document.getElementById('task-display');

    button.addEventListener('click', () => {
        fetch('https://dummyjson.com/todos')
            .then(response => response.json())
            .then(data => {
                const randomTask = data.todos[Math.floor(Math.random() * data.todos.length)];
                taskDisplay.textContent = `${randomTask.todo}`;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                taskDisplay.textContent = 'Please wait for a few seconds and retry!';
            });
    });
});
