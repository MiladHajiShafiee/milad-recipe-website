import { makeStyles } from '@material-ui/core/styles';
import LandingImage from '../assets/images/landing-page-02.jpg';

export const useLandingStyles = makeStyles((theme) => ({
    text: {
        fontSize: 20,
        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
        },
    },
}));

export const styles = {
    screen: {
        margin: 0,
        padding: 0,
        width: '100%',
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${LandingImage})`,
    },
    glassish: {
        width: '60%',
        height: '50%',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '10px',
        backgroundColor: 'rgba(256, 256, 256, 0.5)',
    },
    text: {
        opacity: '0.8',
        padding: '40px',
    },
    spoonacular: {
        color: 'red',
        cursor: 'pointer',
    },
};
