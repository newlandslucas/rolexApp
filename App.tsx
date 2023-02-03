import { StatusBar } from 'expo-status-bar';
import { useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto';
import { Home } from './src/screens/Home';
import { ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  return (
      <>
      <ThemeProvider theme={theme}>
        {fontsLoaded ? <Home /> : <ActivityIndicator color="black"/>}
        <StatusBar style="auto" />
      </ThemeProvider>
      
      </>
  );
}


