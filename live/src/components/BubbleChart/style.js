import { makeStyles } from '@material-ui/styles';

export const palette = [
  { color: '#dee4e3', border: '#d9dfde' },
  { color: '#c5f0eb', border: '#a8e7df' },
  { color: '#a3e7df', border: '#74dbcf' },
  { color: '#6addd0', border: '#69d5c8' },
  { color: '#30c3b2', border: '#15b29f' },
];

export const useBubbleStyles = makeStyles({
  bubble: {
    cursor: 'pointer',
  },
  text: {
    textTransform: 'uppercase',
    color: 'white',
    fontFamily: 'Oswald',
    fontSize: 10,
    transform: 'translate(0, 5px)',
    wordBreak: 'break-all',
    cursor: 'pointer',
  },
});
