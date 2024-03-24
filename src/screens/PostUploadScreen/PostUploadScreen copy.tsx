// npx install-expo-modules@latest
// yarn global add install-expo-modules@latest
// yarn add expo-camera@14.1.1 expo-constants@15.4.5 expo-file-system@16.0.8 expo-font@11.10.3 expo-keep-awake@12.8.2 expo-modules-core@1.11.12 expo-modules-core$android-annotation@1.11.12 expo-modules-core$android-annotation-processor@1.11.12
// yarn global add expo-cli



// import { View, Text } from 'react-native';
// import { useEffect, useState } from 'react';
// import { Camera } from 'expo-camera';

// const PostUploadScreen = () => {
//     const [hasPermissions, setHasPermissions] = useState<boolean | null>(null);

//     useEffect(() => {
//         const getPermission = async () => {
//             const cameraPermission = await Camera.requestCameraPermissionsAsync();
//             const microphonePermission =
//                 await Camera.requestMicrophonePermissionsAsync();
//             setHasPermissions(
//                 cameraPermission.status === 'granted' &&
//                 microphonePermission.status === 'granted',
//             );
//         };
//         getPermission();
//     }, []);

//     if (hasPermissions === null) {
//         return <Text>Loading...</Text>;
//     }

//     if (hasPermissions === false) {
//         return <Text>No acess to the camera</Text>;
//     }

//     return (
//         <View>
//             <Text>Post Upload Screen</Text>
//         </View>
//     );
// };

// export default PostUploadScreen;



import { View, Text, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { Camera } from 'expo-camera';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../theme/colors';

const PostUploadScreen = () => {
    const [hasPermissions, setHasPermissions] = useState<boolean | null>(null);

    useEffect(() => {
        const getPermission = async () => {
            const cameraPermission = await Camera.requestCameraPermissionsAsync();
            const microphonePermission =
                await Camera.requestMicrophonePermissionsAsync();
            setHasPermissions(
                cameraPermission.status === 'granted' &&
                microphonePermission.status === 'granted',
            );
        };
        getPermission();
    }, []);

    if (hasPermissions === null) {
        return <Text>Loading...</Text>;
    }

    if (hasPermissions === false) {
        return <Text>No acess to the camera</Text>;
    }

    return (
        <View style={styles.page}>
            <Camera style={styles.camera} />
            <View style={styles.buttonsContainer}>
                <MaterialIcons name='close' size={30} color={colors.white} />
                <MaterialIcons name='flash-off' size={30} color={colors.white} />
                <MaterialIcons name='settings' size={30} color={colors.white} />
            </View>
            <View style={styles.buttonsContainer}>
                <MaterialIcons name='photo-library' size={30} color={colors.white} />
                <View style={styles.circle} />
                <MaterialIcons name='flip-camera-ios' size={30} color={colors.white} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.black,
    },
    camera: {
        width: '100%',
        aspectRatio: 3 / 4,
    },
    buttonsContainer: {},
    circle: {
        width: 75,
        aspectRatio: 1,
        borderRadius: 75,
        backgroundColor: colors.white
    }

})

export default PostUploadScreen;