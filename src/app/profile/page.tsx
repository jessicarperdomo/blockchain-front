'use client';

import MainNav from '@/app/components/main-nav/main-nav';
import React from 'react';
import Image from 'next/image';

import './page.css';

export default function Profile() {
  const userDescription =
    'Descubre tu NFT y embarcate hacia el futuro de la tecnología e innovación explorando el mundo de la WEB3';
  const avatar = '/avatar.png';

  const [loading, setLoading] = React.useState(false);

  const userDetails = (
    <>
      <div className="bc-profile-container">
        <div>
          <h1 className="bc-text-first-level">10K+</h1>
          <p className="bc-text-second-level">usuarios</p>
        </div>
        <div>
          <h1 className="bc-text-first-level">1.1M</h1>
          <p className="bc-text-second-level">adl coins</p>
        </div>
        <div>
          <h1 className="bc-text-first-level">38K+</h1>
          <p className="bc-text-second-level">nfts</p>
        </div>
      </div>
    </>
  );

  const userContainer = (
    <>
      <p className="bb-container-description">{userDescription}</p>
      {userDetails}
    </>
  );

  const imagesContainer = (
    <>
      <Image
        height={419}
        width={419}
        src={
          loading
            ? 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
            : avatar
        }
        alt="avatar"
      />
    </>
  );
  return (
    <div>
      <MainNav></MainNav>
      <div className="bc-profile">
        <div className="bc-profile-left-side">{userContainer}</div>{' '}
        <div className="bc-profile-right-side">{imagesContainer}</div>
      </div>
    </div>
  );
}
