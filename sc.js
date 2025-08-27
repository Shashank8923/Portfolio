    let sampleData = [
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

        const actionsCell = row.insertCell(3);
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'action-btn edit-btn';
        editBtn.onclick = () => editItem(item.id);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'action-btn delete-btn';
        deleteBtn.onclick = () => deleteItem(item.id);

        actionsCell.appendChild(editBtn);
        actionsCell.appendChild(deleteBtn);
    });
}

function showForm(item = null) {
    const formContainer = document.getElementById('dataFormContainer');
    const form = document.getElementById('dataForm');
    const dataId = document.getElementById('dataId');
    const dataName = document.getElementById('dataName');
    const dataEmail = document.getElementById('dataEmail');
    
    form.reset();
    if (item) {
        dataId.value = item.id;
        dataName.value = item.name;
        dataEmail.value = item.email;
    }
    formContainer.style.display = 'flex';
}

function closeForm() {
    document.getElementById('dataFormContainer').style.display = 'none';
}

function editItem(id) {
    const item = sampleData.find(d => d.id === id);
    if (item) {
        showForm(item);
    }
}

function deleteItem(id) {
    if (confirm('Are you sure you want to delete this user?')) {
        sampleData = sampleData.filter(d => d.id !== id);
        renderTable();
    }
}

document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const id = document.getElementById('dataId').value;
    const name = document.getElementById('dataName').value;
    const email = document.getElementById('dataEmail').value;

    if (id) {
        // Edit existing item
        const index = sampleData.findIndex(d => d.id == id);
        if (index !== -1) {
            sampleData[index] = { id: parseInt(id), name, email };
        }
    } else {
        // Add new item
        const newId = sampleData.length > 0 ? Math.max(...sampleData.map(d => d.id)) + 1 : 1;
        sampleData.push({ id: newId, name, email });
    }
    renderTable();
    closeForm();
});

document.getElementById('logoutBtn').addEventListener('click', function() {
    window.location.href = 'login.html';
});

document.getElementById('showAddFormBtn').addEventListener('click', () => showForm());
document.querySelector('.close-btn').addEventListener('click', closeForm);

// Initial render
renderTable();