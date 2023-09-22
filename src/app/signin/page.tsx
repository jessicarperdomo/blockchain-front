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

const signIn = () => {
  return (
    <>
      <form>
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          <Grid xs={12}>
            <FormControl>
              <FormLabel>Tu número de cédula</FormLabel>
              <Input placeholder="Número de cédula" />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
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
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
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
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
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
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
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
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          <Grid xs={12}>
            <Checkbox label="Aceptación autorizaciones, declaraciones y términos y condiciones" />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          <Grid xs={12}>
            <Button variant="solid">Continuar</Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default signIn;
