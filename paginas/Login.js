import React from "react";
import { useState } from "react";

const LoginForm = () => {
    const [nomeUsuario, setnomeUsuario] = useState('');
    const [senhaUsuario, setsenhaUsuario] = useState('');
    const [errorMessage, seterrorMessage] = useState('');
  
    const manipulaLogin = () => {
      // Verificar se o nome de usuário e a senha são válidos (simplificado para este exemplo)
      if (nomeUsuario === 'usuario' && senhaUsuario === 'senha123') {
        // Redirecionar para a página inicial após o login bem-sucedido
        // Você pode usar react-router-dom para a navegação em uma aplicação React
        window.location.href = '/paginas/sobre';
      } else {
        seterrorMessage('Nome de usuário ou senha incorretos.');
      }
    };
  
  
    return (
      <div className="login-container">
        <h2>Instagrão</h2>
        <input
          type="text"
          placeholder="Nome do Usuário"
          value={nomeUsuario}
          onChange={(e) => setnomeUsuario(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senhaUsuario}
          onChange={(e) => setsenhaUsuario(e.target.value)}
          required
        />
        <button onClick={manipulaLogin}>Entrar</button>
        <p style={{ color: 'red' }}>{errorMessage}</p>
      </div>
    );
  };

  export default LoginForm;