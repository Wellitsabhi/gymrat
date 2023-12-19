import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '95px', height: '77px', objectFit:'cover' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made with ❤️ by Abhishek</Typography>
    <Typography variant="subtitle1" sx={{ fontSize: { lg: '15px', xs: '10px' } }} mt="-40px" textAlign="center" >&copy; All right/wrong reserved</Typography>
  </Box>
);

export default Footer;