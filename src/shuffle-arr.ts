//fisher yates shuffle
const shuffle = (array: any[]) => {
  let currentIndex = array.length, randomIndex: number;

  while (currentIndex > 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
};
export default shuffle;