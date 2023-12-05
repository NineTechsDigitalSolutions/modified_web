import {
  post1,
  post2,
  book1,
  book2,
  book10,
  book11,
  book3,
  book4,
  book5,
  book6,
  book7,
  book8,
  book9,
  book12,
} from './assets';

const testimonials = [
  {
    id: 1,
    name: 'Anuradha Jayasinghe,',
    comment:
      'One of the most useful app for our Sri Lankan community, specially for kids in rural areas.',
  },
  {
    id: 2,
    name: 'Nimal Athapaththu, ',
    comment:
      'Easy access to a vast knowledge. Definitely a remarkable turning point for Sinhala audiance. ',
  },
  {
    id: 3,
    name: 'Rajini Gamage',
    comment:
      'Cost effective product for the current situation. ',
  },
];

const posts = [
  {
    id: 1,
    title: 'මළවුන්ගේ අවුරුදු දා - මහාචාර්ය එදිරිවීර සරත්චන්ද්‍',
    des: 'නොරිකො සං - මං නුඹේ ම දෙවෙන්දොරා සං ඉක්මණින්ම නැවත එතොත් මළවුන්ගේ අවුරුදු දා නොවැරදීම නුඹ බලන්න මං එනවාමයි නොරිකො සං...',
    published_by: 'Nuleeka Rajakaruna',
    date: 'Nov 14, 2022 - 2min',
    img: post1,
  },
  {
    id: 2,
    title: 'කල්ලන්දූවේ මුතු කොල්ලය',
    des: 'කුලසේන ෆොන්සේකා " බ්‍රිතාන්‍ය සිටු කුමාරයෙක් විවාහ ගිවිසගෙන හිටියලු ලස්සන කුමාරිකාවක් එක්ක. මේ කුමාරය හිතා ගත්තලු කරකාර බඳින දවසේ...',
    published_by: 'Nuleeka Rajakaruna',
    date: 'Nov 14, 2022 - 2min',
    img: post2,
  },
];

const books = [
  {
    id: 1,
    img: book1,
  },
  { id: 2, img: book2 },
  { id: 3, img: book3 },
  { id: 4, img: book4 },
  { id: 5, img: book5 },
  { id: 6, img: book6 },
  { id: 7, img: book7 },
  { id: 8, img: book8 },
  { id: 9, img: book9 },
  { id: 10, img: book10 },
  { id: 11, img: book11 },
  { id: 12, img: book12 },
];
export { posts, testimonials, books };
