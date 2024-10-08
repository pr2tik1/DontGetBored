document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('get-task-button');
    const taskDisplay = document.getElementById('task-display');

    button.addEventListener('click', () => {
        fetch('/api/random')
            .then(response => response.json())
            .then(data => {
                taskDisplay.textContent = `${data.activity}`;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                taskDisplay.textContent = 'Please wait for a few seconds and retry!';
            });
    });
});
