import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { TabView, SceneMap } from 'react-native-tab-view';
import { StatusBar } from 'expo-status-bar'; 

export default function InshortsTab() {

    const layout = useWindowDimensions();

    const [index, setindex] = useState(1)

    const [routes] = useState([
        { key: 'first', title: 'Discover' },
        { key: 'second', title: 'News' }
    ])

    // const renderScene = SceneMap({
    //     first : DiscoverScreen,
    //     second : NewsScreen
    // })

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
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
