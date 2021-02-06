import { makeStyles } from '@material-ui/core/styles';

export const useRecipeDetailsStyels = makeStyles((theme) => ({
    imgContainer: {
        width: '90%',
        display: 'flex',
        margin: '0 auto',
        justifyContent: 'center',
        [theme.breakpoints.up('xl')]: {
            width: '85%',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
    },
    recipeImage: {
        width: '80%',
        margin: '2rem 0 0',
        borderRadius: '0.5rem',
        boxShadow: '0px 0px 15px 5px gray',
        [theme.breakpoints.up('sm')]: {
            width: '60%',
            height: '20rem',
        },
        [theme.breakpoints.up('md')]: {
            width: '50%',
            height: '25rem',
        },
        [theme.breakpoints.up('lg')]: {
            width: '50%',
            height: '27rem',
        },
        [theme.breakpoints.up('xl')]: {
            width: '50%',
            height: '35rem',
        },
    },
}));

export const styles = {
    screen: {
        width: '100%',
        height: '100vh',
        overflowY: 'scroll',
        backgroundColor: '#eaeaea',
    },
    container: {
        paddingTop: '4rem',
    },
    label: {
        color: 'gray',
        textAlign: 'center',
        paddingTop: '2rem',
    },
    ingList: {
        height: '27rem',
        overflowY: 'scroll',
        margin: '2rem 0 0',
    },
    ingText: {
        margin: '5px 0',
        padding: '8px 5px',
        borderBottom: '1px solid #aaaaaa',
    },
};
