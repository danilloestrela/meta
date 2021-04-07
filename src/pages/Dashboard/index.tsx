import React from 'react';
import { Title, Form, BoxTitles, BoxLogin, BotBoxLogin } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Title>Olá! Seja bem vindo ao teste para Meta :)</Title>
      <BoxLogin>
        <BoxTitles>Logar-se</BoxTitles>
        <Form>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Logar-se</button>
        </Form>

        <BotBoxLogin>
          <p>Não tem cadastro?</p>
          <a href="./register">Cadastrar-se agora!</a>
        </BotBoxLogin>
      </BoxLogin>
    </>
  );
};

export default Dashboard;
