import { Image } from "expo-image";
import { useState } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  const [name, setName] = useState("TES INI TEXT INPUT");

  const handlePress = () => {
    Alert.alert("Button Pressed!", "You tapped the button.");
  };

  const handleCustomPress = () => {
    Alert.alert("Custom Button", "This is a styled button!");
  };

  return (
    <SafeAreaView>
      <View>
        <TextInput
          value={name}
          onChangeText={setName}
          multiline={true}
          numberOfLines={4}
        />
        <Button
          title="Basic Button"
          onPress={handlePress}
          style={style.button}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#4caf50",
            padding: 15,
            borderRadius: 25,
            alignItems: "center",
            marginBottom: 15,
          }}
          onPress={handleCustomPress}
        >
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Custom Green Button
          </Text>
        </TouchableOpacity>
        <View>
          <Text className="bg-blue-500">
            This text is inside a styled View container!
          </Text>
        </View>
        <View>
          <Text>Tes12345</Text>
        </View>
        <Image
          source="https://picsum.photos/200/300"
          style={{ width: 200, height: 200 }}
          contentFit="fill"
        />
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={{ width: 200, height: 200 }}
        />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  button: {
    borderRadius: 100,
    margin: 50,
    color: "#000000",
  },
});
