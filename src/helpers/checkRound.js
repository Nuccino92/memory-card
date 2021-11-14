export const checkRound = (round, score) => {
  if (round === 0 && score === 4) {
    return true;
  }
  if (round === 1 && score === 10) {
    return true;
  }
  if (round === 2 && score === 18) {
    return true;
  }
  if (round === 3 && score === 28) {
    return true;
  }
  if (round === 4 && score === 40) {
    return true;
  }
  if (round === 5 && score === 54) {
    return true;
  }
  if (round === 6 && score === 70) {
    return true;
  }
  if (round === 7 && score === 88) {
    return true;
  }
  return false;
};
