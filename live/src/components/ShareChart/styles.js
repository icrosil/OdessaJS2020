import { createStyles, makeStyles } from '@material-ui/styles';

export const groupColors = ['#17c3af', '#F00576', '#0C7CD3', '#8B14B0', '#0A5A73'];

export default makeStyles(() =>
  createStyles({
    container: {
      display: 'inline-block',
      position: 'relative',
      width: '100%',
      verticalAlign: 'top',
      overflow: 'hidden',
    },
    content: {
      display: 'inline-block',
      position: 'absolute',
      top: 0,
      left: 0,
    },
    ribbon: {
      opacity: 0.1,
      transition: 'opacity 0.1s',
    },
    ribbonActive: {
      opacity: 1,
    },
  }),
);
