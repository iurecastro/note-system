import React from 'react';

const SearchBar = ({ setSearchTerm }) => {
  return (
    // Campo de entrada para a barra de busca
    <input
      type="text" // Tipo de entrada de texto
      className="form-control mb-4" // Classes do Bootstrap para estilização
      placeholder="Search notes..." // Texto de placeholder
      // Atualiza o termo de busca conforme o usuário digita
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
