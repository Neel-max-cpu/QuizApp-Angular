// Interfaces
export interface Category {
  id: number;
  name: string;
}

export interface CategoryGroup {
  groupName: string;
  categories: Category[];
}

// Grouped Data
export const groupedCategories: CategoryGroup[] = [
  {
    groupName: 'Entertainment',
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
    categories: [
      { id: 17, name: 'Science & Nature' },
      { id: 18, name: 'Computers' },
      { id: 19, name: 'Mathematics' },
      { id: 30, name: 'Gadgets' },
    ],
  },
  {
    groupName: 'General',
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
