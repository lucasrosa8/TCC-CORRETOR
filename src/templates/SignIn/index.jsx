import { FormErrorMessage, Header } from "@components";
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

  const onSubmit = async ({ username, password }) => {
    try {
      // Substitua "sua_url_aqui" pela URL real da sua API
      const response = await fetch("url_banco", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      console.log(formData);
      if (!response.ok) {
        throw new Error(`Erro ao enviar a requisição: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Resposta da API:", result);

      if (result.autenticado) {
        // Se a autenticação for bem-sucedida, redirecionar para a página principal
        router.replace("/");
      } else {
        toast.warning("Usuário ou senha inválidos. Tente novamente!");
      }
    } catch (error) {
      console.error("Erro ao processar a requisição:", error);
    }
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
