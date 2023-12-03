import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { Footer, FormErrorMessage, Header } from "@components";
import * as S from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "./utils";

export function SignUp() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmationPassword: "",
  });

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async () => {
    try {
      const response = await fetch("url_banco", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Erro ao enviar a requisição: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Resposta da API:", result);

      if (result.autenticado) {
        // Se a autenticação for bem-sucedida, redirecioar para a página de login
        router.replace("../SignIn/index.jsx");
      } else {
        toast.warning("Usuário ou senha inválidos. Tente novamente!");
      }
    } catch (error) {
      console.error("Erro ao processar a requisição:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
          Já possui conta? <a href="/">Faça Login</a>
        </p>
      </S.Content>

      <Footer />
    </S.Main>
  );
}

export default SignUp;
