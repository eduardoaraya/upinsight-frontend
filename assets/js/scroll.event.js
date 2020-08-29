function debounce(callback, args, delay) {
  let timer = null;
  return () => {
    if (timer) {
      clearInterval(timer);
    }
    timer = setTimeout(() => {
      callback(...args);
      timer = null;
    }, delay);
  }
}
export default (callback, ...args) => {
  const handle = debounce(callback, args, 100);
  window.addEventListener('scroll', handle)
}