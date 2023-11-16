import { Footer, Header } from "@components";

import * as S from "./styles";

export function Home() {
  return (
    <S.Main>
      <Header hasNavbar />

      <section>
        <div>
          <div>
            <button>Ativar Webcam</button>
            <button>Fechar Webcam</button>

            <video autoplay></video>
            <div>
              <button>tirar foto</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </S.Main>
  );
}
