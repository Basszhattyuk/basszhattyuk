import { Box, Link } from '@mui/material';
import logo from '../assets/hattyu_piros_filled.png';

export default function Header() {
  return (
    <Box component="header" sx={{ py: 3, mt: 'auto', backgroundColor: '#f5f5f5', marginBottom: 5 }}>
      <Link href="/">
        <Box
          component="img"
          src={logo}
          alt="BasszHattyúk Logo"
          sx={{ height: 150, display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
        />
      </Link>
    </Box>
  );
}
