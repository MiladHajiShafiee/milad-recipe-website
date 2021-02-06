import React from 'react';

import Grid from '@material-ui/core/Grid';

import RecipeCard from './recipe-card';

const RecipesList = ({ recipes }) => {
    return (
        <Grid container justify='center' style={{ paddingTop: '5rem' }}>
            {recipes.map(({ recipe }, indx) => {
                return <RecipeCard recipe={recipe} key={indx} />;
            })}
        </Grid>
    );
};

export default RecipesList;
