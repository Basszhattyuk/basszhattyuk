import { Accordion, AccordionSummary, AccordionDetails, Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import BackButton from '../components/BackButton';
import BasszButton from '../components/BasszButton';

import locations from '../assets/locations.json';
import 'leaflet/dist/leaflet.css';

const markerIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function RoadMapPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ p: isMobile ? 2 : 4, pt: 0, maxWidth: 800, margin: '0 auto' }}>
      <BackButton />
      <Typography variant="h4" component="h1" sx={{ mb: 3, textAlign: 'center' }}>
        RoadMap
      </Typography>

      <Typography variant="h5" sx={{ mb: 3, textAlign: 'center' }}>
        Hamarosan!
      </Typography>
      <BasszButton
        component="a"
        href="https://docs.google.com/spreadsheets/d/14LyoL-GwDoo03pMQEeLKfFL6cEMGUZjziHylV2pRlRY/edit?usp=sharing"
        sx={{ display: 'block', mx: 'auto', mb: 4, textAlign: 'center' }}
        disabled={true}
      >
        Táblázat
      </BasszButton>

      <Typography variant="h4" component="h1" sx={{ mb: 3, textAlign: 'center' }}>
        Helyszínek
      </Typography>

      {locations.map((location) => (
        <Accordion key={location.name} disableGutters>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{location.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ width: '100%', height: 300 }}>
              <MapContainer center={[location.lat, location.lng]} zoom={15} style={{ width: '100%', height: '100%' }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[location.lat, location.lng]} icon={markerIcon}>
                  <Popup>{location.name}</Popup>
                </Marker>
              </MapContainer>
            </Box>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
              <BasszButton
                component="a"
                href={`https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Maps
              </BasszButton>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
