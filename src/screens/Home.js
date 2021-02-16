import React from 'react';
import { StyleSheet, Text, View, FlatList, Animated } from 'react-native';
import { useSelector } from "react-redux";
import Header from '../components/Header'
import Card from '../components/Card'

export default function HomeScreen({ navigation }) {

    const scrollY = new Animated.Value(0)
    const diffClamp = Animated.diffClamp(scrollY, 0, 45)
    const translateY = diffClamp.interpolate({
        inputRange: [0, 40],
        outputRange: [0, -40]
    })

    const cardData = useSelector(state => {
        return state
    })

    return (
        <View style={{ flex: 1 }}>
            <Animated.View
                style={{
                    transform: [{ translateY: translateY }],
                    zIndex: 100,
                    //elevation:5   
                }}
            >
                <Header />
            </Animated.View>
            <FlatList
                data={cardData}
                renderItem={({ item }) => {
                    return <Card
                        videoId={item.id.videoId}
                        title={item.snippet.title}
                        channel={item.snippet.channelTitle}
                    />
                }}
                keyExtractor={(item) => item.id.videoId}
                onScroll={(e) => {
                    scrollY.setValue(e.nativeEvent.contentOffset.y)
                }}
            />
        </View>
    );
}
