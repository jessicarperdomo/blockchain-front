'use client';

import Footer from '@/app/components/footer/footer';
import Hero from '@/app/components/landing/landing';
import backgrounImage from '../../public/landing-background.svg';
import { Box, Button, Container, Typography, styled } from '@mui/joy';
import { Amplify, Auth } from 'aws-amplify';
import awsConfig from './aws-exports';

export default function Page() {
  Amplify.configure({ Auth: awsConfig });

  const classes = {
    root: {
      backgroundImage: `url(${backgrounImage.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  };
  function handleClick() {
    Auth.federatedSignIn();
  }

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      style={classes.root}>
      <Container>
        <Hero />
      </Container>
      <Box
        position="fixed"
        left={0}
        bottom={0}
        width="100%"
        textAlign="center"
        color={'white'}>
        <Box
          sx={{ display: 'flex', justifyContent: 'flex-end', padding: '3rem' }}>
          <Button
            sx={{ width: '200px' }}
            variant="solid"
            color="neutral"
            onClick={() => handleClick()}>
            Iniciar
          </Button>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}
