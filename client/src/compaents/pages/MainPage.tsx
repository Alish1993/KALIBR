import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

export default function MainPage(): JSX.Element {
  return (
    <Grid>
      <Grid item xs={4}>
        <Box pt={4} display="flex" flexDirection="row" justifyContent="center">
          <Typography variant="h3" color="#f44030">
            Main Page :)
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
