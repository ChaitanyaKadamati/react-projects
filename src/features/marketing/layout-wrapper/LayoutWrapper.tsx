import {Stack} from '@mui/material';
import React from 'react';
import {FooterSubfeature, HeaderSubfeature} from '../subfeatures';

export const LayoutWrapper: React.FC = () => {
  return (
    <Stack>
      <HeaderSubfeature />
      <>LayoutWrapper Works!</>
      <FooterSubfeature />
    </Stack>
  );
};
