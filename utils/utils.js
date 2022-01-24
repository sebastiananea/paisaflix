export const toHsandMins = (x) => {
  const hours = Math.floor(x / 60);
  const minutes = x % 60;
  let duration = minutes > 0 ? `${hours} hr ${minutes} mins` : `${hours} hr `;
  return duration;
};

export const viewsToK = (x) => {
  const views = x / 1000;
  return `${views}K views`;
};
