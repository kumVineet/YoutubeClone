import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const Card = (props) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("videoplayer", { videoId: props.videoId, title: props.title })}>
            <View style={{
                height: 250, marginBottom: 6
            }}>
                <Image
                    source={{ uri: `https://i.ytimg.com/vi/${props.videoId}/maxresdefault.jpg` }}
                    style={{ width: "100%", height: 200 }}
                />

                <View style={{ flexDirection: 'row', margin: 5 }}>
                    <Image source={{ uri: 'data:image/png;base64,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' }}
                        style={{ width: 30, height: 30 }} />

                    <View style={{
                        marginLeft: 10, height: 40
                    }}>
                        <Text style={{ fontSize: 20 }} ellipsizeMode="tail" numberOfLines={2}>
                            {props.title}</Text>
                        <Text>{props.channel}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default Card