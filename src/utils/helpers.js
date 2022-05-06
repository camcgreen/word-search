export const convertTime = (seconds) => {
  let sec = seconds % 60;
  let min = parseInt(seconds / 60);
  if (sec.toString().length == 1) {
    sec = '0' + sec;
  }
  return min + ':' + sec;
};

export const onInactive = (ms, cb) => {
  let wait = setTimeout(cb, ms);
  document.onmousemove =
    document.mousedown =
    document.mouseup =
    document.onkeydown =
    document.onkeyup =
    document.focus =
      function () {
        clearTimeout(wait);
        wait = setTimeout(cb, ms);
      };
};
