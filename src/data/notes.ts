import type {ImageSourcePropType} from 'react-native';
import {images} from '../assets/images';

export type NatureNote = {
  id: string;
  title: string;
  subtitle: string;
  readMinutes: number;
  image: ImageSourcePropType;
  paragraphs: string[];
  relatedPlaceIds: string[];
};

export const notes: NatureNote[] = [
  {
    id: 'how-to-choose-green-route',
    title: 'How to Choose a Green Route',
    subtitle: 'A simple guide to planning calm walks through parks, gardens, and open grass areas.',
    readMinutes: 4,
    image: images.noteGreenRoute,
    relatedPlaceIds: ['hyde-park-lawns', 'primrose-hill', 'holland-park-quiet-walks'],
    paragraphs: [
      'A good green route is not just a line between two points. It is a sequence of outdoor moments that feel comfortable, natural, and easy to follow. When choosing a route, start with the type of space you want: open lawns for freedom, shaded park paths for calm walking, botanical gardens for detail, or riverside greens for movement beside water.',
      'Look at the rhythm of the location. Wide grassy areas are better for slow pauses, reading, photography, or relaxed movement. Tree-lined paths are better for walking when the weather is warm. Botanical corners are ideal when you want something more visual and structured. Riverside green routes work well when you want a route that feels longer without becoming tiring.',
      'A useful route should have a clear starting point, several natural stops, and a comfortable ending. Avoid choosing only the most famous place. Sometimes a smaller park, a quiet lawn, or a garden corner creates a better travel experience because it gives you space to notice details.',
      'For the best result, combine three elements: grass, shade, and one visual anchor. The anchor can be a garden, a pond, a hill view, a bridge, or a tree-lined path. This gives the route structure and makes it easier to remember.',
    ],
  },
  {
    id: 'best-time-for-park-photography',
    title: 'Best Time for Park Photography',
    subtitle: 'Why morning light and late afternoon make green spaces feel softer and more atmospheric.',
    readMinutes: 3,
    image: images.notePhotography,
    relatedPlaceIds: ['primrose-hill', 'richmond-park-grasslands', 'battersea-park-riverside-lawns'],
    paragraphs: [
      'Green spaces change dramatically depending on the light. The same lawn, garden, or walking path can feel flat at noon and cinematic in the morning. For photography, the best time is usually early morning or late afternoon, when the light is softer and shadows are longer.',
      'Morning light gives grass a fresh, clean look. Parks are often quieter, paths are less crowded, and the air feels clearer. This is the best time for soft landscape photos, empty benches, tree silhouettes, and calm walking shots. If a location has mist, dew, or low sunlight, the atmosphere becomes even stronger.',
      'Late afternoon is better for warm tones and more dramatic shadows. Grass becomes richer, trees gain depth, and paths feel more dimensional. This time works especially well for open locations such as hills, lawns, and riverside areas.',
      'Avoid shooting wide grass areas in harsh midday sun unless you want a very bright and simple look. Strong overhead light can remove texture from lawns and make natural colors look less refined. A small change in timing can turn a normal park photo into something that feels premium and intentional.',
      'For app users, the simplest rule is this: choose morning for calm, choose late afternoon for mood.',
    ],
  },
  {
    id: 'botanical-gardens-for-slow-travel',
    title: 'Botanical Gardens for Slow Travel',
    subtitle: 'How structured gardens can turn a city visit into a quieter travel experience.',
    readMinutes: 4,
    image: images.noteBotanical,
    relatedPlaceIds: ['chelsea-physic-garden', 'kew-gardens-palm-house', 'queen-marys-gardens'],
    paragraphs: [
      'Botanical gardens are different from regular parks. They are designed for observation, not just movement. Every path, plant group, glasshouse, bed, and quiet corner creates a slower rhythm. This makes botanical gardens perfect for travelers who want a calmer experience inside a busy city.',
      'Unlike open lawns, botanical spaces invite users to look closer. Leaves, textures, plant labels, seasonal flowers, and garden structures create small details that make the visit feel richer. A short walk can become more memorable because the space is layered.',
      'The best way to explore a botanical garden is to move slowly and avoid trying to see everything at once. Choose one or two sections, then let the route feel natural. A greenhouse, a flower garden, a medicinal plant section, or a quiet bench can become the main point of the visit.',
      'Botanical gardens are especially useful for travel apps because they combine beauty, education, and atmosphere. They are not only places to walk; they are places to notice. That makes them ideal for saved collections, notes, and repeat visits during different seasons.',
    ],
  },
  {
    id: 'riverside-greens-and-calm-movement',
    title: 'Riverside Greens and Calm Movement',
    subtitle: 'Why water, grass, and walking paths create some of the most balanced outdoor routes.',
    readMinutes: 4,
    image: images.noteRiverside,
    relatedPlaceIds: ['regents-canal-greens', 'thames-path-green-sections', 'walthamstow-wetlands-green-paths'],
    paragraphs: [
      'Riverside green spaces have a different feeling from classic parks. A park often invites you to stay in one area, while a riverside route naturally moves you forward. Water creates direction, and grass softens the route. Together, they make walking feel easier and more balanced.',
      'A good riverside green route usually includes three layers: the water edge, the walking path, and the green border. The water gives the view, the path gives movement, and the grass or trees create comfort. This combination is why many riverside walks feel relaxing even when they are located inside a busy city.',
      'Riverside greens are also flexible. You can walk for ten minutes or build a longer route. You can stop on a bench, follow the path to a bridge, or use the river as a natural guide. This makes them ideal for travelers who do not want to over-plan.',
      'For users who enjoy photography, riverside routes give reflections, open views, changing light, and strong composition lines. For users who want calm movement, they offer a simple rhythm: walk, pause, look at the water, continue.',
    ],
  },
  {
    id: 'picnic-friendly-places-without-chaos',
    title: 'Picnic-Friendly Places Without the Chaos',
    subtitle: 'How to identify open lawns, shaded edges, and comfortable resting areas.',
    readMinutes: 3,
    image: images.notePicnic,
    relatedPlaceIds: ['hyde-park-lawns', 'green-park', 'battersea-park-riverside-lawns'],
    paragraphs: [
      'A good picnic-friendly place is not always the biggest lawn. The best spot usually has balance: enough open grass, some shade nearby, comfortable access, and a calm surrounding area. If the location is too exposed, it can feel uncomfortable. If it is too crowded, it loses the relaxed atmosphere.',
      'When choosing a picnic area, look for the edge of the lawn rather than the center. The edge often gives better comfort because it is closer to trees, paths, shade, and quieter movement. It also gives a better view of the space without placing you directly in the busiest part.',
      'Soft grass matters, but so does the surrounding rhythm. A location near a walking path can feel lively, while a place near a garden or water edge can feel calmer. If the goal is rest, avoid areas near major entrances, sports zones, or very narrow paths.',
      'For a travel app, picnic-friendly locations should be described clearly. Users need to know whether the place feels open, shaded, scenic, central, or peaceful. "Good for picnic" should not mean random grass. It should mean the place actually supports a comfortable pause.',
    ],
  },
  {
    id: 'reading-a-park-like-a-traveler',
    title: 'Reading a Park Like a Traveler',
    subtitle: 'Look at paths, trees, lawns, water, and edges to understand the character of a green space.',
    readMinutes: 4,
    image: images.noteReadingPark,
    relatedPlaceIds: ['st-james-park', 'holland-park-quiet-walks', 'victoria-embankment-gardens'],
    paragraphs: [
      'Every park has a character. Some parks feel open and social. Some feel quiet and enclosed. Some are designed around gardens, while others are built around views, water, or large lawns. Learning to read a park helps travelers choose the right location for the right mood.',
      'Start with the paths. Straight paths usually feel formal and direct. Curved paths feel softer and more exploratory. Narrow paths create intimacy, while wide paths are better for casual walking and easier navigation.',
      'Next, look at the trees. Dense tree areas create shade and privacy. Open tree lines frame views and make grass areas feel more spacious. Old trees often give a park a stronger identity because they add scale and visual depth.',
      'Lawns show how the space is meant to be used. A wide lawn invites rest, picnics, and open-air pauses. Smaller lawns feel more decorative. Water adds movement and reflection. Garden beds add detail and color. Benches, edges, and quiet corners show where the park slows down.',
      'A traveler should not only ask, "Is this place beautiful?" The better question is, "What kind of outdoor rhythm does this place create?"',
    ],
  },
  {
    id: 'urban-nature-without-leaving-city',
    title: 'Urban Nature Without Leaving the City',
    subtitle: 'How small gardens and quiet parks can change the rhythm of a travel day.',
    readMinutes: 3,
    image: images.noteUrbanNature,
    relatedPlaceIds: ['victoria-embankment-gardens', 'green-park', 'kyoto-garden'],
    paragraphs: [
      'Urban nature does not need to be huge to be valuable. A small garden, shaded square, green river edge, or quiet lawn can completely change the rhythm of a travel day. These places create breathing space between architecture, streets, transport, restaurants, and busy city routes.',
      'Large parks are impressive, but small green spaces are often easier to use. They work well as short pauses, map anchors, and soft transitions between city activities. A traveler can spend ten minutes in a garden and feel the route becoming less rushed.',
      'The best urban green spaces usually offer contrast. They are close to the city but feel slightly removed from it. They may have trees, benches, flowers, grass, or water, but their real value is atmosphere. They give users a simple moment to slow down.',
      'For Grassvenor Green Routes, these places are important because they make the app useful during real travel. Not every user has time for a long park visit. Sometimes the best recommendation is a quiet garden close to where they already are.',
    ],
  },
  {
    id: 'building-your-personal-green-atlas',
    title: 'Building Your Personal Green Atlas',
    subtitle: 'Save places by mood, season, and route style to make future walks easier.',
    readMinutes: 4,
    image: images.noteAtlas,
    relatedPlaceIds: ['richmond-park-grasslands', 'chelsea-physic-garden', 'regents-canal-greens'],
    paragraphs: [
      'A personal green atlas is more than a saved list. It is a small collection of outdoor places that match different moods and travel situations. Some places are best for morning walks. Some are better for photos. Some work for quiet breaks, and others are better for longer routes.',
      'When saving locations, think in categories. Save open grasslands for relaxed outdoor time. Save botanical gardens for detail and seasonal beauty. Save quiet parks for short pauses. Save riverside greens for movement and longer walks.',
      'It also helps to save places by season. A garden may be strongest in spring. A shaded park may be better in summer. An open hill may feel best in autumn light. A riverside path may become more atmospheric in cool weather.',
      'The goal is not to collect every place. The goal is to build a useful travel memory. A clean saved list helps users return to the right green space at the right time without searching again.',
      'For future visits, the personal atlas becomes a calm planning tool: less noise, fewer random choices, better routes.',
    ],
  },
  {
    id: 'why-open-lawns-feel-relaxing',
    title: 'Why Open Lawns Feel So Relaxing',
    subtitle: 'The quiet power of space, grass, distance, and simple outdoor views.',
    readMinutes: 3,
    image: images.noteLawns,
    relatedPlaceIds: ['hyde-park-lawns', 'primrose-hill', 'richmond-park-grasslands'],
    paragraphs: [
      'Open lawns feel relaxing because they create visual space. In a city, most views are broken by buildings, signs, traffic, doors, and walls. A lawn removes much of that visual pressure. It gives the eyes distance, the body room, and the mind a simpler scene to process.',
      'Grass also softens the environment. Even when the city is close, a wide green surface changes the mood of the area. It reduces the feeling of hard pavement and makes the route feel slower. This is why lawns are often used for resting, reading, walking, and casual outdoor meetings.',
      'The best open lawns are not empty in a boring way. They usually have edges: trees, paths, garden beds, water, or skyline views. These edges create structure while the center remains calm and open.',
      'For travel planning, open lawns are useful because they are flexible. They do not demand a specific activity. A user can walk, sit, take photos, meet someone, or simply pass through. That flexibility is their strength.',
    ],
  },
  {
    id: 'how-to-plan-calm-nature-day',
    title: 'How to Plan a Calm Nature Day',
    subtitle: 'A simple travel rhythm built around one park, one garden, and one quiet route.',
    readMinutes: 4,
    image: images.noteNatureDay,
    relatedPlaceIds: ['kew-gardens-palm-house', 'regents-canal-greens', 'st-james-park'],
    paragraphs: [
      'A calm nature day does not need a complicated schedule. The strongest plan is often built around three parts: one open green space, one detailed botanical stop, and one gentle walking route. This gives the day variety without making it feel overloaded.',
      'Start with an open park or lawn in the morning. This creates space and sets a slower pace. A wide green area is easier to enjoy early in the day because it feels fresh and less crowded.',
      'Next, choose a garden or botanical corner. This adds detail to the route. After the openness of a park, a garden gives structure, color, texture, and small discoveries. It makes the day feel more intentional.',
      'Finish with a riverside or shaded walking route. This gives movement without pressure. A route beside water or through tree-lined paths helps the day end naturally.',
      'The key is not to fill every hour. A nature-focused travel day works best when there is room between places. The empty space is not wasted. It is the whole point.',
    ],
  },
];

export const noteById = Object.fromEntries(notes.map(note => [note.id, note])) as Record<string, NatureNote>;
