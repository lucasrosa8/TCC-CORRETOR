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
import { MdMenu } from "react-icons/md";
import * as S from './styles';
import { useRouter } from 'next/router';


export function Header({ hasNavbar }) {
  const router = useRouter() 

  const links = [
    {
      text: <MdMenu size={35} />,
      route: '/disciplina/disciplina',
      dropdownLinks: [
        {
          text: 'Cadastrar disciplinas',
          route: '/disciplina/disciplina',
        },
        {
          text: 'Consultar disciplinas',
          route: '/cdisciplina/cdisciplina',
        },
        {
          text: 'Gerar gabarito',
          route: '/gabarito/gabarito',
        },
        {
          text: 'Cadastrar alunos',
          route: '/formulario/formulario',
        },
        {
          text: 'Consultar alunos',
          route: '/aluno/aluno',
        },
        {
          text: 'Corrigir prova',
          route: '/prova/prova',
        },
        
      ],
    },

  ];

  return (
    <S.Header>
      <h1 onClick={()=> router.push("/")}>CORRETOR DE GABARITO</h1>

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

