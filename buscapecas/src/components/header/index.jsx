import * as S from './styles';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <S.Header>
      <S.Navbar>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
          <li>
            <Link to="/termos-de-uso">Termos de Uso</Link>
          </li>
        </ul>
      </S.Navbar>
    </S.Header>
  );
};