/* eslint-disable @typescript-eslint/camelcase */
import React, { ChangeEvent, FC, useCallback, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { FiUser, FiMail, FiLock, FiCamera, FiArrowLeft } from 'react-icons/fi';
import { Container, Content, AvatarInput } from './style';
import { useToast } from '../../stores/toast';

import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../stores/auth';
import AvatarPlaceholder from '../../assets/avatar.svg';

interface ProfileFormData {
  name: string;
  email: string;
  old_password: string;
  password: string;
  password_confirmation: string;
}

const Profile: FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const { user, updateUser } = useAuth();
  const handleSubmit = useCallback(
    async (data: ProfileFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um e-mail válido'),
          old_password: Yup.string().required(),
          password: Yup.string(),
          password_confirmation: Yup.string()
            .when('password', {
              is: val => val.length,
              then: Yup.string()
                .min(6, 'Senha muito curta')
                .required('Campo obrigatório'),
              otherwise: Yup.string(),
            })
            .oneOf([Yup.ref('password'), ''], 'Senhas diferentes!'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });
        if (!data.password) {
          const response = await api.put('/profile', {
            ...data,
            password: data.old_password,
            password_confirmation: data.old_password,
          });
          updateUser(response.data);
        } else {
          const response = await api.put('/profile', data);
          updateUser(response.data);
        }
        history.push('/');
        addToast({
          type: 'success',
          title: 'Cadastro Atualizado!',
          description: 'Suas informações foram alteradas com sucesso.',
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
          return;
        }
        // dispara um toast
        addToast({
          type: 'error',
          title: 'Erro na Atualização!',
          description:
            'Ocorreu um erro ao fazer a atualização do seu perfil, tente novamente.',
        });
      }
    },
    [addToast, history, updateUser],
  );

  const handleAvatarChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();
        const file = e.target.files[0];
        data.append('avatar', file);
        api.patch('/users/avatar', data).then(response => {
          updateUser(response.data);
          addToast({
            type: 'success',
            title: 'Avatar atualizado',
          });
        });
      }
    },
    [addToast, updateUser],
  );

  return (
    <Container>
      <header>
        <div>
          <Link to="/">
            <FiArrowLeft />
            voltar
          </Link>
        </div>
      </header>
      <Content>
        <Form
          ref={formRef}
          initialData={{
            name: user.name,
            email: user.email,
          }}
          onSubmit={handleSubmit}
        >
          <AvatarInput>
            <img src={user.avatar_url || AvatarPlaceholder} alt={user.name} />
            <label htmlFor="avatar">
              <FiCamera />
              <input
                type="file"
                name=""
                id="avatar"
                onChange={handleAvatarChange}
              />
            </label>
          </AvatarInput>
          <h1>Meu Perfil</h1>
          <Input name="name" icon={FiUser} type="text" placeholder="nome" />
          <Input name="email" icon={FiMail} type="email" placeholder="e-mail" />
          <hr />
          <Input
            type="password"
            name="old_password"
            id="old_password"
            icon={FiLock}
            placeholder="Senha Atual"
          />
          <Input
            type="password"
            name="password"
            id="password"
            icon={FiLock}
            placeholder="Nova Senha"
          />
          <Input
            type="password"
            name="password_confirmation"
            id="password_confirmation"
            icon={FiLock}
            placeholder="Confirmar Senha"
          />
          <Button type="submit">Confirmar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Profile;
