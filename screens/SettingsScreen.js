import * as React from 'react';
import 'react-native-gesture-handler'
import {Box, Button, NativeBaseProvider} from 'native-base'

function SettingsScreen({ navigation }) {
    return (
       <Box safeAreaTop={20} px={10} _color="">
         <Button>Click me</Button>
       </Box>
    );
}

export default SettingsScreen;