import Link from 'next/link';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import * as S from './styles';
import { useRouter } from 'next/router';

export function Header({ hasNavbar }) {
  const router = useRouter();

  const links = [
    {
      text: 'Disciplina',
      dropdownLinks: [
        {
          text: 'Consultar disciplina',
          route: '/cdisciplina',
        },
        {
          text: 'Cadastrar disciplina',
          route: '/disciplina',
        },
      ],
    },
    {
      text: 'Avaliação',
      dropdownLinks: [
        {
          text: 'Gerar gabarito',
          route: '/gabarito',
        },
        {
          text: 'Corrigir prova',
          route: '/prova',
        },
      ],
    },
    {
      text: 'Turma',
      dropdownLinks: [
        {
          text: 'Consultar turma',
          route: '/turma',
        },
        {
          text: 'Cadastrar turma',
          route: '/cturma',
        },
        {
          text: 'Cadastrar aluno',
          route: '/formulario',
        },
        {
          text: 'Consultar aluno',
          route: '/aluno',
        },
      ],
    },
  ];

  return (
    <S.Header>
      <h1 onClick={() => router.push('/')}>CORRETOR DE GABARITO</h1>

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