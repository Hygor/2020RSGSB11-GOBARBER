import React from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, Background } from './style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import LogoImg from '../../assets/logo.svg';

const Signup: React.FC = () => (
  <Container>
    <Content>
      <img src={LogoImg} alt="GoBarber" />
      <form>
        <h1>Faça seu cadastro</h1>
        <Input name="name" icon={FiUser} type="text" placeholder="nome" />
        <Input name="email" icon={FiMail} type="email" placeholder="e-mail" />
        <Input
          type="password"
          name="password"
          id="password"
          icon={FiLock}
          placeholder="Senha"
        />
        <Button type="submit">Entrar</Button>
      </form>
      <a href="http://">
        <FiArrowLeft size={16} />
        Voltar para Login
      </a>
    </Content>
    <Background />
  </Container>
);

export default Signup;
