// yarn add react-native-image-picker

import { useState } from 'react';
import { Image, PermissionsAndroid, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const Camera = () => {
    const [cameraPhoto, setCameraPhoto] = useState();
    const [galleryPhoto, setGalleryPhoto] = useState();

    let options = {
        saveToPhotos: true,
        mediaType: 'photo',
    };

    const openCamera = async () => {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            const result = await launchCamera(options);
            setCameraPhoto(result.assets[0].uri);
        }
    };

    const openGallery = async () => {
        const result = await launchImageLibrary(options);
        setGalleryPhoto(result.assets[0].uri);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={openCamera} style={styles.button}>
                <Text style={styles.buttonText}>Open Camera</Text>
            </TouchableOpacity>
            <Image style={styles.imageStyle} source={{ uri: cameraPhoto }} />

            <TouchableOpacity onPress={openGallery} style={styles.button}>
                <Text style={styles.buttonText}>Open Gallery</Text>
            </TouchableOpacity>
            <Image style={styles.imageStyle} source={{ uri: galleryPhoto }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        height: 200,
        width: 200,
        marginTop: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'gold',
        padding: 10,
        borderRadius: 5
    },
    buttonText: {
    },
});

export default Camera;