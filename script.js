document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const tableBody = document.querySelector('#registrationTable tbody');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const faculty = document.getElementById('faculty').value;
        const course = document.getElementById('course').value;

		console.log("Նոր ուսանողի տվյալները");
		console.log("	Անուն Ազգանուն  - "+ firstName+"  "+lastName);
		console.log("	Ֆակուլտետ - "+faculty);
		console.log("	Կուրս -	"+course);
        if (!firstName || !lastName || !faculty || !course) {
			console.log("Ոչ ամբողջական լրացված դաշտեր");
            alert('Խնդրում ենք լրացնել բոլոր դաշտերը․');
            return;
        }

        const newRow = document.createElement('tr');

        const tableFirstName = document.createElement('td');
        tableFirstName.textContent = firstName;
        newRow.appendChild(tableFirstName);

        const tableLastName = document.createElement('td');
        tableLastName.textContent = lastName;
        newRow.appendChild(tableLastName);

        const tableFaculty = document.createElement('td');
        tableFaculty.textContent = faculty;
        newRow.appendChild(tableFaculty);

        const tableCourse = document.createElement('td');
        tableCourse.textContent = course;
        newRow.appendChild(tableCourse);
		
		const deleteStudent = document.createElement('td');
        deleteStudent.textContent = "x ";
        newRow.appendChild(deleteStudent);
		
		
        deleteStudent.classList.add('deleteStudent');
        deleteStudent.style.cursor = 'pointer';
        newRow.appendChild(deleteStudent);


		console.log("Տողը ավելացվեց");
        tableBody.appendChild(newRow);
		
		
        form.reset();
		console.log("Forme-ը դատարկվեց");
    });
	
	    tableBody.addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('deleteStudent')) {
            const row = event.target.closest('tr');
            if (row) {
                row.remove(); 
                console.log('Տողը ջնջվեց');
            }
        }
    });
});
