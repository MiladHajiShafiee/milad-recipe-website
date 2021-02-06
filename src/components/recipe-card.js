import React from 'react';

import { useHistory } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles({
    root: {
        margin: '20px',
        maxWidth: 300,
        boxShadow: '0px 0px 15px 3px #9E9E9E',
    },
    media: {
        height: 200,
    },
});

export default function RecipeCard({ recipe }) {
    const classes = useStyles();
    const history = useHistory();

    const goRecipeDetails = () => {
        history.push({
            params: { recipe },
            pathname: '/RecipeDetails',
        });
    };

    return (
        <Card className={classes.root}>
            <CardActionArea onClick={goRecipeDetails}>
                <CardMedia
                    title={recipe.label}
                    image={recipe.image}
                    className={classes.media}
                />
                <CardContent>
                    <Typography variant='h6' component='h5'>
                        {recipe.label}
                    </Typography>
                    <Typography
                        component='p'
                        variant='body2'
                        color='textSecondary'
                    >
                        {recipe.label} is one the most deliceous foods and it
                        worths to be tried once I suggest you to have a
                        fantastic meal with this tasty food.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
