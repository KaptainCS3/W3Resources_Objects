const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

for (let index of library) {
  console.log(
    `${
      index.readingStatus
        ? "Already read"
        : `You still need to read`
    } "${index.title ? `${index.title}` : ""}" by ${index.author}`
  );
}
