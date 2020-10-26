/* eslint-disable @typescript-eslint/camelcase */
import React, { FC, useRef, useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import queryString from 'query-string';
import * as Yup from 'yup';

import { useToast } from '../../stores/toast';
import { Container, Content, AnimationContainer, Background } from './style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import LogoImg from '../../assets/logo.svg';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';

interface ResetPasswordFormData {
  password: string;
  passwordConfirmation: string;
  token: string;
}

type Token = string | string[] | null;

const ResetPassword: FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const location = useLocation();
  const [token, setToken] = useState<Token>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const query = queryString.parse(location.search);
    setToken(query.token);
  }, [location]);

  const handleSubmit = useCallback(
    async (data: ResetPasswordFormData) => {
      try {
        setLoading(true);
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          password: Yup.string().required('Senha obrigatória'),
          passwordConfirmation: Yup.string().oneOf(
            [Yup.ref('password'), ''],
            'Senhas diferentes!',
          ),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        if (!token) {
          throw new Error();
        }

        const { password, passwordConfirmation } = data;
        await api.post('/password/reset', {
          password,
          password_confirmation: passwordConfirmation,
          token,
        });

        history.push('/');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
          return;
        }
        // dispara um toast
        addToast({
          type: 'error',
          title: 'Erro ao resetar senha',
          description: 'Ocorreu um erro ao resetar a sua senha',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast, history, token],
  );
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={LogoImg} alt="GoBarber" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Resetar Senha</h1>
            <Input
              type="password"
              name="password"
              id="password"
              autoComplete="new-password"
              icon={FiLock}
              placeholder="Nova Senha"
            />
            <Input
              type="password"
              name="passwordConfirmation"
              id="passwordConfirmation"
              autoComplete="new-password"
              icon={FiLock}
              placeholder="Confirmação da Senha"
            />
            <Button loading={loading} type="submit">
              Enviar
            </Button>
          </Form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default ResetPassword;
