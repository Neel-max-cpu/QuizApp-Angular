// Interfaces
export interface Category {
  id: number;
  name: string;
  imgSrc: string;
  desc: string;
}

export interface CategoryGroup {
  groupName: string;
  imgSrc: string;
  description: string;
  categories: Category[];
}

// Grouped Data
export const groupedCategories: CategoryGroup[] = [
  {
    groupName: 'Entertainment',
    imgSrc: "/images/entImag.jpg",
    description:
      "Dive into a variety of fun quizzes covering books, films, music, anime, and more from the world of entertainment.",
    categories: [
      { id: 10, name: 'Books', imgSrc: "/images/Entertainment/10.jpg", desc: 'Test your knowledge of famous books, authors, and literary classics.' },
      { id: 11, name: 'Film', imgSrc: "/images/Entertainment/11.jpg", desc: 'Quiz yourself on iconic movies, directors, and cinematic moments.' },
      { id: 12, name: 'Music', imgSrc: "/images/Entertainment/12.jpg", desc: 'Explore trivia on songs, artists, and music genres from all eras.' },
      { id: 13, name: 'Musicals & Theatres', imgSrc: "/images/Entertainment/13.jpg", desc: 'Challenge yourself with questions about stage plays, musicals, and theatre history.' },
      { id: 14, name: 'Television', imgSrc: "/images/Entertainment/14.jpg", desc: 'Recall TV shows, series, and unforgettable small-screen moments.' },
      { id: 15, name: 'Video Games', imgSrc: "/images/Entertainment/15.jpg", desc: 'Show off your gaming knowledge from classic to modern video games.' },
      { id: 16, name: 'Board Games', imgSrc: "/images/Entertainment/16.jpg", desc: 'Answer trivia about classic board games and tabletop favorites.' },
      { id: 29, name: 'Comics', imgSrc: "/images/Entertainment/29.jpg", desc: 'Delve into superheroes, comic books, and graphic novel trivia.' },
      { id: 31, name: 'Japanese Anime & Manga', imgSrc: "/images/Entertainment/31.jpg", desc: 'Test your expertise on anime series and manga stories from Japan.' },
      { id: 32, name: 'Cartoon & Animations', imgSrc: "/images/Entertainment/32.jpg", desc: 'Enjoy questions about animated movies, cartoons, and beloved characters.' },
    ],
  },
  {
    groupName: 'Science',
    imgSrc: "/images/spaceImg.jpg",
    description:
      "Test your knowledge across various science topics including computers, mathematics, nature, and modern gadgets.",
    categories: [
      { id: 17, name: 'Science & Nature', imgSrc: "/images/Science/17.jpeg", desc: 'Explore fascinating facts about nature, biology, physics, and chemistry.' },
      { id: 18, name: 'Computers', imgSrc: "/images/Science/18.jpg", desc: 'Answer questions on computer science, programming, and tech history.' },
      { id: 19, name: 'Mathematics', imgSrc: "/images/Science/19.jpg", desc: 'Challenge your brain with puzzles and trivia on numbers and math concepts.' },
      { id: 30, name: 'Gadgets', imgSrc: "/images/Science/30.jpg", desc: 'Test your knowledge of modern gadgets, devices, and technological innovations.' },
    ],
  },
  {
    groupName: 'General',
    imgSrc: "/images/genImg.jfif",
    description:
      "Challenge yourself with quizzes on a wide range of topics including history, geography, sports, mythology, and more.",
    categories: [
      { id: 9, name: 'General Knowledge', imgSrc: "/images/General/9.png", desc: 'Answer a mix of questions from various general knowledge topics.' },
      { id: 20, name: 'Mythology', imgSrc: "/images/General/20.jpg", desc: 'Dive into myths, gods, and legends from around the world.' },
      { id: 21, name: 'Sports', imgSrc: "/images/General/21.jpg", desc: 'Test your sports knowledge from football to the Olympics and beyond.' },
      { id: 22, name: 'Geography', imgSrc: "/images/General/22.jpg", desc: 'Explore trivia on countries, capitals, landmarks, and world geography.' },
      { id: 23, name: 'History', imgSrc: "/images/General/23.jfif", desc: 'Challenge yourself with historical events, leaders, and milestones.' },
      { id: 24, name: 'Politics', imgSrc: "/images/General/24.jpg", desc: 'Answer questions about political systems, leaders, and world affairs.' },
      { id: 25, name: 'Art', imgSrc: "/images/General/25.png", desc: 'Test your knowledge of famous paintings, artists, and art movements.' },
      { id: 26, name: 'Celebrities', imgSrc: "/images/General/26.jpg", desc: 'Recall facts about actors, musicians, and famous personalities.' },
      { id: 27, name: 'Animals', imgSrc: "/images/General/27.jpg", desc: 'Learn fun facts about animals, wildlife, and the natural world.' },
      { id: 28, name: 'Vehicles', imgSrc: "/images/General/28.jpg", desc: 'Explore trivia about cars, planes, ships, and other vehicles.' },
    ],
  },
];
