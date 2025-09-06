// src\data\animeData.ts
export interface Anime {
  id: string;
  title: string;
  image: string;
  rating: number;
  episodes: number;
  status: string;
  genre: string;
  description: string;
  year?: number;
  studio?: string;
}

export const featuredAnime: Anime[] = [
   
  {
    id: 'featured-1',
    title: 'My Dress-Up Darling Season 2',
    description: 'The second season of Sono Bisque Doll wa Koi wo Suru. When Marin Kitagawa and Wakana Gojo met, they grew close over their love for cosplay. Through interacting with classmates and making new cosplay friends, Marin and Wakana’s world keeps growing. New developments arise as Marin’s love for Wakana continues to be filled with endless excitement. In their ever-expanding world, Marin and Wakana’s story of cosplay and thrills continues!',
    image: 'https://cdn.noitatnemucod.net/thumbnail/1366x768/100/efe80a55370f96edc544fb3d16c4b16f.jpg',
    rating: 9.8,
    episodes: 10,
    status: 'Currently Airing',
    genre: 'Comedy, Romance, Slice of Life',
    year: 2025,
    studio: 'Studio WIT'
  },
  {
    id: 'featured-2',
    title: 'The Rising of the Shield Hero Season 4',
    description: "The Four Cardinal Heroes are a group of ordinary men from modern-day Japan summoned to the kingdom of Melromarc to become its saviors. Melromarc is a country plagued by the Waves of Catastrophe that have repeatedly ravaged the land and brought disaster to its citizens for centuries. The four heroes are respectively bestowed a sword, spear, bow, and shield to vanquish these Waves. Naofumi Iwatani, an otaku, becomes cursed with the fate of being the Shield Hero. Armed with only a measly shield, Naofumi is belittled and ridiculed by his fellow heroes and the kingdom's people due to his weak offensive capabilities and lackluster personality. When the heroes are provided with resources and comrades to train with, Naofumi sets out with the only person willing to train alongside him, Malty Melromarc. He is soon betrayed by her, however, and becomes falsely accused of taking advantage of her. Naofumi then becomes heavily discriminated against and hated by the people of Melromarc for something he didn't do. With a raging storm of hurt and mistrust in his heart, Naofumi begins his journey of strengthening himself and his reputation. Further along however, the difficulty of being on his own sets in, so Naofumi buys a demi-human slave on the verge of death named Raphtalia to accompany him on his travels. As the Waves approach the kingdom, Naofumi and Raphtalia must fight for the survival of the kingdom and protect the people of Melromarc from their ill-fated future.",
    image: 'https://cdn.noitatnemucod.net/thumbnail/1366x768/100/9f8713514ab999b515c4a96eeae87e20.jpg',
    rating: 8.9,
    episodes: 12,
    status: 'Currently Airing',
    genre: 'Action, Dark Fantasy, Drama',
    year: 2025,
    studio: 'MAPPA'
  },
 
];

