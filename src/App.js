import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/home';
import RecipeDetails from './pages/recipe-details';

export default function App() {
    return (
        <Router>
            <Route exact path='/' component={Home} />
            <Route path='/RecipeDetails' component={RecipeDetails} />
        </Router>
    );
}
