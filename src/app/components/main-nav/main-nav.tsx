import { Link } from '@mui/joy';
import './main-nav.css';
import Image from 'next/image';

export default function MainNav() {
  return (
    <div className="navbar-nav mr-auto d-flex">
      <div className="dashboard">
        <Link href="/" className="bc-text-light">
          <Image
            src="/ethereum-icon.svg"
            alt="Ethereum logo"
            width={100}
            height={100}
          />
        </Link>
        <div className="bc-menu-items">
          <Link href="profile" className="bc-text-light">
            Perfil
          </Link>
          <Link href="#coleccion" className="bc-text-light">
            Colección
          </Link>
          <Link href="juego" className="bc-text-light">
            Juego
          </Link>
        </div>
      </div>
    </div>
  );
}
