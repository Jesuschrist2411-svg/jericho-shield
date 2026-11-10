console.log('main.js est bien chargé')

import * as maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import './style.css'

// 1. Création de la carte, centrée sur la Belgique
const map = new maplibregl.Map({
  container: 'map',
  style: {
    version: 8,
    sources: {
      osm: {
        type: 'raster',
        tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
        tileSize: 256,
        attribution: '© les contributeurs d’OpenStreetMap',
      },
    },
    layers: [{ id: 'osm', type: 'raster', source: 'osm' }],
  },
  center: [4.47, 50.5], // [longitude, latitude]
  zoom: 7,
})

// 2. Quelques lieux de test (à remplacer plus tard par de vrais lieux)
const lieux = [
  { nom: 'Lieu test : bunker', lng: 4.35, lat: 50.85 },
  { nom: 'Lieu test : site abandonné', lng: 5.57, lat: 50.63 },
  { nom: 'Lieu test : bivouac en forêt', lng: 5.4, lat: 50.2 },
]

// 3. Ajout d'un marqueur pour chaque lieu
lieux.forEach((lieu) => {
  new maplibregl.Marker()
    .setLngLat([lieu.lng, lieu.lat])
    .setPopup(new maplibregl.Popup().setText(lieu.nom))
    .addTo(map)
})