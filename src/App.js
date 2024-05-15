import React, { useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import SearchBar from './components/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [notes, setNotes] = useState([]); // Estado para armazenar as notas
  const [searchTerm, setSearchTerm] = useState(''); // Estado para armazenar o termo de busca

  // Função para adicionar uma nova nota
  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  // Função para deletar uma nota
  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  // Função para atualizar uma nota
  const updateNote = (updatedNote) => {
    setNotes(notes.map(note => note.id === updatedNote.id ? updatedNote : note));
  };

  // Filtragem das notas com base no termo de busca
  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      {/* Cabeçalho principal */}
      <h1 className="my-4">Note System</h1>
      
      {/* Barra de busca */}
      <SearchBar setSearchTerm={setSearchTerm} />
      
      {/* Formulário para adicionar notas */}
      <NoteForm addNote={addNote} />
      
      {/* Lista de notas */}
      <NoteList notes={filteredNotes} deleteNote={deleteNote} updateNote={updateNote} />
    </div>
  );
};

export default App;
