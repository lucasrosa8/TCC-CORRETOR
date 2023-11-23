/*import Link from "next/link";
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
} */

import Link from 'next/link';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import * as S from './styles';

export function Header({ hasNavbar }) {
  const links = [
    {
      text: 'Disciplina',
      route: '/disciplina/disciplina',
      dropdownLinks: [
        {
          text: 'Cadastrar disciplinas',
          route: '/disciplina/cadastrar',
        },
        {
          text: 'Consultar disciplinas',
          route: '/disciplina/consultar',
        },
        {
          text: 'Gerar gabarito',
          route: '/disciplina/gerar-gabarito',
        },
        {
          text: 'Consultar alunos',
          route: '/disciplina/consultar-alunos',
        },
      ],
    },
    {
      text: 'Formulario',
      route: '/formulario/formulario',
    },
    {
      text: 'Provas',
      route: '/prova/prova',
    },
  ];

  return (
    <S.Header>
      <h1>CORRETOR DE GABARITO</h1>

      {hasNavbar && (
        <S.Navbar>
          <ul>
            {links.map((item) => (
              <li key={item.text}>
                {item.dropdownLinks ? (
                  <DropdownButton title={item.text}>
                    {item.dropdownLinks.map((dropdownItem) => (
                      <Dropdown.Item key={dropdownItem.text} href={dropdownItem.route}>
                        {dropdownItem.text}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                ) : (
                  <Link href={item.route}>{item.text}</Link>
                )}
              </li>
            ))}
          </ul>
        </S.Navbar>
      )}
    </S.Header>
  );
}
