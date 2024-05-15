import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({ notes, deleteNote, updateNote }) => {
  return (
    <div>
      {notes.map(note => (
        // Renderiza um item de nota para cada nota na lista
        <NoteItem
          key={note.id} // Chave única para cada item de nota
          note={note} // Propriedade da nota
          deleteNote={deleteNote} // Função para deletar a nota
          updateNote={updateNote} // Função para atualizar a nota
        />
      ))}
    </div>
  );
};

export default NoteList;
