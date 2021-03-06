import { StyleSheet, Dimensions } from 'react-native';

export const bandStyles = StyleSheet.create({
    bandHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        padding: '3%',
    },
    bandImageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    image: {
        width: '100%',
        height: 250,
    },
    logo: {
        width: 100,
        height: 30,
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginRight: '2.5%',
    },
    location: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginLeft: '2.5%',
    },
    bio: {
        margin: '5%',
        padding: '2%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    socials: {
        padding: '2%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    socialIcon: {
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 1,
    },  
    unlike: {
        backgroundColor: '#a0a0a0',
        opacity: 1,
    },
    buttonBusyStyle: {
        backgroundColor: '#b01010',
        opacity: 0.5,
    },
    bandLogo: {
        width: 100,
        height: 100,
    },
});
