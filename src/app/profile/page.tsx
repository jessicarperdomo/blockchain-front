'use client';
import { Auth, Cache } from 'aws-amplify';

export default function Profile() {
  function handleClick() {
    Auth.signOut();
  }
  return (
    <div>
      <h1>Bienvenido a Etherum App!</h1>
      <p>
        You use will use an ID Token to get the profile information of a
        logged-in user.
        <br />
        <button
          type="button"
          className="btn btn-primary mt-4"
          onClick={() => handleClick()}>
          Cerrar sesión
        </button>{' '}
      </p>
    </div>
  );
}
