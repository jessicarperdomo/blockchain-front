import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Option,
  Select,
} from '@mui/joy';
import Typography from '@mui/joy/Typography';
import Container from '@/app/components/auth/container';

const signIn = () => {
  return (
    <Container>
      <Grid
        direction="column"
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={{ height: '100%' }}>
        <form>
          <Grid container direction="column" gap="10px">
            <Typography level="h1" textAlign="center">
              Registrate
            </Typography>
            <Grid container>
              <Grid xs={12}>
                <FormControl>
                  <FormLabel>Tu número de cédula</FormLabel>
                  <Input placeholder="Número de cédula" />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid xs={6}>
                <FormControl>
                  <FormLabel>Tu nombre</FormLabel>
                  <Input placeholder="Primer nombre" />
                </FormControl>
              </Grid>
              <Grid xs={6}>
                <FormControl>
                  <FormLabel>&nbsp;</FormLabel>
                  <Input placeholder="Segundo nombre" />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid xs={6}>
                <FormControl>
                  <FormLabel>Tu apellido</FormLabel>
                  <Input placeholder="Primer apellido" />
                </FormControl>
              </Grid>
              <Grid xs={6}>
                <FormControl>
                  <FormLabel>&nbsp;</FormLabel>
                  <Input placeholder="Segundo apellido" />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container>
              <Grid xs={12}>
                <FormControl>
                  <FormLabel>Ecosistema</FormLabel>
                  <Select defaultValue="dog">
                    <Option value="dog">Dog</Option>
                    <Option value="cat">Cat</Option>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container>
              <Grid xs={12}>
                <FormControl>
                  <FormLabel>Rol</FormLabel>
                  <Select defaultValue="dog">
                    <Option value="dog">Dog</Option>
                    <Option value="cat">Cat</Option>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container marginTop="20px">
              <Grid xs={12}>
                <Checkbox label="Aceptación autorizaciones, declaraciones y términos y condiciones" />
              </Grid>
            </Grid>
            <Grid container marginTop="20px">
              <Grid
                xs={12}
                style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="solid" style={{ width: '50%' }}>
                  Continuar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
};

export default signIn;
