class UI {
    addPersonToTable(person) {
        // create tr
        const tr = document.createElement('tr');
        // create all td with person data
        tr.innerHTML = `<td>${person.firstName}</td>
                        <td>${person.lastName}</td>
                        <td>${person.city}</td>
                        <td>${person.street}</td>
                        <td>${person.postcode}</td>
                        <td>${person.phone}</td>
                        <td><a href="#"><i class="fas fa-backspace"></i></a></td>
        `;
        // append tr to table
        contacts.appendChild(tr);
    }

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
        const form = document.querySelector('#contact-form');
        // add alert info html
        card.insertBefore(div, form);
        // set alert messega up to 5 sec
        setTimeout(function () {
            document.querySelector(".alert").remove();
        }, 5000);
    }

    deletePersonFromTable(eventElement) {
        const personContact = eventElement.parentElement.parentElement.parentElement;
        personContact.remove();
    }

}