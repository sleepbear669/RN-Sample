import React from "react";
import {ImageBackground, StyleSheet, Text, View} from "react-native";
import {BlurView} from "@react-native-community/blur";

const BlurExample = () => {
	return <View style={styles.container}>
		<ImageBackground source={require('../assets/background_image.jpg')} style={[{
			width: '100%',
			height: '100%'
		}, styles.container]}>
			<BlurView style={styles.absolute} blurType={'dark'}/>
			<View>
				<Text style={styles.text}>Hello world!</Text>
			</View>
		</ImageBackground>
	</View>
};


const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center"
	},
	absolute: {
		position: "absolute",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
	text: {
		color: 'white'
	}
});


export default BlurExample;
