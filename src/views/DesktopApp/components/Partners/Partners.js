import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import { LearnMoreLink, Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { CardBase } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  logo: {
    maxWidth: 50,
  },
}));

const Partners = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <SectionHeader
            title="We strive to collaborate and expand our reach"
            subtitle="Our team is focused on partnerships and outreach to the crypto community. We believe our platform will be valuable to liquidity providers across the DeFi ecosystem."
            align="left"
            label="PRESS"
            // ctaGroup={[
            //   <LearnMoreLink
            //     title="See all integrations"
            //     href="#"
            //     variant="h6"
            //   />,
            // ]}
            disableGutter
          />
        </Grid>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <Grid container spacing={2}>
            {data.map((item, index) => (
              <Grid item xs={4} key={index}>
                <a href={item.link} target="_blank">
                  <CardBase withShadow liftUp>
                    <Image
                      src={item.logo}
                      alt={item.name}
                      className={classes.logo}
                      lazy={false}
                    />
                  </CardBase>
                </a>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Partners.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Partners;
