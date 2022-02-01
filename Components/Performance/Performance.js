// import dependencies
import React from 'react';
import { View, Text, Pressable } from 'react-native';
// import styles
import { giglistStyles } from '../../Styles/giglistStyles';

/**
 * @function Performance :
 * React Native component for displaying information about a performance
 * @param {Object} props 
 * @returns {Component}
 */
export default function Performance(props) {
    const navigation = props.navigation ? props.navigation : null;
    const performance = props.performance;
    const toggleModal = props.toggleModal ? props.toggleModal : false;
    let bandName = <Text style={giglistStyles.text}>
                        {performance.Band}
                    </Text>;
    if (navigation) {
        bandName = <Pressable
            accessible={true}
            accessibilityLabel={`Navigate to information page for band ${performance.Band}`}
            onPressOut={() => {
                if (toggleModal)
                    toggleModal();
                navigation.navigate('Band Info', {
                        band: performance.Band
                    })}
                }
            >
            <Text style={giglistStyles.text}>
                {performance.Band} &gt;&gt;
            </Text>
        </Pressable>
    }
    return (
        <View
            accessible={true}
            accessibilityLabel={`Details of a performance`}
            style={giglistStyles.gigRow}
        >
            <View style={giglistStyles.venue}>
                <Text style={giglistStyles.textVenue}>
                    {performance.Stage}
                </Text>
            </View>
            <View style={giglistStyles.band}>
                {bandName}
            </View>
            <View style={giglistStyles.time}>
                <Text style={giglistStyles.textSmall}>
                    {performance.StartSting} - {performance.EndString}
                </Text>
            </View>
        </View>
    )
}