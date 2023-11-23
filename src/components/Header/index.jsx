import Link from "next/link";
import * as S from "./styles";

const links = [
  {
    text: "Disciplina ",
    route: "/disciplina/disciplina",
  },
  {
    text: "Formulario ",
    route: "/formulario/formulario",
  },
  {
    text: "Provas",
    route: "/prova/prova",
  },

  
];

export function Header({ hasNavbar }) {
  return (
    <S.Header>
      <h1>CORRETOR DE GABARITO</h1>
      

      {hasNavbar && (
        <S.Navbar>
          <ul>
            {links.map((item) => (
              <li key={item.text}>
                <Link href={item.route}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </S.Navbar>
      )}
    </S.Header>
  );
}
