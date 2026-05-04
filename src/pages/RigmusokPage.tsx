import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import BackButton from '../components/BackButton';

const verses = [
  `Mi vagyunk a BasszHattyúk,
Reggel, este csapatjuk,
Az egyetemet otthagytuk,
A Central tavat megittuk.`,

  `Újra itt a tavasz,
Visszajött a hattyú,
Leszarta a vállam,
Mondtam neki: FUCK YOU!`,

  `Aki ugrál, büszke hattyú, hej-hej!`,

  `Utcára nyílik a kocsmaajtó,
Kihallatszik belőle, hogy: BasszHattyúk.`,

  `Mindenki itt van, mindenki tapsol,
Mindenki a BasszHattyúknak szurkol!
[Olé-olé]
Üres a hordó, repül a korsó,
Mindenki fekszik az alkoholtól.
Micsoda álom, micsoda lányok,
Mindenkit basznak a hattyús srácok.`,

  `Mi vagyunk a hattyús faszagyerekek,
Értünk zörögnek a sörösüvegek.
Mert az egész világ tudja,
A BasszHattyúknál nincs jobb-jobb-jobb.`,

  `Tavaszi szél vizet áraszt, virágom, virágom,
Minden madár társat választ, virágom, virágom.
De én inkább galyra vágok, virágom, virágom,
A nagy sáncban danolászok, virágom, virágom.`,

  `Hattyúk hattyúk csapatjuk,
Jókedvünket meghagyjuk,
Rosszkedvünket Basszhattvúk:
Szép asszonykánk eladjuk, 
Gyertek akkor vígadjunk!`,

  `S lakodalom van a mi utcáánkban, 
De férjhez megy a csapat legszebb láánya...
Hivatalos vagyok oda één is, 
Basszhattvúkkal megyek vígan mégis.`,

  `Mindent egy csapatért, 
A szép BasszHattyúkért,
Igyunk csak együtt az angyalát!
Hajrá BasszHattyúk!`,
];

export default function RigmusokPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ p: isMobile ? 2 : 4, pt: 0, maxWidth: 800, mx: 'auto' }}>
      <BackButton />

      <Typography variant="h4" component="h1" sx={{ mb: 4, textAlign: 'center', fontWeight: 'bold' }}>
        Rigmusok
      </Typography>

      {verses.map((verse, index) => (
        <Typography
          key={index}
          variant="body1"
          sx={{
            mb: 5,
            whiteSpace: 'pre-line',
            textAlign: 'center',
            lineHeight: 1.6,
          }}
        >
          {verse}
        </Typography>
      ))}
    </Box>
  );
}
