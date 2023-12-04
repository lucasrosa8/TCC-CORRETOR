import { useState } from "react";
import { useRouter } from "next/router";
import { Footer, FormErrorMessage, Header } from "@components";
import * as S from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "./utils";
import { toast } from "react-toastify";

export function SignUp() {
  const router = useRouter();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = async (formData) => {
    if (!formData.nome) {
      toast.warning("campo nome é obrigatório");
      return;
    }
    if (!formData.email) {
      toast.warning("campo email é obrigatório");
      return;
    }
    if (!formData.matricula) {
      toast.warning("campo matricula é obrigatório");
      return;
    }
    if (!formData.password) {
      toast.warning("campo senha é obrigatório");
      return;
    }
    if (!formData.confirmationPassword) {
      toast.warning("campo confirmar senha  é obrigatório");
      return;
    }
    if (formData.confirmationPassword !== formData.password) {
      toast.warning("senha e confirmação de senha devem ser iguais");
      return;
    }
    router.push("/");
    toast.success("usuário cadastrado com sucesso");
  };

  return (
    <S.Main>
      <Header />

      <S.Content>
        <h2>Criar conta</h2>

        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.FormRow>
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" {...register("nome")} />
            {errors?.nome?.message && (
              <FormErrorMessage>{errors.nome.message}</FormErrorMessage>
            )}
          </S.FormRow>

          <S.FormRow>
            <label htmlFor="email">E-mail:</label>
            <input type="text" id="email" name="email" {...register("email")} />
            {errors?.email?.message && (
              <FormErrorMessage>{errors.email.message}</FormErrorMessage>
            )}
          </S.FormRow>

          <S.FormRow>
            <label htmlFor="matricula">Matrícula:</label>
            <input
              type="text"
              id="matricula"
              name="matricula"
              {...register("matricula")}
            />
            {errors?.matricula?.message && (
              <FormErrorMessage>{errors.matricula.message}</FormErrorMessage>
            )}
          </S.FormRow>

          <S.FormRow>
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              name="password"
              {...register("password")}
            />
            {errors?.password?.message && (
              <FormErrorMessage>{errors.password.message}</FormErrorMessage>
            )}
          </S.FormRow>

          <S.FormRow>
            <label htmlFor="confirmationPassword">Confirmar senha:</label>
            <input
              type="password"
              id="confirmationPassword"
              name="confirmationPassword"
              {...register("confirmationPassword")}
            />
            {errors?.confirmationPassword?.message && (
              <FormErrorMessage>
                {errors.confirmationPassword.message}
              </FormErrorMessage>
            )}
          </S.FormRow>

          {/* (Adicione os outros campos do formulário aqui) */}

          <a href="/">
            <button type="submit">Cadastrar</button>
          </a>
        </S.Form>

        <p>
          Já possui conta? <a href="/">Faça Login</a>
        </p>
      </S.Content>

      <Footer />
    </S.Main>
  );
}

export default SignUp;
