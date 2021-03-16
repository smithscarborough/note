// Accordion
function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " w3-theme-d1";
    } else {
        x.className = x.className.replace("w3-show", "");
        x.previousElementSibling.className =
            x.previousElementSibling.className.replace(" w3-theme-d1", "");
    }
}

// Used to toggle the menu on smaller screens when clicking on the menu button
function openNav() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}


//Used to close the post button after note has been posted and added to database
let closeNoteContainer = function () {
    document.querySelector('#createNoteContainer').style.display = "none";
}

document.querySelectorAll('.editButton').forEach((editButton)=> {
    editButton.addEventListener('click', (event) => {
        event.preventDefault();
        const editForm = document.getElementById(`editForm-${editButton.dataset.id}`)
        editForm.style.display = 'block';
        editButton.style.display = 'none';
    })
})

document.getElementById('addButton').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#createNoteContainer').style.display = "block";
})

const bookmarkCategory = document.querySelector('#bookmarkCategory');

bookmarkCategory.addEventListener('change', () => {
    updateBookmarkColumn(bookmarkCategory.value)
})

function updateBookmarkColumn(id) {
    const bookmarkNotes = document.getElementById('bookmarkNotes');
    bookmarkNotes.innerHTML = 'loading...'
    fetch(`/api/archive/${id}`)
    .then(res => res.json())
    .then(data => {
        const html = data.Notes.map(note => {
            return `
                <p>${note.noteMessage}</p>
            `
        }).join('')
        bookmarkNotes.innerHTML = html;
    })
}


updateBookmarkColumn(bookmarkCategory.value);