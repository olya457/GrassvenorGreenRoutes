import type {ImageSourcePropType} from 'react-native';
import {images} from '../assets/images';

export type PlaceCategory =
  | 'Open Grasslands'
  | 'Botanical Corners'
  | 'Quiet Parks'
  | 'Riverside Greens';

export type Place = {
  id: string;
  title: string;
  category: PlaceCategory;
  short: string;
  long: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  address: string;
  image: ImageSourcePropType;
  distance: string;
  whyVisit: string;
  bestTime: string;
  goodFor: string[];
};

export const categories: PlaceCategory[] = [
  'Open Grasslands',
  'Botanical Corners',
  'Quiet Parks',
  'Riverside Greens',
];

export const categoryEmoji: Record<PlaceCategory, string> = {
  'Open Grasslands': '🌿',
  'Botanical Corners': '🌸',
  'Quiet Parks': '🍃',
  'Riverside Greens': '💧',
};

export const categoryColors: Record<PlaceCategory, string> = {
  'Open Grasslands': '#5da13e',
  'Botanical Corners': '#b8cf79',
  'Quiet Parks': '#d0b36f',
  'Riverside Greens': '#7eb8c5',
};

export const places: Place[] = [
  {
    id: 'hyde-park-lawns',
    title: 'Hyde Park Lawns',
    category: 'Open Grasslands',
    short: 'Wide open lawns with classic London park views.',
    long: 'Hyde Park Lawns offer large grassy spaces, walking paths, tree lines, and a calm city-nature atmosphere. This location works well for slow walks, relaxed outdoor pauses, light photography, and simple picnic-style travel moments. It feels open, iconic, and easy to understand for users who want a green escape inside the city.',
    coordinates: {latitude: 51.5073, longitude: -0.1657},
    address: 'Hyde Park, London, United Kingdom',
    image: images.hydeParkLawns,
    distance: '1.2 km',
    whyVisit: "One of London's most iconic green spaces with expansive lawns perfect for slow walks and quiet outdoor moments in the heart of the city.",
    bestTime: 'Morning (7-10am) or late afternoon (4-7pm) for best light and fewer visitors.',
    goodFor: ['Slow walks', 'Picnics', 'Photography', 'Open-air reading'],
  },
  {
    id: 'primrose-hill',
    title: 'Primrose Hill',
    category: 'Open Grasslands',
    short: 'A grassy hill with panoramic city views.',
    long: 'Primrose Hill combines open grass, skyline views, and a peaceful outdoor setting. The location is especially strong for users who want a nature-based place with a clear visual payoff. Its soft grassy slopes and elevated viewpoint make it suitable for walking, resting, photography, and calm city observation.',
    coordinates: {latitude: 51.5393, longitude: -0.1607},
    address: 'Primrose Hill, London, United Kingdom',
    image: images.primroseHill,
    distance: '3.4 km',
    whyVisit: 'A soft grassy climb with one of the clearest city-view rewards in London.',
    bestTime: 'Late afternoon when the skyline gains depth and the grass feels warmer.',
    goodFor: ['Skyline views', 'Resting', 'Photography', 'Light climbs'],
  },
  {
    id: 'hampstead-heath-meadows',
    title: 'Hampstead Heath Meadows',
    category: 'Open Grasslands',
    short: 'Natural grassland with wilder walking routes.',
    long: 'Hampstead Heath Meadows provide a more natural and less polished green experience. The area includes open meadows, old trees, uneven paths, and wide natural views. It feels less like a formal city park and more like a proper outdoor route, which makes it useful for users looking for a stronger nature mood.',
    coordinates: {latitude: 51.5608, longitude: -0.1657},
    address: 'Hampstead Heath, London, United Kingdom',
    image: images.hampsteadHeathMeadows,
    distance: '5.9 km',
    whyVisit: 'A wilder meadow mood with older trees, uneven paths, and a stronger outdoor feeling.',
    bestTime: 'Dry mornings or clear afternoons when the paths are easier and views open up.',
    goodFor: ['Meadow walks', 'Nature mood', 'Longer routes', 'Old trees'],
  },
  {
    id: 'richmond-park-grasslands',
    title: 'Richmond Park Grasslands',
    category: 'Open Grasslands',
    short: 'Expansive grassland with a natural park atmosphere.',
    long: 'Richmond Park Grasslands offer vast open green space, ancient trees, wide lawns, and long walking routes. The scale of the park gives it a more spacious and natural feeling than many central parks. It is ideal for users who want a longer green walk, open views, and a calm landscape away from dense city streets.',
    coordinates: {latitude: 51.4426, longitude: -0.2739},
    address: 'Richmond Park, London, United Kingdom',
    image: images.richmondParkGrasslands,
    distance: '9.7 km',
    whyVisit: 'Large-scale grassland, ancient trees, and a spacious route rhythm away from dense streets.',
    bestTime: 'Morning for open calm or autumn afternoons for richer colors.',
    goodFor: ['Long walks', 'Open views', 'Ancient trees', 'Quiet routes'],
  },
  {
    id: 'chelsea-physic-garden',
    title: 'Chelsea Physic Garden',
    category: 'Botanical Corners',
    short: 'A historic botanical garden with rare plants.',
    long: 'Chelsea Physic Garden is a compact and elegant botanical destination with plant collections, garden paths, quiet corners, and educational nature details. It is a good fit for travelers interested in plants, garden design, slow observation, and refined outdoor spaces. The atmosphere is calm, curated, and premium.',
    coordinates: {latitude: 51.484, longitude: -0.1624},
    address: '66 Royal Hospital Road, London, United Kingdom',
    image: images.chelseaPhysicGarden,
    distance: '2.6 km',
    whyVisit: 'A refined garden with rare plants, close observation, and a calm historic atmosphere.',
    bestTime: 'Spring and early summer afternoons when plant detail feels strongest.',
    goodFor: ['Rare plants', 'Garden design', 'Slow travel', 'Quiet corners'],
  },
  {
    id: 'kew-gardens-palm-house',
    title: 'Kew Gardens Palm House',
    category: 'Botanical Corners',
    short: 'A refined botanical landmark surrounded by gardens.',
    long: 'Kew Gardens Palm House is one of the strongest botanical anchors for the app. The surrounding gardens, lawns, glasshouse architecture, and rare plant collections create a complete nature-travel experience. This location is perfect for users who want something more structured, educational, and visually impressive.',
    coordinates: {latitude: 51.4787, longitude: -0.2956},
    address: 'Royal Botanic Gardens, Kew, Richmond, London, United Kingdom',
    image: images.kewGardensPalmHouse,
    distance: '8.8 km',
    whyVisit: 'Glasshouse architecture, botanical collections, and surrounding lawns create a complete green visit.',
    bestTime: 'Mid-morning on weekdays for softer movement through the gardens.',
    goodFor: ['Glasshouse', 'Plants', 'Education', 'Seasonal routes'],
  },
  {
    id: 'kyoto-garden',
    title: 'Kyoto Garden',
    category: 'Botanical Corners',
    short: 'A peaceful garden with refined natural composition.',
    long: 'Kyoto Garden is a carefully designed green space with water, plants, stone details, and a calm walking atmosphere. It feels compact but memorable, with a strong sense of balance and visual order. This place works well for users who want a quiet, elegant, and contemplative nature stop inside the city.',
    coordinates: {latitude: 51.5028, longitude: -0.2035},
    address: 'Holland Park, London, United Kingdom',
    image: images.kyotoGarden,
    distance: '4.1 km',
    whyVisit: 'A compact garden stop with water, stone details, and a thoughtful quiet mood.',
    bestTime: 'Morning or rainy afternoons when the garden feels most contemplative.',
    goodFor: ['Quiet stops', 'Water views', 'Garden detail', 'Reflection'],
  },
  {
    id: 'queen-marys-gardens',
    title: "Queen Mary's Gardens",
    category: 'Botanical Corners',
    short: 'Elegant garden paths and seasonal flowers.',
    long: "Queen Mary's Gardens offers structured beauty, lawns, flower beds, seasonal planting, and relaxing walking paths. It is ideal for users who prefer curated nature rather than wild landscapes. The location feels clean, scenic, and suitable for slow travel, casual photography, and calm outdoor breaks.",
    coordinates: {latitude: 51.531, longitude: -0.1546},
    address: "Regent's Park, London, United Kingdom",
    image: images.queenMarysGardens,
    distance: '3.1 km',
    whyVisit: 'Elegant flower beds and structured paths for a polished garden walk.',
    bestTime: 'Late spring and summer when seasonal planting is strongest.',
    goodFor: ['Flowers', 'Casual photos', 'Garden paths', 'Slow breaks'],
  },
  {
    id: 'holland-park-quiet-walks',
    title: 'Holland Park Quiet Walks',
    category: 'Quiet Parks',
    short: 'Calm park paths with shaded green areas.',
    long: 'Holland Park combines lawns, gardens, shaded paths, and quiet corners. It is one of the best choices for users who want a refined park experience without feeling too open or crowded. The location works well for gentle walking, reading breaks, and short nature pauses during a city route.',
    coordinates: {latitude: 51.5044, longitude: -0.2043},
    address: 'Holland Park, London, United Kingdom',
    image: images.hollandParkQuietWalks,
    distance: '4.0 km',
    whyVisit: 'A calm park route with shade, lawns, gardens, and easy quiet pauses.',
    bestTime: 'Mid-morning when paths are calm and shaded sections feel comfortable.',
    goodFor: ['Shade', 'Reading breaks', 'Gentle walks', 'Short pauses'],
  },
  {
    id: 'st-james-park',
    title: "St James's Park",
    category: 'Quiet Parks',
    short: 'Elegant lawns, water views, and classic paths.',
    long: "St James's Park is a polished central green space with lawns, mature trees, lake views, and iconic walking paths. It offers a calm travel stop in the middle of the city and feels especially suitable for users who want an easy, scenic, and accessible nature location without leaving the central area.",
    coordinates: {latitude: 51.5025, longitude: -0.1348},
    address: "St James's Park, London, United Kingdom",
    image: images.stJamesPark,
    distance: '1.8 km',
    whyVisit: 'A central polished park with lake views, mature trees, and classic walking paths.',
    bestTime: 'Morning before the central area becomes busy.',
    goodFor: ['Lake views', 'Central stops', 'Easy access', 'Classic paths'],
  },
  {
    id: 'green-park',
    title: 'Green Park',
    category: 'Quiet Parks',
    short: 'Simple grass, mature trees, and calm walking space.',
    long: 'Green Park is minimal, open, and easy to navigate. Its wide lawns and tree-lined walking paths create a clean green pause between busier city zones. This location is useful for users who want a simple nature break without too many visual distractions or complex routes.',
    coordinates: {latitude: 51.5067, longitude: -0.1437},
    address: 'Green Park, London, United Kingdom',
    image: images.greenPark,
    distance: '1.5 km',
    whyVisit: 'A simple green pause with mature trees and easy paths between busy city zones.',
    bestTime: 'Lunch breaks or late afternoon for a quick calm reset.',
    goodFor: ['Simple walks', 'Tree lines', 'Quick pauses', 'Picnics'],
  },
  {
    id: 'victoria-embankment-gardens',
    title: 'Victoria Embankment Gardens',
    category: 'Quiet Parks',
    short: 'A small peaceful garden near the city river.',
    long: 'Victoria Embankment Gardens is a compact green space with paths, planted areas, seating, and a calm atmosphere near central London movement. It is not a large nature escape, but it works well as a short green pause, especially for users moving through the city and wanting a quieter outdoor corner.',
    coordinates: {latitude: 51.5082, longitude: -0.1226},
    address: 'Victoria Embankment, London, United Kingdom',
    image: images.victoriaEmbankmentGardens,
    distance: '2.1 km',
    whyVisit: 'A compact garden pause near central routes and the river.',
    bestTime: 'Any quiet gap between city plans when a short stop is enough.',
    goodFor: ['Short pauses', 'Benches', 'City contrast', 'Compact gardens'],
  },
  {
    id: 'regents-canal-greens',
    title: "Regent's Canal Greens",
    category: 'Riverside Greens',
    short: 'Grass banks and waterside walking moments.',
    long: "Regent's Canal Greens combine calm water views, greenery, towpaths, and softer urban nature. The route feels linear and peaceful, with a different rhythm than traditional parks. It is a good choice for users who prefer walking beside water while still staying close to green spaces and city texture.",
    coordinates: {latitude: 51.5352, longitude: -0.1456},
    address: "Regent's Canal, London, United Kingdom",
    image: images.regentsCanalGreens,
    distance: '3.7 km',
    whyVisit: 'A long green towpath route through the city, combining still water, overhanging trees, and a quiet pace that contrasts with surrounding streets.',
    bestTime: 'Morning when the canal reflects the sky and narrowboats are still moored.',
    goodFor: ['Canal walks', 'Waterside nature', 'Long routes', 'Photography'],
  },
  {
    id: 'thames-path-green-sections',
    title: 'Thames Path Green Sections',
    category: 'Riverside Greens',
    short: 'Riverside walking with green pauses and open views.',
    long: 'Thames Path Green Sections offer riverside movement, open-air views, and occasional green stops along the water. This location type is useful for travelers who want a flexible walking route rather than a single park destination. It gives the app a wider outdoor route feeling.',
    coordinates: {latitude: 51.5079, longitude: -0.0877},
    address: 'Thames Path, London, United Kingdom',
    image: images.thamesPathGreenSections,
    distance: '2.9 km',
    whyVisit: 'A flexible riverside walk with open views and green pauses along the water.',
    bestTime: 'Late afternoon for open light and reflected river color.',
    goodFor: ['River views', 'Flexible routes', 'Bridges', 'Open air'],
  },
  {
    id: 'battersea-park-riverside-lawns',
    title: 'Battersea Park Riverside Lawns',
    category: 'Riverside Greens',
    short: 'Wide lawns close to the river.',
    long: 'Battersea Park Riverside Lawns offer broad green areas, tree-lined routes, water proximity, and relaxed outdoor space. The park is strong for walking, resting, photography, and soft riverside travel moments. It feels spacious without being too far from the city.',
    coordinates: {latitude: 51.4792, longitude: -0.1563},
    address: 'Battersea Park, London, United Kingdom',
    image: images.batterseaParkRiversideLawns,
    distance: '4.5 km',
    whyVisit: 'Broad lawns, riverside edges, and tree-lined walking space create an easy outdoor pause.',
    bestTime: 'Morning for soft riverside light or late afternoon for richer lawn color.',
    goodFor: ['Riverside lawns', 'Picnics', 'Photography', 'Walking'],
  },
  {
    id: 'walthamstow-wetlands-green-paths',
    title: 'Walthamstow Wetlands Green Paths',
    category: 'Riverside Greens',
    short: 'Nature paths, water views, and soft green edges.',
    long: 'Walthamstow Wetlands Green Paths combine reservoirs, wildlife areas, walking paths, and natural green surroundings. The location feels less formal than classic city parks and more connected to open nature. It is useful for users who want water, greenery, and a quieter outdoor rhythm.',
    coordinates: {latitude: 51.5866, longitude: -0.0509},
    address: '2 Forest Road, London, United Kingdom',
    image: images.walthamstowWetlandsGreenPaths,
    distance: '8.4 km',
    whyVisit: 'Reservoir views, wildlife edges, and natural green paths make the route feel less formal.',
    bestTime: 'Cool mornings when the water is calm and the route feels quiet.',
    goodFor: ['Wetlands', 'Water views', 'Wildlife', 'Quiet rhythm'],
  },
];

export const placeById = Object.fromEntries(places.map(place => [place.id, place])) as Record<string, Place>;
