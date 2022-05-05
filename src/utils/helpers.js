export const convertTime = (seconds) => {
  let sec = seconds % 60;
  let min = parseInt(seconds / 60);
  if (sec.toString().length == 1) {
    sec = '0' + sec;
  }
  return min + ':' + sec;
};
