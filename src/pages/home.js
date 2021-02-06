import React, { useState } from 'react';

import axios from 'axios';

import Grid from '@material-ui/core/Grid';

import './home.css';
import Header from '../components/header';
import Loading from '../components/loading';
import Landing from '../components/landing';
import RecipesList from '../components/recipes-list';

const { REACT_APP_ID, REACT_APP_KEY } = process.env;

function Home() {
    const [term, setTerm] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showLanding, setShowLanding] = useState(true);

    const getRecipes = async () => {
        const { data } = await axios.get(
            `https://api.edamam.com/search?q=${term}&app_id=${REACT_APP_ID}&app_key=${REACT_APP_KEY}`
        );
        setRecipes(data.hits);
        setLoading(false);
    };

    const searchTermHandler = (term) => {
        setTerm(term);
    };

    const searchHandler = () => {
        if (term !== '') {
            setShowLanding(false);
            setLoading(true);
            getRecipes();
        } else {
            alert('Please write sth in the search bar');
        }
    };

    const reset = () => {
        setTerm('');
        setRecipes([]);
        setLoading(false);
        setShowLanding(true);
    };

    return (
        <div style={{ overflowY: showLanding ? 'unset' : 'scroll' }}>
            <Header
                term={term}
                reset={reset}
                searchForRecipe={searchHandler}
                searchTermHandler={searchTermHandler}
            />
            <Grid container direction='column'>
                {showLanding ? (
                    <Landing />
                ) : loading ? (
                    <Loading />
                ) : (
                    <RecipesList recipes={recipes} />
                )}
            </Grid>
        </div>
    );
}

export default Home;
