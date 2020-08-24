export const yScale = (yValue, { height }) => {
  const maxDomain = Math.max(...yValues);
  const minDomain = Math.min(...yValues);

  return scaleLinear()
    .domain([minDomain, maxDomain])
    .range([0, height]);
};

export const xScale = (xValue, { width }) => {
  const maxDomain = Math.max(...xValues);
  const minDomain = Math.min(...xValues);

  return scaleTime()
    .domain([minDomain, maxDomain])
    .range([0, width]);
};
