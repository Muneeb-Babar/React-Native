import { View,Text,StyleSheet,Image,TouchableOpacity,Button } from "react-native";


function Status({navigation}){
    return (
        <View style={styles.main}>
            <View >
                <TouchableOpacity style={styles.main1} onPress={() => { navigation.navigate('AddStatus') }}>
                <Image 
                source={{uri:'https://imgsrv2.voi.id/WjEqMKzrXoQQvMyNmpfJrb69U5WO2jgd1eqrHg-lOyA/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8zNDMxMTEvMjAyMzEyMjkxMzI1LW1haW4uY3JvcHBlZF8xNzAzODM0OTI5LmpwZWc.jpg'}}
                width={70}
                height={70}
                borderRadius={50}/>
                <Text style={styles.text}>Tap to add status</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        marginTop:5
        
    },
    main1: {
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:10,
    marginLeft:5
    },
    text:{
        fontSize:18
    },

});
export default Status