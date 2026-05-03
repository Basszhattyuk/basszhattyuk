import { Accordion, AccordionSummary, AccordionDetails, Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BackButton from '../components/BackButton';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import locations from '../assets/locations.json';

export default function RoadMapPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ p: isMobile ? 2 : 4, pt: 0, maxWidth: 800, margin: '0 auto' }}>
      <BackButton />
      <Typography variant="h4" component="h1" sx={{ mb: 3, textAlign: 'center' }}>
        RoadMap
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Ez a rész még fejlesztés alatt áll, de hamarosan minden fontos információt megtaláltok itt a programokkal
        kapcsolatban!
      </Typography>

      <Typography variant="h4" component="h1" sx={{ mb: 3, textAlign: 'center' }}>
        Helyszínek
      </Typography>

      {locations.map((location, index) => (
        <Accordion key={location.name} disableGutters>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{location.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ width: '100%', height: 300 }}>
              <MapContainer center={[location.lat, location.lng]} zoom={15} style={{ width: '100%', height: '100%' }}>
                <TileLayer
                  attribution="&copy; OpenStreetMap contributors"
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[location.lat, location.lng]}>
                  <Popup>{location.name}</Popup>
                </Marker>
              </MapContainer>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
