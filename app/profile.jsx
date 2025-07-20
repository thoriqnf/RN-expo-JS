import { Image, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-6">
      {/* Image Section */}
      <View className="mb-8">
        <Image
          source={require("../assets/images/react-logo.png")}
          className="w-24 h-24"
          resizeMode="contain"
        />
      </View>

      {/* Welcome Text */}
      <View className="mb-8 items-center">
        <Text className="text-3xl font-bold text-gray-800 mb-2">
          Welcome to my Profile page!
        </Text>
      </View>
    </View>
  );
}
