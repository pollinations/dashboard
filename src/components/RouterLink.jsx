import { Link as MaterialLink } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function RouterLink({ to, children, ...rest }) {
  return <MaterialLink component={Link} to={to} {...rest}>{children}</MaterialLink>;
}
