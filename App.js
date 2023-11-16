/*-------------------------------------------------*/
//The app
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import navigationTheme from "./app/navigaton/navigationTheme";

import AppNavigator from "./app/navigaton/AppNavigator";
import Screen from "./app/components/Screen";

export default function App() {
  return (
    <Screen>
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </Screen>
  );
}
