import * as yup from "yup";

export const schema = yup.object({
  username: yup.string().nullable().required("Campo obrigatório"),
  password: yup.string().nullable().required("Campo obrigatório"),
});
