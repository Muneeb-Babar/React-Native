import React, { useState, useEffect, useRef } from "react";
import { Camera } from "expo-camera";
import * as MediaLibrary from 'expo-media-library';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

export default function App() {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [isRecording, setIsRecording] = useState(false);

    useEffect(() => {
        (async () => {
            const { status: cameraStatus } = await Camera.requestMicrophonePermissionsAsync();
            setHasCameraPermission(cameraStatus === 'granted');

            const { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync();
            setHasMediaLibraryPermission(mediaStatus === 'granted');
        })();
    }, []);

    async function toggleRecording() {
        if (cameraRef) {
            if (!isRecording) {
                const video = await cameraRef.recordAsync();
                setIsRecording(true);
                await saveVideoToLibrary(video.uri);
            } else {
                cameraRef.stopRecording();
                setIsRecording(false);
            }
        }
    }

    async function saveVideoToLibrary(uri) {
        const asset = await MediaLibrary.createAssetAsync(uri);
        await MediaLibrary.createAlbumAsync('Expo Videos', asset, false);
    }

    if (hasCameraPermission === null || hasMediaLibraryPermission === null) {
        return <View />;
    }

    if (!hasCameraPermission || !hasMediaLibraryPermission) {
        return <Text>Please grant camera and media library permissions to use the app.</Text>;
    }

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} ref={ref => setCameraRef(ref)}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={toggleRecording}
                        disabled={isRecording}
                    >
                        <Image
                            style={styles.icon}
                            width={70}
                            height={70}
                            source={{ uri: 'https://cdn.pixabay.com/photo/2016/12/13/21/13/shutter-1905130_1280.png' }}
                        />
                    </TouchableOpacity>
                    {isRecording && (
                        <TouchableOpacity
                            style={[styles.button, { marginLeft: 20 }]}
                            onPress={() => {
                                cameraRef && cameraRef.stopRecording();
                                setIsRecording(false);
                            }}
                        >
                            <Text style={styles.text}>Stop Recording</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 520,
    },
    icon: {
        width: 70,
        height: 70,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
});