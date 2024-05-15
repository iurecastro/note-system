# Note System

System note - React.js + Bootstrap 5

A simple note-taking application built with ReactJS and Bootstrap 5. Users can add, edit, delete, and search notes.

## Table of Contents
Features
Getting Started
Prerequisites
Installation
Usage
Components
Contributing
License

## Features
Add new notes with a title and content.
Edit existing notes.
Delete notes.
Search notes by title.
Responsive design with Bootstrap 5.
## Getting Started
Prerequisites
Node.js (version 14 or later)
npm (version 6 or later)
Installation
Clone the repository:

```sh
git clone https://github.com/yourusername/note-system.git
cd note-system
```
Install dependencies:

```sh
npm install
```
Start the development server:

```sh
npm start
```
Open your browser and navigate to http://localhost:3000.

## Usage
1. To add a new note, enter a title and content in the respective fields and click the "Add Note" button.
2. To edit a note, click the "Edit" button next to the note, make your changes, and click "Save". To cancel editing, click "Cancel".
3. To delete a note, click the "Delete" button next to the note.
4. To search for a note, enter the search term in the search bar. The list of notes will be filtered based on the search term.

## Components
### App.js
The main component that maintains the state of the notes and the search term. It renders the SearchBar, NoteForm, and NoteList components.

### NoteForm.js
A form component to add new notes. It contains fields for the title and content of the note.

### NoteList.js
A component that renders the list of notes. It maps through the notes and renders a NoteItem for each note.

### NoteItem.js
A component that represents a single note. It displays the title and content of the note and provides buttons to edit or delete the note.

### SearchBar.js
A component that provides a search input to filter notes by title.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

Developed by Iure Castro.
