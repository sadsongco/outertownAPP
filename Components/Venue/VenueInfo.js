// import dependencies
import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import components
import ScreenWrapper from '../Common/ScreenWrapper';
import Performance from '../Performance/Performance';
import Loading from '../Common/Loading';
import VenueTitle from './VenueTitle';
import VenueAddress from './VenueAddress';
// import modules
import { getPerformances } from '../../Modules/getPerformances';
import { venueImagePath, venueLogoPath } from '../../Modules/paths';
import { baseStyles } from '../../Styles/baseStyles';
import { venueStyles } from '../../Styles/venueStyles';

/**
 * @function VenueInfo :
 * React Native component for displaying information about a venue
 * @param {Navigation} param0 
 * @returns {Component}
 */
export default function VenueInfo({ route, navigation }) {
    const [venueInfo, setVenueInfo] = useState(false);
    const [performances, setPerformances] = useState(false);

    async function processVenue(venue) {
        let images = [];
        if (venue.VenueImg) images.push(`${venueImagePath}${venue.VenueImg}`);
        if (venue.VenueLogo) images.push(`${venueLogoPath}${venue.VenueLogo}`);
        for (let image of images) {
            await Image.prefetch(image);
        }
        setVenueInfo(venue);
    }

    useEffect(() => {
        (async() => {
            // get local data for venues and performances
            const localVenuesData       = AsyncStorage.getItem('@venuesData');
            // get performances for just this venue, and sort in ascending chronological order
            const localPerformancesData = getPerformances(route.params.venue.Name);
            let values = await Promise.all([localVenuesData, localPerformancesData]);
            // get data for just this venue
            const venueData = JSON.parse(values[0])
                .filter(venue => venue.Name === route.params.venue.Name);
            processVenue(venueData[0])
            setPerformances(values[1]);
        })();
    }, [route.params.venue.Name]);
    if (!venueInfo || !performances) {
        return (
            <Loading />
            )
        }
    
    const venueAddress = <VenueAddress venueInfo={venueInfo} />
    
    return (
        <ScreenWrapper
            innerPage={true}
            navigation={navigation}
        >
            <View style={baseStyles.contentContainer}>
                <View style={venueStyles.venueDiv}>
                    <VenueTitle
                        venue={venueInfo}
                    />
                    { venueAddress }
                    <Image
                        accessible={true}
                        accessibilityLabel={`Image of venue ${venueInfo.Name}`}
                        style={venueStyles.venueFullImage}
                        source={{uri: venueImagePath+venueInfo.VenueImg}}
                        resizeMode='contain'
                    />
                </View>
                <View style={{flex: 2, padding: '3%'}}>

                {performances.map((performance)=><Performance
                    navigation={navigation}
                    performance={performance}
                    key={performance.Id}
                />)}
                </View>
                <View style={venueStyles.venueDiv}>
                    <Text style={venueStyles.venueInfoText}>
                        {venueInfo.Info}
                    </Text>
                </View>
            </View>
        </ScreenWrapper>
    )
}