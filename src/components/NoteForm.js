import React, { useState } from 'react';

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState(''); // Estado para armazenar o título da nota
  const [content, setContent] = useState(''); // Estado para armazenar o conteúdo da nota

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({
      id: Date.now(),
      title,
      content
    });
    setTitle(''); // Resetando o título após o envio
    setContent(''); // Resetando o conteúdo após o envio
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      {/* Campo para o título da nota */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      
      {/* Campo para o conteúdo da nota */}
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      
      {/* Botão para adicionar a nota */}
      <button type="submit" className="btn btn-primary">Add Note</button>
    </form>
  );
};

export default NoteForm;
