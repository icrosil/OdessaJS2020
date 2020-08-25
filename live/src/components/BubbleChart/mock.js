function getRandomFromTo(from, to) {
  return Math.ceil(Math.random() * (to - from) + from);
}

export function generateData(width = 200, height = 200, size = 15) {
  return Array(size)
    .fill(0)
    .map((_, index) => ({
      y: getRandomFromTo(0, height),
      x: getRandomFromTo(0, width),
      r: getRandomFromTo(10, 30),
      name: `random_${index}`,
      pattern: getRandomFromTo(0, 4),
    }));
}
