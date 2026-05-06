import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import BackButton from '../components/BackButton';
import BasszButton from '../components/BasszButton';

export default function KlanTourPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ p: isMobile ? 2 : 4, pt: 0, maxWidth: 800, margin: '0 auto' }}>
      <BackButton />
      <Typography variant="h4" component="h1" sx={{ mb: 3, textAlign: 'center' }}>
        Klán-Tour
      </Typography>
      <BasszButton
        sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}
        href="https://drive.google.com"
        target="_blank"
        rel="noopener noreferrer"
        disabled={true}
      >
        Feladatok
      </BasszButton>
    </Box>
  );
}
