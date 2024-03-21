import { Camera, CameraType } from "expo-camera";
import { useState,useEffect,useRef } from "react";
import * as MediaLibrary from 'expo-media-library';
import { Button, StyleSheet, Text, TouchableOpacity, View,Image } from "react-native";

export default function app() {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [mediaPermission, requestMediaPermission] = MediaLibrary.usePermissions();
    const [image,setImage]=useState()

    const cameraRef=useRef()

    useEffect(()=>{
        requestMediaPermission()
    },[])

    if (!permission) {
        // Camera permissions are still loading
        return <Text>No permission</Text>;
    }
    if (!permission.granted) {
        // Camera permissions are not granted yet
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: "center" }}>
                    We need your permission to show the camera
                </Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    function toggleCameraType() {
        setType((current) =>
            current === CameraType.back ? CameraType.front : CameraType.back
        );
    }

    async function snapPicture(){
        const photo= await cameraRef.current.takePictureAsync()
        setImage(photo)

        // if(mediaPermission.granted){
        //     await MediaLibrary.saveToLibraryAsync(photo.uri)
        //     alert('Save to gallery')
        // }
    }

    // async function snapPicture() {
    //     if (cameraRef.current) {
    //         try {
    //             const video = await cameraRef.current.recordAsync();
    //             setImage(video);
    //             if (mediaPermission.granted) {
    //                 await MediaLibrary.saveToLibraryAsync(video.uri);
    //                 alert('Video saved to gallery');
    //             }
    //         } catch (error) {
    //             console.error('Failed to record video: ', error);
    //         }
    //     }
    // }

    return (
        <View style={styles.container}>
            {image? 
            <View>
                <Image
                    source={{uri:image.uri}}
                    style={{ width: '100%', height: '80%' }} />
                    <Button title="Take Picture" onPress={() => setImage(null)} />
            </View> :<Camera style={styles.camera} type={type} ref={cameraRef}>
                <View style={styles.buttonContainer}>
                    
                    <TouchableOpacity style={styles.button} onPress={snapPicture}>
                            <Image
                                style={styles.icon}
                                width={70}
                                height={70}
                                source={{ uri: 'https://cdn.pixabay.com/photo/2016/12/13/21/13/shutter-1905130_1280.png'}} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
                        <Text style={styles.text}>Flip Camera</Text>
                    </TouchableOpacity>
                </View>
                
            </Camera>
            }
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    camera: {
        flex: 1,
        justifyContent:'flex-end',
        alignItems:'flex-end'
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "transparent",
        alignItems:'flex-end',
        margin:20,
        justifyContent:'flex-end'
    },
    button: {
        flex: 1,
        alignSelf: "flex-end",
        alignItems: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        textAlign:'center'
    },
});
