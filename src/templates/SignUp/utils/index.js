import * as yup from "yup";

export const schema = yup.object({
  username: yup.string().nullable().required("Campo obrigatório"),
  password: yup.string().nullable().required("Campo obrigatório"),
  confirmationPassword: yup
    .string()
    .nullable()
    .required("Campo obrigatório")
    .test({
      message: "As senhas são diferentes",
      test: (value, context) => {
        if (!value) return true;

        const isValid = value === context.parent.password;

        return isValid;
      },
    }),
});
