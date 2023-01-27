import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { TabView, SceneMap } from 'react-native-tab-view';
import { StatusBar } from 'expo-status-bar';
import DiscoverScreen from '../Screens/DiscoverScreen';
import NewsScreen from '../Screens/NewsScreen';
import TopNavigation from './TopNavigation';


export default function InshortsTabs() {

    const layout = useWindowDimensions();

    const [index, setIndex] = useState(1)

    const [routes] = useState([
        { key: 'first', title: 'Discover' },
        { key: 'second', title: 'News' }
    ])

    const renderScene = SceneMap({
        first: DiscoverScreen,
        second: NewsScreen
    })

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={() => <TopNavigation
                index={index}
                setIndex={setIndex}
            />}
        />
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        textAlign: 'center',
        marginTop: '30px' 
    },
});
