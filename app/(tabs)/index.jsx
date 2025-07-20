import { useState, useRef } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  Alert,
  ScrollView
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeTab() {
  const [inputText, setInputText] = useState("");
  const textInputRef = useRef(null);

  const handleSubmit = () => {
    if (inputText.trim()) {
      Alert.alert("Success", `You entered: "${inputText}"`);
    } else {
      Alert.alert("Error", "Please enter some text");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView className="flex-1">
        <View className="flex-1 justify-center items-center p-6">
        {/* Image Section */}
        <View className="mb-8">
          <Image
            source={require("../../assets/images/react-logo.png")}
            className="w-24 h-24"
            resizeMode="contain"
          />
        </View>

        {/* Welcome Text */}
        <View className="mb-8 items-center">
          <Text className="text-3xl font-bold text-gray-800 mb-2">
            Welcome!
          </Text>
          <Text className="text-lg text-gray-600 text-center">
            Enter your information below
          </Text>
        </View>

        {/* Input Section */}
        <View className="w-full mb-6">
          <Text className="text-gray-700 mb-2 font-medium">Your Message:</Text>
          <TextInput
            value={inputText}
            ref={textInputRef}
            onChangeText={setInputText}
            placeholder="Enter your text here..."
            className="w-full bg-white p-4 rounded-lg border border-gray-300 text-lg"
            placeholderTextColor="#9CA3AF"
          />
        </View>

        {/* Button Section */}
        <TouchableOpacity
          onPress={handleSubmit}
          className="bg-blue-600 px-8 py-4 rounded-lg w-full items-center mb-6"
          activeOpacity={0.8}
        >
          <Text className="text-white text-lg font-semibold">Submit</Text>
        </TouchableOpacity>

        {/* Display Input Text */}
        {inputText ? (
          <View className="w-full p-4 bg-white rounded-lg">
            <Text className="text-gray-700 text-center">
              You typed: "{inputText}"
            </Text>
          </View>
        ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}