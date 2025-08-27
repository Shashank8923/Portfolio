document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and reloading the page

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (name && email && date && time) {
        const appointmentList = document.getElementById('appointments');
        const newAppointment = document.createElement('li');
        newAppointment.textContent = `Name: ${name}, Email: ${email}, Date: ${date}, Time: ${time}`;
        appointmentList.appendChild(newAppointment);

        // Optional: Reset the form after successful booking
        document.getElementById('bookingForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
});