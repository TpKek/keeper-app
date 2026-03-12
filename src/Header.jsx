import React from 'react';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';

const Header = () => {
  return (
    <header>
      <StickyNote2Icon sx={{ fontSize: 32, color: '#fff', mr: 1 }} />
      <h1>Keeper</h1>
    </header>
  );
};

export default Header;
