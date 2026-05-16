import type {ImageSourcePropType} from 'react-native';
import {images} from '../assets/images';

export type GreenRoute = {
  id: string;
  title: string;
  category: string;
  short: string;
  description: string;
  image: ImageSourcePropType;
  duration: string;
  mood: string;
  bestTime: string;
  difficulty: string;
  placeIds: string[];
  stops: {
    title: string;
    text: string;
  }[];
};

export const routes: GreenRoute[] = [
  {
    id: 'morning-meadow-walk',
    title: 'Morning Meadow Walk',
    category: 'Featured Route',
    short: 'A calm green route through open grass, trees, and soft morning air.',
    description: 'Move through a gentle sequence of open lawn, shaded path, botanical detail, and quiet bench views. The route is built for slow morning pace, light photography, and easy pauses.',
    image: images.hollandParkQuietWalks,
    duration: '45-60 min',
    mood: 'Calm walk',
    bestTime: 'Morning',
    difficulty: 'Easy',
    placeIds: ['hyde-park-lawns', 'holland-park-quiet-walks', 'chelsea-physic-garden'],
    stops: [
      {
        title: 'Open Lawn Start',
        text: 'Begin at the wide open grassland where morning light covers the full lawn. Take a moment to settle into the pace before moving.',
      },
      {
        title: 'Tree Shade Path',
        text: 'Enter the shaded path under a row of mature trees. The light changes here, cooling and dappling through the canopy above.',
      },
      {
        title: 'Botanical Corner',
        text: 'A small planted area with seasonal flowers and careful ground cover. Take time to observe the planting detail before continuing.',
      },
      {
        title: 'Quiet Bench View',
        text: 'Finish with a bench positioned at a natural pause point with enough view, shade, and quiet space to rest.',
      },
    ],
  },
  {
    id: 'riverside-green-flow',
    title: 'Riverside Green Flow',
    category: 'Riverside Greens',
    short: 'A waterside walk through canal edges, open views, and relaxed green pauses.',
    description: 'Follow water as the natural guide. This route combines towpath movement, soft green borders, and places where the city feels calmer beside the river or canal.',
    image: images.regentsCanalGreens,
    duration: '35-50 min',
    mood: 'Waterside calm',
    bestTime: 'Late afternoon',
    difficulty: 'Easy',
    placeIds: ['regents-canal-greens', 'thames-path-green-sections', 'battersea-park-riverside-lawns'],
    stops: [
      {
        title: 'Canal Edge',
        text: 'Start near the water where narrow paths and green banks create a clear walking direction.',
      },
      {
        title: 'Bridge Pause',
        text: 'Use the bridge as a visual anchor and let the view set the rhythm before continuing along the water.',
      },
      {
        title: 'Open Riverside Lawn',
        text: 'End in a wider green area where the route relaxes and gives room for a longer pause.',
      },
    ],
  },
];

export const routeById = Object.fromEntries(routes.map(route => [route.id, route])) as Record<string, GreenRoute>;
