import React, { useState, useEffect, useRef } from "react";
import { Camera } from "expo-camera";
import { Button, StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from "react-native";

export default function App() {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [capturedImages, setCapturedImages] = useState([]);
    const cameraRef = useRef(null);

    useEffect(() => {
        (async () => {
            const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraStatus === 'granted');
        })();
    }, []);

    async function captureImage() {
        if (hasCameraPermission) {
            const { uri } = await cameraRef.current.takePictureAsync();
            setCapturedImages([...capturedImages, { uri }]);
        }
    }

    function deleteImage(index) {
        const newImages = [...capturedImages];
        newImages.splice(index, 1);
        setCapturedImages(newImages);
    }

    return (
        <View style={styles.container}>
            <View style={styles.cameraContainer}>
                {hasCameraPermission ? (
                    <Camera style={styles.camera} ref={cameraRef} />
                ) : (
                    <Text>No access to camera</Text>
                )}
            </View>
            <TouchableOpacity style={styles.captureButton} onPress={captureImage}>
                <Text style={styles.buttonText}>Capture</Text>
            </TouchableOpacity>
            <FlatList
                data={capturedImages}
                horizontal
                renderItem={({ item, index }) => (
                    <View style={styles.imageContainer}>
                        <Image style={styles.thumbnail} source={{ uri: item.uri }} />
                        <TouchableOpacity onPress={() => deleteImage(index)} style={styles.deleteButton}>
                            <Text style={styles.deleteButtonText}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cameraContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    camera: {
        width: 300,
        height: 300,
    },
    captureButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 50,
        padding: 15,
        marginBottom: 20,
        alignSelf: 'center',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    imageContainer: {
        marginHorizontal: 5,
        position: 'relative',
    },
    thumbnail: {
        width: 100,
        height: 100,
    },
    deleteButton: {
        position: 'absolute',
        top: 100,
        right:30,
        backgroundColor: 'red',
        padding: 8,
        borderRadius: 5,
    },
    deleteButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});