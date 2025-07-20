import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();

  const goToTabs = () => {
    router.push("/(tabs)");
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <View className="flex-1 justify-center items-center p-6">
        {/* Logo */}
        <View className="mb-8">
          <Image
            source={require("../assets/images/react-logo.png")}
            className="w-32 h-32"
            resizeMode="contain"
          />
        </View>

        {/* Welcome Text */}
        <View className="mb-8 items-center">
          <Text className="text-4xl font-bold text-gray-800 mb-4">
            Welcome!
          </Text>
          <Text className="text-lg text-gray-600 text-center mb-2">
            React Native App with Expo Router
          </Text>
          <Text className="text-base text-gray-500 text-center">
            Tab Navigation & Dynamic Routes Example
          </Text>
        </View>

        {/* Features List */}
        <View className="bg-white rounded-lg p-6 mb-8 w-full">
          <Text className="text-xl font-semibold text-gray-800 mb-4">
            What's Inside:
          </Text>
          <Text className="text-gray-700 mb-2">
            ✅ Tab navigation with Expo Router
          </Text>
          <Text className="text-gray-700 mb-2">
            ✅ Dynamic routes with parameters
          </Text>
          <Text className="text-gray-700 mb-2">
            ✅ Interactive forms and user input
          </Text>
          <Text className="text-gray-700 mb-2">
            ✅ NativeWind/Tailwind CSS styling
          </Text>
          <Text className="text-gray-700">
            ✅ Beginner-friendly React Native code
          </Text>
        </View>

        {/* Enter Button */}
        <TouchableOpacity
          onPress={goToTabs}
          className="bg-blue-600 px-12 py-4 rounded-lg w-full items-center"
          activeOpacity={0.8}
        >
          <Text className="text-white text-xl font-semibold">
            Enter App
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
