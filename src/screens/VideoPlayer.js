import React, { useState } from 'react';
import { View, Dimensions, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import Header from '../components/Header'

const VideoPlayer = ({ route }) => {
    const { videoId, title } = route.params
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <View style={{
                width: "100%", height: 200,
            }}>
                <WebView
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{ uri: `https://www.youtube.com/embed/${videoId} ` }}
                />
            </View>
            <Text style={{
                fontSize: 20,
                width: Dimensions.get("screen").width - 50,
                margin: 9
            }}
                ellipsizeMode="tail"
                numberofLines={2}
            > {title}</Text>
            <View
                style={{
                    borderBottomWidth: 1
                }} />
        </View>
    );

}

export default VideoPlayer