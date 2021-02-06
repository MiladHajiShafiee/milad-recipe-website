import React from 'react';

import Typography from '@material-ui/core/Typography';

import { styles, useLandingStyles } from './landing-styles';

export default function Landing() {
    const classes = useLandingStyles();

    const goSpoonacular = () => {
        window.open('https://spoonacular.com/', '_blank');
    };

    return (
        <div style={styles.screen}>
            <div style={styles.glassish}>
                <Typography style={styles.text} className={classes.text}>
                    This is my website for searching in recipes, I used
                    <span style={styles.spoonacular} onClick={goSpoonacular}>
                        {' '}
                        "Spoonacular"
                    </span>{' '}
                    API in this webpage. <br />
                    <span style={{ color: 'red' }}>Notice</span> : You can just
                    search for 10 recipes per minute due to API limitation, if
                    you got limitation error please wait a minute and then try
                    again.
                </Typography>
            </div>
        </div>
    );
}
