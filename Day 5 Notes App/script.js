// Notes app script
const createNoteBtn = document.querySelector('.btn');
const contentArea = document.querySelector('.content');

// Create a single note element (p.input-box with trash icon inside)
function createNote(text = '') {
  const p = document.createElement('p');
  p.className = 'input-box';
  p.setAttribute('contenteditable', 'true');
  p.innerText = text;

  // create trash icon inside the paragraph so it can be absolutely positioned
  const trash = document.createElement('i');
  trash.className = 'fa-solid fa-trash delete';
  trash.setAttribute('contenteditable', 'false');
  trash.style.cursor = 'pointer';

  // delete handler
  trash.addEventListener('click', (e) => {
    e.stopPropagation();
    p.remove();
    saveNotes();
  });

  // save on input
  p.addEventListener('input', () => {
    saveNotes();
  });
  
  p.addEventListener('click', (e) => {
    e.target.focus();
    saveNotes();
  });

  p.appendChild(trash);
  contentArea.appendChild(p);
  p.focus();
}

function saveNotes() {
  const notes = [];
  document.querySelectorAll('.input-box').forEach((p) => {
    // remove the trash icon text if any and trim
    // use textContent but exclude the trash icon by temporarily cloning
    const clone = p.cloneNode(true);
    const trash = clone.querySelector('.delete');
    if (trash) trash.remove();
    const text = clone.textContent.trim();
    if (text.length) notes.push(text);
  });
  localStorage.setItem('notes', JSON.stringify(notes));
}

function loadNotes() {
  const raw = localStorage.getItem('notes');
  if (!raw) {
    // start with a single empty note
    createNote('');
    return;
  }
  try {
    const notes = JSON.parse(raw);
    if (!Array.isArray(notes) || notes.length === 0) {
      createNote('');
      return;
    }
    notes.forEach((t) => createNote(t));
  } catch (err) {
    console.error('Failed to parse stored notes', err);
    createNote('');
  }
}

// Button handler
createNoteBtn.addEventListener('click', () => {
  createNote('');
});

// initialize
loadNotes();
