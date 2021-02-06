import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Header from '../components/header';
import IngredientsList from '../components/ingredients-list';
import { styles, useRecipeDetailsStyels } from './recipe-details-styles';

const RecipeDetails = (props) => {
    const {
        history,
        location: {
            params: { recipe },
        },
    } = props;
    const classes = useRecipeDetailsStyels();

    const goHome = () => {
        history.push('/');
    };

    return (
        <div style={styles.screen}>
            <Header details reset={goHome} />
            <Grid container direction='column' style={styles.container}>
                <Typography style={styles.label}>{recipe.label}</Typography>
                <Grid
                    item
                    container
                    direction='row'
                    className={classes.imgContainer}
                >
                    <img
                        alt={recipe.label}
                        src={recipe.image}
                        className={classes.recipeImage}
                    />
                    <ul style={styles.ingList}>
                        {recipe.ingredientLines.map((ing, indx) => (
                            <Typography key={indx} style={styles.ingText}>
                                <span style={{ color: 'red' }}>{1 + indx}</span>{' '}
                                - {ing}
                            </Typography>
                        ))}
                    </ul>
                </Grid>
                <IngredientsList ingredients={recipe.ingredients} />
            </Grid>
        </div>
    );
};

export default RecipeDetails;
