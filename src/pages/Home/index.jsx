import Header from '../../components/Header';
import * as S from './styled';

export default function Home() {
  return (
    <>
      <Header ishome={true} />
      <S.Main>
        <S.Info>
          <h1>Bem-vindo ao Park Flow!</h1>
          <ul>
            <li>
              Para acessar informações pessoais de cadastro, clique em{' '}
              <span>Perfil</span>.
            </li>
            <li>
              Para escanear e iniciar o pagamento do seu ticket, clique em{' '}
              <span>Escanear Ticket</span>.
            </li>
            <li>
              Para acessar detalhes sobre a estimativa da fila atual de espera,
              clique em <span> Fila de Espera</span>.
            </li>
            <p>
              Caso tenha qualquer dúvida, entre em contato com nosso suporte:{' '}
              <a href="mailto:parkflow@flow.com">parkflow@flow.com</a>
            </p>
          </ul>
        </S.Info>
        <div>
          <S.Article>Perfil</S.Article>
          <S.Article>Escanear Ticket</S.Article>
          <S.Article>Fila de Espera</S.Article>
        </div>
      </S.Main>
    </>
  );
}
