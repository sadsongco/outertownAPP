// import dependencies
import React, { useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PanGestureHandler, ScrollView } from 'react-native-gesture-handler';
// import components
import AllPerformances from '../Performance/AllPerformances';
import SwipeHeader from './SwipeHeader';
// import modules
import handleSwipe from '../../Modules/handleSwipe.js';
// import styles
import { baseStyles } from '../../Styles/baseStyles.js';

function PageContainer(props) {
    if (props.innerPage === true) {
        return (
            <View
                style={baseStyles.container}
            >
                {props.children}
            </View>
        )
    } else {
        return (
            <SafeAreaView
                style={baseStyles.container}
            >
                {props.children}
            </SafeAreaView>
        )
    }
}

export default function ScreenWrapper(props) {
	const [showAllPerformances, setShowAllPerformances] = useState(false);
    return (
        <PanGestureHandler
			onHandlerStateChange={(e)=>handleSwipe(e, setShowAllPerformances)}
		>
            <ScrollView
                style={baseStyles.content}
            >
                <PageContainer
                    innerPage={props.innerPage}
                >
                    <ImageBackground
                        source={require('../../assets/graphics/road-bg-long.png')}
                        resizeMode='contain'
                        style={baseStyles.imageBackgroundStyle}
                        imageStyle={baseStyles.imageBackgroundImageStyle}
                    >
                        <SwipeHeader />
                        <AllPerformances
                            showAllPerformances={showAllPerformances}
                            setShowAllPerformances={setShowAllPerformances}
                        />
                        {props.children}
                    </ImageBackground>
                </PageContainer>
            </ScrollView>
        </PanGestureHandler>
    )
}