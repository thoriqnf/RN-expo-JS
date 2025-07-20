import { useRef, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const [inputText, setInputText] = useState("");
  const textInputRef = useRef(null);

  const handleButtonPress = () => {
    console.log("Button pressed with input:", inputText);
    // Add your button functionality here
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-6">
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
        <Text className="text-3xl font-bold text-gray-800 mb-2">Welcome!</Text>
        <Text className="text-lg text-gray-600 text-center">
          Enter your information below
        </Text>
      </View>

      {/* Input Section */}
      <View className="w-full mb-6">
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
        onPress={handleButtonPress}
        className="bg-blue-600 px-8 py-4 rounded-lg w-full items-center"
        activeOpacity={0.8}
      >
        <Text className="text-white text-lg font-semibold">Submit</Text>
      </TouchableOpacity>

      {/* Display Input Text */}
      {inputText ? (
        <View className="mt-6 p-4 bg-white rounded-lg w-full">
          <Text className="text-gray-700 text-center">
            You typed: "{inputText}"
          </Text>
        </View>
      ) : null}
    </View>
  );
}
