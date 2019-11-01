import React from 'react';
import clsx from 'clsx';
import useLocalStorage from './use-local-storage';

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: 10,
    paddingBottom: 20,
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    minWidth: 200,
    width: 300,
  },
}));

export default function Content() {
  const [platinum, setPlatinum] = useLocalStorage('platinum', 0);
  const [gold, setGold] = useLocalStorage('gold', 0);
  const [electrum, setElectrum] = useLocalStorage('electrum', 0);
  const [silver, setSilver] = useLocalStorage('silver', 0);
  const [copper, setCopper] = useLocalStorage('copper', 0);
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h5" component="h3">
            Simple money sheet
          </Typography>
        </Grid>
        <Grid item>
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" min="0">
            <OutlinedInput
              id="platinumInput"
              type="number"
              value={platinum}
              onChange={e => setPlatinum(e.target.value)}
              endAdornment={<InputAdornment position="end">Platinum</InputAdornment>}
              aria-describedby="platinum"
              inputProps={{
                'aria-label': 'platinum',
              }}
            />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
            <OutlinedInput
              id="goldInput"
              type="number"
              value={gold}
              onChange={e => setGold(e.target.value)}
              endAdornment={<InputAdornment position="end">Gold</InputAdornment>}
              aria-describedby="gold"
              inputProps={{
                'aria-label': 'gold',
              }}
            />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
            <OutlinedInput
              id="electrumInput"
              type="number"
              value={electrum}
              onChange={e => setElectrum(e.target.value)}
              endAdornment={<InputAdornment position="end">Electrum</InputAdornment>}
              aria-describedby="electrum"
              inputProps={{
                'aria-label': 'electrum',
              }}
            />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
            <OutlinedInput
              id="silverInput"
              type="number"
              value={silver}
              onChange={e => setSilver(e.target.value)}
              endAdornment={<InputAdornment position="end">Silver</InputAdornment>}
              aria-describedby="silver"
              inputProps={{
                'aria-label': 'silver',
              }}
            />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
            <OutlinedInput
              id="copperInput"
              type="number"
              value={copper}
              onChange={e => setCopper(e.target.value)}
              endAdornment={<InputAdornment position="end">Copper</InputAdornment>}
              aria-describedby="copper"
              inputProps={{
                'aria-label': 'copper',
              }}
            />
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
}
