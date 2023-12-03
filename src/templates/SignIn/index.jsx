import {FormErrorMessage, Header } from "@components";
import * as S from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "./utils";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export function SignIn() {
  const router = useRouter();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ username, password }) => {
    if (username === "usuario" && password === "senha") {
      router.replace("../entrar");
      return;
    }

    toast.warning("Usuário ou senha inválidos. Tente novamente!");
  };

  return (
    <S.Main>
      <Header />

      <S.Content>
        <h2>Entrar</h2>

        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.FormRow>
            <label htmlFor="username">Email:</label>
            <input
              type="text"
              id="username"
              name="username"
              {...register("username")}
            />
            {errors?.username?.message && (
              <FormErrorMessage>{errors.username.message}</FormErrorMessage>
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

          <button type="submit">Login</button>
        </S.Form>

        <p>
          Não possui conta? <a href="/criar-conta">Faça o cadastro</a>
        </p>
      </S.Content>


    </S.Main>
  );
}