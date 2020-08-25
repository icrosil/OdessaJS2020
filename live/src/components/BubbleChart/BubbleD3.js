import { forceSimulation, forceCollide, forceX, forceY } from 'd3-force';

export const calculateLayout = (items, spacing = 7) => {
  // Calculate a force directed placement for each point
  const MAX_STEPS = 300;
  const STRENGTH = 10;
  const ALPHA = 0.3;

  if (!items.length) return [];
  const copyItems = items.map(item => ({ ...item }));

  const getY = d => d.y;
  const getX = d => d.x;
  const getCollision = d => d.r + spacing;

  const sim = forceSimulation(copyItems)
    .force('collide', forceCollide(getCollision))
    .force('x', forceX(getX).strength(STRENGTH))
    .force('y', forceY(getY).strength(STRENGTH))
    .alpha(ALPHA)
    .stop();

  const upperBound = Math.ceil(Math.log(sim.alphaMin()) / Math.log(1 - sim.alphaDecay()));

  Array(Math.min(MAX_STEPS, upperBound))
    .fill(null)
    .forEach(() => sim.tick());

  return copyItems.map(item => ({ ...item, x: Math.ceil(item.x) }));
};
