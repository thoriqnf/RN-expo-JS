import { Link, useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  const handleButtonPress = () => {
    router.push("/profile");
  };
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
          Welcome to my index!
        </Text>
      </View>
      {/* Button Section */}
      <TouchableOpacity
        onPress={handleButtonPress}
        className="bg-blue-600 px-8 py-4 rounded-lg w-full items-center"
        activeOpacity={0.8}
      >
        <Text className="text-white text-lg font-semibold">
          Go to profile page button
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-blue-600 px-8 m-4 rounded-lg w-full items-center">
        <Link href="/profile">
          <Text className="text-white text-lg font-semibold">
            Go to profile page Link
          </Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
}
