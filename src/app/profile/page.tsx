'use client';

import MainNav from '@/app/components/main-nav/main-nav';
import React from 'react';
import Image from 'next/image';

import './page.css';
import { Grid } from '@mui/joy';
import url from 'url';

import Web3 from 'web3';
declare var window: any;

export default function Profile() {
  const userDescription =
    'Descubre tu NFT y embarcate hacia el futuro de la tecnología e innovación explorando el mundo de la WEB3';
  const avatar = '/avatar.png';
  const avatar1 = '/avatar-1.svg';
  const avatar2 = '/avatar-2.svg';
  const avatar3 = '/avatar-3.svg';

  const [loading, setLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState('');

  React.useEffect(() => {
    if (!userToken) {
      const currentUrl = window.location.href;
      const parsedUrl = url.parse(currentUrl, true);
      const accessToken = parsedUrl.hash && parsedUrl.hash.split('=')[1];
      if (accessToken) {
        setUserToken(accessToken);
        setLoading(false);
        getMetamaskAccountValue();
      }
    }
  }, []);

  async function getMetamaskAccountValue() {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.enable();

        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];

        const balance = await web3.eth.getBalance(account);

        const balanceInEth = web3.utils.fromWei(balance, 'ether');

        console.log('Valor de la cuenta de Metamask:', balanceInEth);
      } catch (error) {
        console.error(
          'Error al obtener el valor de la cuenta de Metamask:',
          error
        );
      }
    } else {
      console.error('Metamask no está instalado o no está disponible');
    }
  }
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

  const avatarList = (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center">
        <Image
          height={150}
          width={120}
          src={
            loading
              ? 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
              : avatar1
          }
          alt="avatar"
        />
        <Image
          height={150}
          width={120}
          src={
            loading
              ? 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
              : avatar2
          }
          alt="avatar"
        />
        <Image
          height={150}
          width={120}
          src={
            loading
              ? 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
              : avatar3
          }
          alt="avatar"
        />
      </Grid>
    </>
  );
  return (
    <div>
      <MainNav></MainNav>
      <div className="bc-profile">
        <Grid
          alignItems="center"
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
          <Grid md={6}>
            <div className="bc-profile-left-side">{userContainer}</div>
          </Grid>
          <Grid md={6}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
              <Grid xs={2}>
                <div>{imagesContainer}</div>
              </Grid>
              <Grid xs={2}>{avatarList}</Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
