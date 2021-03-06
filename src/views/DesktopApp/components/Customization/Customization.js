import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  image: {
    boxShadow:
      '25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2)',
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
    },
  },
  lastGrid: {
    [theme.breakpoints.up('sm')]: {
      marginTop: '40%',
    },
  },
}));

const Customization = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader
        label=" NEW DAPP"
        title="Consolidated Product Lines"
        subtitle="We have integrated existing product lines seamlessly into a new dAPP that will focus around building features and functionality for Uniswap V3."
        align="center"
        ctaGroup={[
          <Button variant="contained" color="primary" size="large" href="https://app.zoracles.com/">
            Start now
          </Button>,
          <Button variant="outlined" color="primary" size="large" href="https://zoracles.medium.com/">
            Learn more
          </Button>,
        ]}
      />
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} sm={6}>
          <Grid container alignItems="center">
            <Image
              src="/images/1.png"
              alt="TheFront Company"
              className={classes.image}
              data-aos="fade-up"
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid
            container
            alignItems="center"
            className={classes.lastGrid}
          >
            <Image
              src="/images/3.png"
              alt="TheFront Company"
              className={classes.image}
              data-aos="fade-up"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Customization.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Customization;
