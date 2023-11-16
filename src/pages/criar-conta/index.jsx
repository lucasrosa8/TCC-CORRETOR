import { SEO } from "@components";
import { SignUp as SignUpTemplate } from "@templates";

export default function SignUp() {
  return (
    <>
      <SEO title="Criar conta" />

      <SignUpTemplate />
    </>
  );
}
