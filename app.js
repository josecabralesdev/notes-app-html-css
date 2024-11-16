const notesContainer = document.getElementById("notes-container")
const addNewNote = document.getElementById("add-note")
const deleteNote = document.querySelectorAll("img")

addNewNote.addEventListener('click', () => {
  const newNoteContainer = document.createElement('div')
  newNoteContainer.classList.add('note')
  const headerNote = document.createElement('header')
  const deleteIcon = document.createElement('img')
  deleteIcon.setAttribute('id', 'delete-note')
  deleteIcon.setAttribute('src', './assets/trash.svg')
  deleteIcon.setAttribute('alt', 'delete-icon')
  const sectionNote = document.createElement('section')
  const textareNote = document.createElement('textarea')

  headerNote.appendChild(deleteIcon)
  sectionNote.appendChild(textareNote)
  newNoteContainer.appendChild(headerNote)
  newNoteContainer.appendChild(sectionNote)

  notesContainer.appendChild(newNoteContainer)
})

notesContainer.addEventListener('click', (e) => {
  if (e.target.tagName === "IMG") {
    const note = e.target.parentNode.parentNode
    note.remove()
  }
})