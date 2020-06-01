import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, Background } from './style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import LogoImg from '../../assets/logo.svg';

const Signin: React.FC = () => (
  <Container>
    <Content>
      <img src={LogoImg} alt="GoBarber" />
      <form>
        <h1>Faça seu logon</h1>
        <Input name="email" icon={FiMail} type="email" placeholder="e-mail" />
        <Input
          type="password"
          name="password"
          id="password"
          icon={FiLock}
          placeholder="Senha"
        />
        <Button type="submit">Entrar</Button>

        <a href="http://" title="Esqueci a senha">
          Esqueci minha senha
        </a>
      </form>
      <a href="http://">
        <FiLogIn size={16} />
        Criar Conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default Signin;
