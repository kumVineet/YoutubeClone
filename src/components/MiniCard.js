import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

const MiniCard = (props) => {
    return (
        <>
            <View style={{
                flexDirection: "row", marginTop: 10,
                justifyContent: 'space-evenly',
                width: "100%", height: 120,
            }}>
                <Image

                    source={{ uri: `https://i.ytimg.com/vi/${props.videoId}/maxresdefault.jpg` }}
                    style={{ width: "50%", height: 120 }}
                />

                <View style={{ paddingLeft: 7 }}>
                    <Text style={{
                        fontSize: 17,
                        width: Dimensions.get("screen").width / 2
                    }}
                        ellipsizeMode="tail"
                        numberOfLines={3} >
                        {props.title}</Text>

                    <Text styles={{ fontSize: 12, color: "red" }}
                    >{props.channel}</Text>

                </View>
            </View>
        </>

    );
}


export default MiniCard