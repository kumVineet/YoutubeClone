import React, { useState } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { useSelector } from "react-redux";
import Header from '../components/Header'
import Card from '../components/Card'



const LittleCard = ({ name }) => {

    return (
        <View style={{
            backgroundColor: "red",
            width: 180, height: 50,
            marginTop: 8,
            borderRadius: 4
        }}>
            <Text style={{
                textAlign: "center",
                color: "white",
                marginTop: 10,
                fontSize: 22
            }}>
                {name}</Text>
        </View>
    )
}
const Explore = () => {
    const cardData = useSelector(state => {
        return state
    })
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <ScrollView>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: "space-around" }}>
                    <LittleCard name="Trending" />
                    <LittleCard name="Music" />
                    <LittleCard name="Gaming" />
                    <LittleCard name="News" />
                    <LittleCard name="Films" />
                    <LittleCard name="Fashion & Beauty" />
                    <LittleCard name="Learning" />
                    <LittleCard name="Live" />
                </View>

                <Text style={{
                    margin: 8,
                    fontSize: 22,
                    borderBottomWidth: 1
                }}>Trending Videos</Text>

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
                />
            </ScrollView>
        </View>
    );

}

export default Explore