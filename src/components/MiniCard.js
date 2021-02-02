import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

const MiniCard = () => {
    return (

        <View style={{ flexDirection: "row" }}>
            <Image
                source={{ uri: 'https://images.unsplash.com/photo-1436397543931-01c4a5162bdb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8YmFja2dyb3VuZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }}
                style={{ width: "50%", height: 120 }}
            />

            <View style={{ paddingLeft: 7 }}>
                <Text style={{
                    fontSize: 17,
                    width: Dimensions.get("screen").width / 2
                }}
                    ellipsizeMode="tail"
                    numberOfLines={3} >
                    This is an amazing project</Text>

                <Text styles={{ fontSize: 12, color: "red" }}
                >Coders never quit</Text>

            </View>
        </View>

    );
}


export default MiniCard