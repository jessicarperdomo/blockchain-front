import { Link } from '@mui/joy';
import './main-nav.css';

export default function MainNav() {
  return (
    <div className="navbar-nav mr-auto dashboard">
      <Link href="#basics" className="bc-text-light">
        Perfil
      </Link>
      <Link href="#basics" className="bc-text-light">
        Colección
      </Link>
      <Link href="#basics" className="bc-text-light">
        Juego
      </Link>
    </div>
  );
}
