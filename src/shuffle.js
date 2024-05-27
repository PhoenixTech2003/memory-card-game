function shuffleArray(arr) {
  let shuffled =   arr.sort(function (a, b) {
      return Math.random() - 0.5;
    });

    return shuffled;
    }

export default shuffleArray;