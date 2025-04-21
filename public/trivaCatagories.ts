
// api example --- 
// amount = number of questions. category = id of the type, difficulty = easy/medium/hard, and type=multiple/boolean
// https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean

// Interfaces
export interface Category {
  id: number;
  name: string;
  imgSrc: string;
}

export interface CategoryGroup {
  groupName: string;
  description: string;
  categories: Category[];
}

// Grouped Data
export const groupedCategories: CategoryGroup[] = [
  {
    groupName: 'Entertainment',
    description: "Dive into a variety of fun quizzes covering books, films, music, anime, and more from the world of entertainment.",
    categories: [
      { id: 10, name: 'Books', imgSrc:"/images/Entertainment/10.jpg" },
      { id: 11, name: 'Film', imgSrc:"/images/Entertainment/" },
      { id: 12, name: 'Music', imgSrc:"/images/Entertainment/" },
      { id: 13, name: 'Musicals & Theatres', imgSrc:"/images/Entertainment/" },
      { id: 14, name: 'Television', imgSrc:"/images/Entertainment/" },
      { id: 15, name: 'Video Games', imgSrc:"/images/Entertainment/" },
      { id: 16, name: 'Board Games' , imgSrc:"/images/Entertainment/"},
      { id: 29, name: 'Comics', imgSrc:"/images/Entertainment/" },
      { id: 31, name: 'Japanese Anime & Manga', imgSrc:"/images/Entertainment/" },
      { id: 32, name: 'Cartoon & Animations', imgSrc:"/images/Entertainment/" },
    ],
  },
  {
    groupName: 'Science',
    description: "Test your knowledge across various science topics including computers, mathematics, nature, and modern gadgets.",
    categories: [
      { id: 17, name: 'Science & Nature', imgSrc:"/images/Science/" },
      { id: 18, name: 'Computers', imgSrc:"/images/Science/" },
      { id: 19, name: 'Mathematics', imgSrc:"/images/Science/" },
      { id: 30, name: 'Gadgets', imgSrc:"/images/Science/" },
    ],
  },
  {
    groupName: 'General',
    description: "Challenge yourself with quizzes on a wide range of topics including history, geography, sports, mythology, and more.",
    categories: [
      { id: 9, name: 'General Knowledge', imgSrc:"/images/General/" },
      { id: 20, name: 'Mythology', imgSrc:"/images/General/" },
      { id: 21, name: 'Sports', imgSrc:"/images/General/" },
      { id: 22, name: 'Geography', imgSrc:"/images/General/" },
      { id: 23, name: 'History',  imgSrc:"/images/General/"},
      { id: 24, name: 'Politics', imgSrc:"/images/General/" },
      { id: 25, name: 'Art', imgSrc:"/images/General/" },
      { id: 26, name: 'Celebrities', imgSrc:"/images/General/" },
      { id: 27, name: 'Animals', imgSrc:"/images/General/" },
      { id: 28, name: 'Vehicles', imgSrc:"/images/General/" },
    ],
  },
];
