class UI {
    alertMessage(message, style) {
        // create div for alert message
        const div = document.createElement('div');
        // add class to div
        div.className = `alert ${style}`;
        // create string value of message for div
        const text = document.createTextNode(message);
        // insert text into div
        div.appendChild(text);
        // find components - before and after alert div element
        const card = document.querySelector('.card-content');
        const form = document.querySelector('#task-form');
        // add alert info html
        card.insertBefore(div, form);
        // set alert messega up to 5 sec
        setTimeout(function () {
            document.querySelector(".alert").remove();
        }, 5000);
    }

    addTaskToTable(task) {
        // create li
        const li = document.createElement('li');
        // add class
        li.className = 'collection-item';
        // add input value
        li.appendChild(document.createTextNode(task.task));
        // link for element removing
        const link = document.createElement('a');
        // add css to link
        link.className = 'secondary-content';
        // add fas icon
        link.innerHTML = '<i class="fas fa-backspace"></i>';
        // add link into li
        li.appendChild(link);
        // add li into ul
        taskList.appendChild(li);
    }
}