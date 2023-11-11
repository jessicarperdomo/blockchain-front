'use client';

import { useEffect, useState } from 'react';
import { Grid } from '@mui/joy';
import { useRouter } from 'next/navigation';
import MainNav from '@/app/components/main-nav/main-nav';
import Image from 'next/image';
import './page.css';
import Web3 from 'web3';
import url from 'url';

declare var window: any;

export default function Profile() {
  const currentUrl = window.location.href;

  const userDescription =
    'Descubre tu NFT y embarcate hacia el futuro de la tecnología e innovación explorando el mundo de la WEB3';

  const [loading, setLoading] = useState(true);
  const [userToken, setUserToken] = useState('');
  const [accountId, setAccountId] = useState<string | null>(null);
  const [accountValue, setAccountValue] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const getMetamaskAccountValue = async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
          const accounts = await web3.eth.getAccounts();
          const account = accounts[0];
          setAccountId(account);

          const balance = await web3.eth.getBalance(account);
          const balanceInEth = web3.utils.fromWei(balance, 'ether');

          setAccountValue(balanceInEth);
        } catch (error) {
          console.error('Error obtaining Metamask account value:', error);
        }
      } else {
        console.error('Metamask is not installed or not available');
      }
    };

    getMetamaskAccountValue();
  }, [setUserToken]);

  useEffect(() => {
    if (!userToken) {
      const parsedUrl = url.parse(currentUrl, true);

      const accessToken = parsedUrl.hash && parsedUrl.hash.split('=')[1];

      if (accessToken) {
        setUserToken(accessToken);
        setLoading(false);
      } else {
        handleRedirect();
      }
    }
  }, []);

  const handleRedirect = () => {
    router.push('/');
  };

  const userDetails = (
    <div className="bc-profile-container">
      <div>
        <h1 className="bc-text-first-level">10K+</h1>
        <p className="bc-text-second-level">usuarios</p>
      </div>
      <div>
        <h1 className="bc-text-first-level">{accountValue}</h1>
        <p className="bc-text-second-level">adl coins</p>
      </div>
      <div>
        <h1 className="bc-text-first-level">38K+</h1>
        <p className="bc-text-second-level">nfts</p>
      </div>
    </div>
  );

  const userContainer = (
    <>
      <p className="bb-container-description">{userDescription}</p>
      {userDetails}
    </>
  );

  const imagesContainer = (
    <Image
      height={419}
      width={419}
      src={loading ? '/placeholder.gif' : '/avatar.png'}
      alt="avatar"
    />
  );

  const avatarList = (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center">
      <Image
        height={150}
        width={120}
        src={loading ? '/placeholder.gif' : '/avatar-1.svg'}
        alt="avatar"
      />
      <Image
        height={150}
        width={120}
        src={loading ? '/placeholder.gif' : '/avatar-2.svg'}
        alt="avatar"
      />
      <Image
        height={150}
        width={120}
        src={loading ? '/placeholder.gif' : '/avatar-3.svg'}
        alt="avatar"
      />
    </Grid>
  );

  return (
    <div>
      <MainNav />
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
