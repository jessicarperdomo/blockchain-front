'use client';

import { Button } from '@mui/joy';
import awsConfig from '../aws-exports';
import { Auth, Amplify } from 'aws-amplify';
import Image from 'next/image';

Amplify.configure({ Auth: awsConfig });
export default function Hero() {
  function handleClick() {
    Auth.federatedSignIn();
  }
  return (
    <div className="text-center hero">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <Image
              src="/enterprise-eth.webp"
              alt="Next.js Logo"
              width={400}
              height={400}
            />
          </div>
          <div className="col-sm m-auto">
            <h1 className="mb-2">Ethereum App</h1>
            <p className="lead mb-6 text-left">
              La web es el futuro, y tu puedes estar en el
            </p>

            <Button
              color="neutral"
              variant="solid"
              onClick={() => handleClick()}>
              Iniciar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
