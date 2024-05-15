import React, { useState } from 'react';

const NoteItem = ({ note, deleteNote, updateNote }) => {
  // Estado para controlar o modo de edição
  const [isEditing, setIsEditing] = useState(false);

  // Estado para armazenar o título da nota durante a edição
  const [title, setTitle] = useState(note.title);

  // Estado para armazenar o conteúdo da nota durante a edição
  const [content, setContent] = useState(note.content);

  // Função para lidar com a atualização da nota
  const handleUpdate = () => {
    updateNote({
      id: note.id, // ID da nota sendo atualizada
      title, // Novo título da nota
      content // Novo conteúdo da nota
    });
    setIsEditing(false); // Desativar o modo de edição após a atualização
  };

  return (
    <div className="card mb-3"> {/* Cartão que envolve a nota */}
      {isEditing ? ( /* Verifica se está no modo de edição */
        <div className="card-body"> {/* Corpo do cartão */}
          {/* Campo para editar o título da nota */}
          <input
            type="text"
            className="form-control mb-2" // Estilo do Bootstrap para campo de formulário com margem inferior
            value={title} // Valor atual do título
            onChange={(e) => setTitle(e.target.value)} // Atualiza o estado do título conforme o usuário digita
          />
          
          {/* Campo para editar o conteúdo da nota */}
          <textarea
            className="form-control mb-2" // Estilo do Bootstrap para campo de texto com margem inferior
            value={content} // Valor atual do conteúdo
            onChange={(e) => setContent(e.target.value)} // Atualiza o estado do conteúdo conforme o usuário digita
          ></textarea>
          
          {/* Botão para salvar as alterações */}
          <button className="btn btn-success me-2" onClick={handleUpdate}>Save</button> {/* Botão verde do Bootstrap */}
          
          {/* Botão para cancelar a edição */}
          <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button> {/* Botão cinza do Bootstrap */}
        </div>
      ) : ( /* Caso não esteja no modo de edição, exibe a nota normalmente */
        <div className="card-body"> {/* Corpo do cartão */}
          {/* Exibição do título da nota */}
          <h5 className="card-title">{note.title}</h5> {/* Título da nota */}
          
          {/* Exibição do conteúdo da nota */}
          <p className="card-text">{note.content}</p> {/* Conteúdo da nota */}
          
          {/* Botão para entrar no modo de edição */}
          <button className="btn btn-warning me-2" onClick={() => setIsEditing(true)}>Edit</button> {/* Botão amarelo do Bootstrap */}
          
          {/* Botão para deletar a nota */}
          <button className="btn btn-danger" onClick={() => deleteNote(note.id)}>Delete</button> {/* Botão vermelho do Bootstrap */}
        </div>
      )}
    </div>
  );
};

export default NoteItem;
