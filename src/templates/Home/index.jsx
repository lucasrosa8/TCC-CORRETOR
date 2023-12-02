import { Footer, Header } from "@components";
import * as S from "./styles";
import Image from 'next/image';
import Gabarito from "../../images/gabarito.jpg"

// Componente Home
export function Home() {
  return (
    <>
      {/* Cabeçalho */}
      <Header hasNavbar />

      {/* Conteúdo principal */}
      <S.Main>
        <section>
          <h1>Bem-vindo ao Corretor de Gabarito por Imagem</h1>
          <p>
            Nossa aplicação permite a correção automática de provas baseadas em
            imagens escaneadas.
          </p>
        </section>

        <section className="ad-container">
  <div className="ad">
    <h3>Anuncie Aqui!</h3>
    <p>Entre em contato para promover sua marca para milhares de usuários.</p>
    {/* Pode adicionar uma imagem aqui */}
  </div>

  <div className="ad">
    <h3>Especial de Volta às Aulas</h3>
    <p>Descontos exclusivos para professores na primeira correção!</p>
    {/* Pode adicionar uma imagem aqui */}
  </div>
</section>

        {/* Seção para explicar o processo */}
        <section>
          <h2>Como Funciona</h2>
          <p>
            O professor seleciona as questões do gabarito e a aplicação compara
            as respostas dos alunos com base nesse gabarito.
          </p>
          {/* Adicione imagens ou gráficos explicativos, se necessário */}
        </section>

        {/* Seção para destacar recursos */}
        <section>
          <h2>Recursos Principais</h2>
          <ul>
            <li>Correção rápida e eficiente</li>
            <li>Análise detalhada de respostas</li>
            {/* Adicione mais recursos conforme necessário */}
          </ul>
        </section>

        {/* Seção de Contato ou CTA (Call to Action) */}
        <section>
          <h2>Experimente Agora!</h2>
          <p>
            Faça o upload da sua prova escaneada e veja como podemos simplificar
            o processo de correção para você.
          </p>
          {/* Adicione um botão ou formulário para iniciar o processo */}
        </section>
        <section>
          <h2>Demonstração Visual</h2>
          <img src="/gabarito.jpg" alt="Tela de upload" />
          <img src="" alt="Resultados de correção" />
        </section>
        {/* <Image src={Gabarito}/> */}
    	
        

        

      </S.Main>

      {/* Rodapé */}
      <Footer />
    </>
  );
}