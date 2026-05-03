import { Box, Stack, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BasszButton from '../components/BasszButton';

export default function MainPage() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ p: isMobile ? 2 : 4, pt: 0, maxWidth: 800, margin: '0 auto' }}>
      <Stack spacing={3}>
        <BasszButton variant="contained" onClick={() => navigate('/roadmap')}>
          RoadMap
        </BasszButton>
        <BasszButton variant="contained" onClick={() => navigate('/szabalyzatok')}>
          MINDEN FONTOS DOLOG!
        </BasszButton>
        <BasszButton variant="contained" onClick={() => navigate('/city-tour')}>
          City-Tour
        </BasszButton>
        <BasszButton variant="contained" onClick={() => navigate('/klan-tour')}>
          Klán-Tour
        </BasszButton>
        <BasszButton variant="contained" onClick={() => navigate('/elerhetosegek')}>
          Elérhetőségek
        </BasszButton>
        <BasszButton variant="contained" onClick={() => navigate('/adatok')} disabled={true}>
          Regisztráció és adatok
        </BasszButton>
        <BasszButton variant="contained" onClick={() => navigate('/polok-hoodie')} disabled={true}>
          Pólók és hoodiek
        </BasszButton>
        {/*
        <BasszButton variant="contained" onClick={() => navigate('/kabanna')} disabled={true}>
          Kabanna
        </BasszButton>
        <BasszButton variant="contained" onClick={() => navigate('/roadmap')} disabled={true}>
          RoadMap
        </BasszButton>
        <BasszButton variant="contained" onClick={() => navigate('/city-tour')} disabled={true}>
          City-Tour
        </BasszButton>
        <BasszButton variant="contained" onClick={() => navigate('/klan-tour')} disabled={true}>
          Klán-Tour
        </BasszButton>
        <BasszButton variant="contained" onClick={() => navigate('/szabalyzatok')} disabled={true}>
          Szabályzatok programokra
        </BasszButton>
        */}
      </Stack>
    </Box>
  );
}
