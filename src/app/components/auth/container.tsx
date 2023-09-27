import { Grid } from '@mui/joy';
import Image from 'next/image';
import background from '../../../../public/auth-bg.jpeg';

const container = ({ children }: { children: any }) => {
  return (
    <Grid container style={{ height: '100vh', maxHeight: '100vh' }}>
      <Grid xs={6} style={{ position: 'relative' }}>
        <div
          style={{
            backgroundImage: `url(${background.src})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '100%',
            width: '100%',
          }}></div>
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            height: '100%',
            justifyContent: 'center',
            left: 0,
            position: 'absolute',
            top: 0,
            width: '100%',
          }}>
          <Image src="/auth-1.png" width={600} height={600} alt={'auth-img'} />
        </div>
      </Grid>
      <Grid xs={6}>{children}</Grid>
    </Grid>
  );
};

export default container;
