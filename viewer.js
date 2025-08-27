    const sampleData = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com' },
];

function renderTable() {
    const tableBody = document.querySelector('#dataTable tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    sampleData.forEach(item => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = item.id;
        row.insertCell(1).textContent = item.name;
        row.insertCell(2).textContent = item.email;
    });
}

document.getElementById('logoutBtn').addEventListener('click', function() {
    window.location.href = 'login.html';
});

// Initial render
renderTable();