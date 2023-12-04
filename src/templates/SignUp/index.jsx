import { useState } from "react";
import { useRouter } from "next/router";
import { Footer, FormErrorMessage, Header } from "@components";
import * as S from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "./utils";

export function SignUp() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    matricula: "",
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRedirect = () => {
    // Redirecionar para a página raiz do projeto
    router.push("/");

    // Ou, se você quiser substituir a rota, use router.replace("/") em vez de router.push("/")
  };

  const onSubmit = async () => {
    // Lógica de envio do formulário (se necessário)
  };

  return (
    <S.Main>
      <Header />

      <S.Content>
        <h2>Criar conta</h2>

        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.FormRow>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              {...register("nome")}
              onChange={handleInputChange}
            />
            {errors?.nome?.message && (
              <FormErrorMessage>{errors.nome.message}</FormErrorMessage>
            )}
          </S.FormRow>

          <S.FormRow>
            <label htmlFor="email">E-mail:</label>
            <input
              type="text"
              id="email"
              name="email"
              {...register("email")}
              onChange={handleInputChange}
            />
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
              onChange={handleInputChange}
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

          {/* (Adicione os outros campos do formulário aqui) */}

          <a href="/">
            <button type="button" onClick={handleRedirect}>
              Cadastrar
            </button>
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
