'use client';

import { Button } from '@mui/joy';
import awsConfig from '../../aws-exports';
import { Auth, Amplify } from 'aws-amplify';
import Image from 'next/image';
import './landing.css';
import backgrounImage from '../../../../public/landing-background.svg';

Amplify.configure({ Auth: awsConfig });

export default function Landing() {
  function handleClick() {
    Auth.federatedSignIn();
  }
  const backgroundStyle = {
    backgroundImage: `url(${backgrounImage.src})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    width: '-webkit-fill-available',
  };

  return (
    <div className="bc-landing" style={backgroundStyle}>
      <div className="bc-landing-container">
        <p className="lead mb-6 text-left bc-text-light ">
          La web es el futuro, y tu puedes estar en el
        </p>
        <div className='bc-landing__actions'>
          <Button color="neutral" variant="solid" onClick={() => handleClick()}>
            Iniciar
          </Button>
        </div>
      </div>
    </div>
  );
}