export const trendingAnimes: Anime[] = [
  {
    id: '1',
    title: 'Demon Slayer',
    image: 'https://cdn.noitatnemucod.net/thumbnail/300x400/100/30df93feaa422101659e14d0a2a2f582.jpg',
    rating: 8.7,
    episodes: 44,
    status: 'Completed',
    genre: 'Action',
    description: 'A young boy becomes a demon slayer to save his sister and avenge his family.',
    year: 2019,
    studio: 'Ufotable'
  },
  {
    id: '2',
    title: 'Your Name',
    image: 'https://cdn.noitatnemucod.net/thumbnail/300x400/100/16eec56baf8f3fcc6430607f58ce3d12.jpg',
    rating: 8.4,
    episodes: 1,
    status: 'Completed',
    genre: 'Romance',
    description: 'Two teenagers share a profound, magical connection upon discovering they are swapping bodies.',
    year: 2016,
    studio: 'CoMix Wave Films'
  },
  {
    id: '3',
    title: 'My Hero Academia',
    image: 'https://cdn.noitatnemucod.net/thumbnail/300x400/100/d1ae1f3d3324e24dfdfa64e4c2e687f8.jpg',
    rating: 8.5,
    episodes: 138,
    status: 'Ongoing',
    genre: 'Action',
    description: 'In a world where superpowers are the norm, a powerless boy dreams of becoming a hero.',
    year: 2016,
    studio: 'Studio Bones'
  },
  {
    id: '4',
    title: 'Spirited Away',
    image: 'https://cdn.noitatnemucod.net/thumbnail/300x400/100/1d226c74f7248dda6aac32d8f915b8f1.jpg',
    rating: 9.3,
    episodes: 1,
    status: 'Completed',
    genre: 'Fantasy',
    description: 'A girl enters a magical world and must work to free herself and her parents.',
    year: 2001,
    studio: 'Studio Ghibli'
  },
  {
    id: '5',
    title: 'One Piece',
    image: 'https://cdn.noitatnemucod.net/thumbnail/300x400/100/bcd84731a3eda4f4a306250769675065.jpg',
    rating: 9.0,
    episodes: 1000,
    status: 'Ongoing',
    genre: 'Adventure',
    description: 'Follow Luffy and his crew as they search for the ultimate treasure, One Piece.',
    year: 1999,
    studio: 'Toei Animation'
  },
  {
    id: '6',
    title: 'Naruto',
    image: 'https://cdn.noitatnemucod.net/thumbnail/300x400/100/9cbcf87f54194742e7686119089478f8.jpg',
    rating: 8.3,
    episodes: 500,
    status: 'Completed',
    genre: 'Action',
    description: 'A young ninja seeks recognition and dreams of becoming the Hokage.',
    year: 2002,
    studio: 'Pierrot'
  }
];

export const newReleases: Anime[] = [
  {
    id: '7',
    title: 'Jujutsu Kaisen',
    image: 'https://cdn.noitatnemucod.net/thumbnail/300x400/100/82402f796b7d84d7071ab1e03ff7747a.jpg',
    rating: 8.6,
    episodes: 24,
    status: 'Ongoing',
    genre: 'Action',
    description: 'A high school student joins a secret organization of Jujutsu Sorcerers.',
    year: 2020,
    studio: 'Studio MAPPA'
  },
  {
    id: '8',
    title: 'Chainsaw Man',
    image: 'https://cdn.noitatnemucod.net/thumbnail/300x400/100/b3da1326e07269ddd8d73475c5dabf2c.jpg',
    rating: 8.8,
    episodes: 12,
    status: 'Completed',
    genre: 'Action',
    description: 'A young man with a chainsaw devil must hunt other devils for money.',
    year: 2022,
    studio: 'Studio MAPPA'
  },
  {
    id: '9',
    title: 'Spy x Family',
    image: 'https://cdn.noitatnemucod.net/thumbnail/300x400/100/88bd17534dc4884f23027035d23d74e5.jpg',
    rating: 8.9,
    episodes: 25,
    status: 'Ongoing',
    genre: 'Comedy',
    description: 'A spy, an assassin, and a telepath form an unusual fake family.',
    year: 2022,
    studio: 'Studio WIT'
  },
  {
    id: '10',
    title: 'Mob Psycho 100',
    image: 'https://cdn.noitatnemucod.net/thumbnail/300x400/100/3f20ed9108a583429fd687f986a617e0.jpg',
    rating: 8.7,
    episodes: 37,
    status: 'Completed',
    genre: 'Action',
    description: 'A psychic middle schooler tries to live a normal life.',
    year: 2016,
    studio: 'Studio Bones'
  },
  {
    id: '11',
    title: 'Tokyo Ghoul',
    image: 'https://cdn.noitatnemucod.net/thumbnail/300x400/100/a6ffd8294e7a5d540d7c462e94400189.jpg',
    rating: 7.8,
    episodes: 48,
    status: 'Completed',
    genre: 'Horror',
    description: 'A college student becomes a half-ghoul and must navigate two worlds.',
    year: 2014,
    studio: 'Pierrot'
  },
  {
    id: '12',
    title: 'Death Note',
    image: 'https://cdn.noitatnemucod.net/thumbnail/300x400/100/5e61f3e7c0045e46b670d31a5bb39c68.jpg',
    rating: 9.0,
    episodes: 37,
    status: 'Completed',
    genre: 'Thriller',
    description: 'A high school student discovers a supernatural notebook that kills anyone whose name is written in it.',
    year: 2006,
    studio: 'Madhouse'
  }
];