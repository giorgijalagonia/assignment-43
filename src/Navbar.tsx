import React from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';

export interface NavbarProps {
  children?: React.ReactNode;
  appBarProps?: React.ComponentProps<typeof AppBar>;
  toolbarProps?: React.ComponentProps<typeof Toolbar>;
  containerProps?: React.ComponentProps<typeof Box>;
}

/**
 * Navbar component whose layout and styles are controlled by its parent via props.
 * Uses Material UI's AppBar, Toolbar, and Box for structure.
 */
const Navbar: React.FC<NavbarProps> = ({
  children,
  appBarProps,
  toolbarProps,
  containerProps,
}) => {
  return (
    <AppBar position="static" {...appBarProps}>
      <Toolbar {...toolbarProps}>
        <Box display="flex" alignItems="center" width="100%" {...containerProps}>
          {children}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 