import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Image } from 'react-native';
import MiniCard from '../components/MiniCard'

const SearchScreen = () => {
    const [value, setValue] = useState("")
    return (

        <View style={{ flex: 1 }}>
            <View style={{
                padding: 5,
                flexDirection: "row",
                justifyContent: "space-around",
                backgroundColor: "white"
            }}>
                <Image source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAAAwMDD4+Ph3d3fa2tp7e3uAgIBzc3Pc3NxsbGxvb290dHQNDQ14eHju7u4TExMcHBxMTExRUVH19fU7OzsmJiaLi4vn5+dFRUVWVlZfX1+hoaE5OTni4uLS0tK8lAocAAADBUlEQVR4nO2d63ISQRBGmQQRARUSQaOJvv9bCrWmEtnt/tVD75z5zhP0qb5uKjUsFkIIIYQQQgghhBBCCCGEEEIIIYQQWJ6zA6jNsmyyQ6jLrpTyKzuImmzKhYfsMOqxKwOP99mRVGJZXnlgKq7LG0ei4ra85+5bdjzhLMv/vHzNjiiYa8FzFlmK25FgKfsf2VEFsp4QPCv+zo4rjHGJ/lP8lB1ZEDtD8KzIWBobU/Dzh+zYQrBK9AxekNGF01MUJDi1B3vpQUYG8UPGWROMDNqLXj3YBnYG+T3IEMRPUbygfclAhox9i/J7kJHBnteEMtgE+B50vugZGez5i16CTaBTrXXwawK/6HWqtQ6+B3WqtQ6+RPGnWsdrQj3YBvhFj+9B/BTFC+qLvnXwawLfg/g1gV/0+B7s+N8p938W9zemhqBToofj3W05fb+tYAIf4wWdUy2DeENnyKQQbjivEi3xhs6iTyLY0D7V0og1nF8Ggw1n14MXIg2fs2UmCc3hKttmitg+nKNi8Cyd27ov8fvwS7bQiPCbZnaFGn+Xzm1lVPi2mNnar2A4s0KtYeiNG8Y3vrc0IH+n6eCPiW4vUhTtXsS8c+H0IuW1EqdQpdgM9kQ9UBTtA+5AeRzJKVS+IiaL9tI4URSd1U9RtAt1T3luzs7iiaLo9CJF0ZmofEVMFu3rBvO6pX2jYhSdQqW8NGsrYh7TtZfGC0XRXv2YLDqFynij1JuoR0oW7V7EPE/eQaHaipgs2oX6RFF0xg1F0SnU7NCisFc/plDtXsT8+IpdqE/ZoUXRgaI9UR+zQ4vC/sMGRtEu1A7Gzc/s0KKwlwZG0V79GMUOCtXOIubX8+xexCjahSrFdrCvG8yPddo3KkbRLtQOFLfZoUVhL411dmhR2L2I+fljq1CX2YHFMZ1FTJFemOpFzKAZGBcqqEQHrhVxgtcHHKxEB96PG9SQeWNFLtGB16/+XXYg9RiWBubknmJFLtGBFV1wscAc20IIIYQQQgghhBBCCCGEEEIIIYQQY/4CTaQpIdOM7sQAAAAASUVORK5CYII=' }}
                    style={{ width: 40, height: 28, marginLeft: 10 }} />

                <TextInput
                    style={{
                        width: "70%",
                        height: 35,
                        backgroundColor: "#e6e6e6",
                        fontSize: 20
                    }}
                    value={value}
                    onChangeText={(text) => setValue(text)}

                />
                <Image source={{ uri: 'data:image/png;base64,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' }}
                    style={{ width: 40, height: 28, marginLeft: 10 }} />
            </View>
            <View>
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
            </View>
        </View>

    );
}

export default SearchScreen