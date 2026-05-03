import { Box, useMediaQuery, useTheme, Typography } from '@mui/material';
import BasszButton from '../components/BasszButton';
import BackButton from '../components/BackButton';

export default function RulesPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ p: isMobile ? 2 : 4, pt: 0, maxWidth: 800, margin: '0 auto' }}>
      <BackButton />
      <Typography variant="h4" component="h1" sx={{ mb: 3, textAlign: 'center' }}>
        KMDSZ Diáknapokra a fontos információk
      </Typography>
      <Typography variant="body1" component="div" sx={{ mb: 3 }}>
        Következő linken megtaláljátok a <strong>31. KMDSZ Diáknapok</strong> hivatalos szabályzatait, melyek
        tartalmazzák:
        <Typography component="ul" sx={{ mt: 1, pl: 3, mb: 0 }}>
          <li>Minden programra végleges szabályzat</li>
          <li>Hivatalos idő szerinti beosztások (ellenfelek) + Teljes program</li>
          <li>Max pontszámok</li>
        </Typography>
      </Typography>
      <BasszButton
        sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}
        href="https://drive.google.com/drive/folders/15XE2uY3lXDMCC37rlBqA07vpZfLPQol3"
        target="_blank"
        rel="noopener noreferrer"
      >
        Szabályzatok
      </BasszButton>
    </Box>
  );
}
