/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar,} from 'react-native';
import BlurExample from "./src/blurExample/BlurExample";

declare const global: { HermesInternal: null | {} };

const App = () => {
	return (
		<>
			<StatusBar barStyle="dark-content"/>
			<BlurExample/>
		</>
	);
};

export default App;
