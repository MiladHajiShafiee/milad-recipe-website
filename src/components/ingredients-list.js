import React from 'react';

import GridList from '@material-ui/core/GridList';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '86%',
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
        margin: '2rem auto',
        borderRadius: '5px',
        justifyContent: 'space-around',
        boxShadow: '0px 0px 10px 2px gray',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));

export default function IngredientsList({ ingredients }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList
                className={classes.gridList}
                cols={window.innerWidth > 500 ? 3.2 : 1.5}
            >
                {ingredients.map((tile, indx) => (
                    <GridListTile key={indx}>
                        <img src={tile.image} alt={tile.text} />
                        <GridListTileBar
                            title={tile.text}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
