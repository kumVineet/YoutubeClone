import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Header() {
    const navigation = useNavigation();
    return (
        <View style={styles.root_container} >
            <View style={{
                flexDirection: "row",
                margin: 5,
                marginTop: 7
            }}>
                <Image source={{ uri: 'data:image/png;base64,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' }}
                    style={{ width: 40, height: 28, marginLeft: 10 }} />
                <Text style={{
                    fontSize: 25,
                    marginLeft: 5,
                    fontWeight: 'bold'
                }}>YouTube</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: 125, margin: 5 }}>

                <TouchableOpacity >
                    <Image source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAAB8fHxhYWFkZGR4eHheXl77+/uEhISurq5ycnKPj4+mpqaysrLq6uqJiYlDQ0NLS0tUVFRsbGyUlJScnJy5ubm+vr7MzMwmJiYMDAzFxcXw8PDZ2dnk5OQYGBguLi4hISGJeVFSAAACaUlEQVR4nO3d607CQBRF4RbFyl2oooJ4ef+XVCNRkE47JKPTc/b6/jKJWSEqLdMzRQEAAAAAAAAAAAAAAAAAAAB0mc8Wg36YbJ/+oG93WfbIZjhPHXidu+nEKG3gVe6eBouUgcPcNY2m6QLvc7cEPMcnVO0vv+ROCbiKD7xpfbmvb2H8m1gty9bX+/lb+Cny72m1KtsLX3OHBI3jCpdlR2HujrCL6EDPhdXX/3LHhfsPK34LV/ulbgu/P256Lfy5IHJaeHDF57Pw8JLWZWF9uNRj4fhoqcPC+nipv8Lxr6XuCk+uh7wVDk6WOitsuKL1VXj6DjorbLy366mw+ea1o8LA3Xk/hYvAUjeFk9BSL4XBQC+Ft+GlPgrvWpa6KGwLdFHYGuihcNq+1H5hR6D9wq5A84WjzqXGC7sDjRfOIpaaLowJNF24jlpquDAu0HBh7EYRs4XRO2GMFtYP0UuNFj5uopcaLTwDhfZRaB+F9lFoH4X2UWgfhfZRaB+F9lFoH4X2UWgfhfZRaB+F9hkt9P/9of/vgP1/j6+wF0NgP43AniiBfW0CexMF9pcK7BEW2OctsFdf4HkLgWdmBJ57Enh2TeD5Q4FnSAWeAxZ4llvgeXyBmQoCczEEZpsIzKcRmDEkMCdKYNaXwLw2gZl7AnMTBWZfCswvFZhBKzBHWGAWtMA8b4GZ7DFz9f2fjdB0QdkPqc632OYOCUp1RknxlrskINk5M719E884t6vjrKCe/iYmPO/p+FN6X0xSBoZvluczSxtYFLu6+4f+n80g+dl5H+Zr3+cfAgAAAAAAAAAAAAAAAAAAQNc718lj2AsYbJkAAAAASUVORK5CYII=' }}
                        style={{ width: 30, height: 30 }} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("search")}>
                    <Image source={{ uri: 'data:image/png;base64,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' }}
                        style={{ width: 30, height: 25 }} />
                </TouchableOpacity>

                <TouchableOpacity >
                    <Image source={{ uri: 'data:image/png;base64,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' }}
                        style={{ width: 25, height: 25 }} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        root_container: {
            height: 40,
            backgroundColor: "white",
            flexDirection: "row",
            justifyContent: 'space-between',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            //elevation:5                                       (Android only)
            shadowOffset: { width: 5, height: 5, },
            shadowColor: 'black',
            shadowOpacity: 0.5
        }
    }
)
