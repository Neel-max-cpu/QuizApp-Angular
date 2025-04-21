
// api example --- 
// amount = number of questions. category = id of the type, difficulty = easy/medium/hard, and type=multiple/boolean
// https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean

// Interfaces
export interface Category {
  id: number;
  name: string;
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
      { id: 10, name: 'Books' },
      { id: 11, name: 'Film' },
      { id: 12, name: 'Music' },
      { id: 13, name: 'Musicals & Theatres' },
      { id: 14, name: 'Television' },
      { id: 15, name: 'Video Games' },
      { id: 16, name: 'Board Games' },
      { id: 29, name: 'Comics' },
      { id: 31, name: 'Japanese Anime & Manga' },
      { id: 32, name: 'Cartoon & Animations' },
    ],
  },
  {
    groupName: 'Science',
    description: "Test your knowledge across various science topics including computers, mathematics, nature, and modern gadgets.",
    categories: [
      { id: 17, name: 'Science & Nature' },
      { id: 18, name: 'Computers' },
      { id: 19, name: 'Mathematics' },
      { id: 30, name: 'Gadgets' },
    ],
  },
  {
    groupName: 'General',
    description: "Challenge yourself with quizzes on a wide range of topics including history, geography, sports, mythology, and more.",
    categories: [
      { id: 9, name: 'General Knowledge' },
      { id: 20, name: 'Mythology' },
      { id: 21, name: 'Sports' },
      { id: 22, name: 'Geography' },
      { id: 23, name: 'History' },
      { id: 24, name: 'Politics' },
      { id: 25, name: 'Art' },
      { id: 26, name: 'Celebrities' },
      { id: 27, name: 'Animals' },
      { id: 28, name: 'Vehicles' },
    ],
  },
];
