import React, { useState } from 'react';
import axios from 'axios';

const Db = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:3009/enviar-email', { email });
      console.log('Resposta do servidor:', response.data);
  
      if (response.data && response.data.message === 'Email enviado com sucesso!') {
        setSuccessMessage('Email enviado com sucesso!');
        setErrorMessage('');
      } else {
        setSuccessMessage('');
        setErrorMessage('Erro ao enviar email. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setSuccessMessage('');
      setErrorMessage('Erro ao enviar email. Tente novamente.');
    }
  };  

  return (
    <div>
      <h1>Database</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Digite seu email"
          value={email}
          onChange={handleEmailChange}
        />

        <button type="submit">Enviar</button>

        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Db;
