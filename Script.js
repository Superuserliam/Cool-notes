t notes = [];
let currentUser = null;

document.getElementById('login').addEventListener('click', () => {
    const usernameInput = document.getElementById('username');
    if (usernameInput.value) {
        currentUser = usernameInput.value;
        usernameInput.value = '';
        document.getElementById('login').style.display = 'none';
        document.getElementById('logout').style.display = 'block';
        loadNotes();
    }
});

document.getElementById('logout').addEventListener('click', () => {
    currentUser = null;
    notes = [];
    document.getElementById('notes-container').innerHTML = '';
    document.getElementById('login').style.display = 'block';
    document.getElementById('logout').style.display = 'none';
});

document.getElementById('add-note').addEventListener('click', () => {
    const noteInput = document.getElementById('note-input');
    if (noteInput.value && currentUser) {
        notes.push(noteInput.value);
        noteInput.value = '';
        displayNotes();
    }
});

function displayNotes() {
    const notesContainer = document.getElementById('notes-container');
    notesContainer.innerHTML = '';
    notes.forEach((note, index) => {
        notesContainer.innerHTML += `<div class="note"><p>${note}</p><button onclick="deleteNote(${index})">Delete</button></div>`;
    });
}

function deleteNote(index) {
    notes.splice(index, 1);
    displayNotes();
}

function loadNotes() {
    /
  


    notes = [];
    displayNotes();
}
