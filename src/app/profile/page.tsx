'use client';

import MainNav from '@/app/components/main-nav/main-nav';
import React from 'react';
import './page.css';

export default function Profile() {
  const userDescription =
    'Descubre tu NFT y embarcate hacia el futuro de la tecnología e innovación explorando el mundo de la WEB3';
  const avatar =
    'https://s3-alpha-sig.figma.com/img/a99f/37de/e208e44903197a0744612d9a3882534c?Expires=1696809600&Signature=DpnsiqZwOvMopzKSWXiHiGL30YfnibjaRokhk0pvM~wz73Ij83lrvxoFgQHHYpOZhHsAHBzAni7A0~6VoqAcfWvQywV2-lVceOY4sBH8bOaIJ5lrbLcOcUmFCIn8QEkGgfiZIoOyA81s9T5vH5R-Lx5wfILzWdsfr0vQCYZhosvJxUFFBNuMul3Gq4RUKdFAjfR2fJmxDvS0qp0r9pPo~uOKkmEg2YHWvbanyKKB0kEzoPBFEKQVqfh24ESJoOsUVsrmbnzAYLsPVBjRq9GNYfXnjGatiqKpXIhvGemdchy~Bh~SyjbBTNp3s4hvvptZMthQ-kfKJwiIrr5lr2cNjA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';

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
      <img
        className="bc-profile-avatar"
        src={
          loading
            ? 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
            : avatar
        }
        alt=""
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
