//  source: https://bost.ocks.org/mike/shuffle/
//  info: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle

export const shuffle = (arr) => {
  let currentIndex = arr.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }
  return arr;
};
