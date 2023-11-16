import { Footer, FormErrorMessage, Header } from "@components";
import * as S from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "./utils";
import { useRouter } from "next/router";

export function SignUp() {
  const router = useRouter();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    router.replace("entrar");
  };

  return (
    <S.Main>
      <Header />

      <S.Content>
        <h2>Criar conta</h2>

        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.FormRow>
            <label htmlFor="username">Usuário:</label>
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

          <button type="submit">Cadastrar</button>
        </S.Form>

        <p>
          Já possui conta? <a href="/entrar">Entrar</a>
        </p>
      </S.Content>

      <Footer />
    </S.Main>
  );
}
