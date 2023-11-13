import Grid from '@mui/material/Unstable_Grid2';
import {Box, CssBaseline } from '@mui/material';

function Layout({children}) {
    return (
        <Box style= {{display: "flex", height: "100vh"}}>
            <CssBaseline />
            <Grid container sx={{flexGrow: 1}}>
                <Grid item flexBasis={220}>
                    Menu Goes Here
                </Grid>
                <Grid item flex={1}>
                    <Grid xs={12}>HEADER</Grid>
                    <Grid xs={12}>BRANDING</Grid>
                        <Grid container spacing={8}>
                             <Grid xs={3}>PKI</Grid>
                             <Grid xs={3}>PKI</Grid>
                             <Grid xs={3}>PKI</Grid>
                             <Grid xs={3}>PKI</Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid xs={4}>Container 1</Grid>
                            <Grid xs={4}>Container 2</Grid>
                            <Grid xs={4}>Container 3</Grid>
                        </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Layout;