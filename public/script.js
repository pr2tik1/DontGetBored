document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('get-task-button');
    const taskDisplay = document.getElementById('task-display');

    button.addEventListener('click', () => {
        fetch('https://bored-api.appbrewery.com/random')
            .then(response => response.json())
            .then(data => {
                taskDisplay.textContent = `${data.activity}`;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                taskDisplay.textContent = 'Please wait for few seconds and then retry !';
            });
    });
});
