import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function ExploreTab() {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView className="flex-1">
        <View className="p-6">
        {/* Header */}
        <View className="items-center mb-8">
          <Image
            source={require("../../assets/images/react-logo.png")}
            className="w-20 h-20 mb-4"
            resizeMode="contain"
          />
          <Text className="text-3xl font-bold text-gray-800 mb-2">
            Explore
          </Text>
          <Text className="text-lg text-gray-600 text-center">
            Navigation examples and app information
          </Text>
        </View>

        {/* Tab Navigation Info */}
        <View className="bg-white rounded-lg p-6 mb-6">
          <Text className="text-xl font-semibold text-gray-800 mb-4">
            Tab Navigation Example
          </Text>
          <Text className="text-gray-600 mb-4">
            This app demonstrates Expo Router tab navigation with three sections:
          </Text>
          <Text className="text-gray-700 mb-2">
            • <Text className="font-semibold">Home Tab:</Text> Interactive form with image, input, and button
          </Text>
          <Text className="text-gray-700 mb-2">
            • <Text className="font-semibold">Explore Tab:</Text> Information and navigation examples (this tab)
          </Text>
          <Text className="text-gray-700">
            • <Text className="font-semibold">Profile Tab:</Text> User profile management and route demos
          </Text>
        </View>

        {/* Dynamic Routes Demo */}
        <View className="bg-white rounded-lg p-6 mb-6">
          <Text className="text-xl font-semibold text-gray-800 mb-4">
            Dynamic Routes Examples
          </Text>
          <Text className="text-gray-600 mb-4">
            Try these dynamic route examples:
          </Text>

          <TouchableOpacity
            onPress={() => navigateTo('/user/john-doe')}
            className="bg-blue-600 py-3 px-4 rounded-lg mb-3"
            activeOpacity={0.8}
          >
            <Text className="text-white font-medium">
              👨‍💻 User Profile: /user/[id]
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigateTo('/item/wireless-headphones-pro')}
            className="bg-purple-600 py-3 px-4 rounded-lg mb-3"
            activeOpacity={0.8}
          >
            <Text className="text-white font-medium">
              🎧 Product Detail: /item/[slug]
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigateTo('/category/technology')}
            className="bg-green-600 py-3 px-4 rounded-lg mb-3"
            activeOpacity={0.8}
          >
            <Text className="text-white font-medium">
              💻 Category: /category/[name]
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigateTo('/search/react-native')}
            className="bg-red-600 py-3 px-4 rounded-lg"
            activeOpacity={0.8}
          >
            <Text className="text-white font-medium">
              🔍 Search: /search/[query]
            </Text>
          </TouchableOpacity>
        </View>

        {/* Learning Examples */}
        <View className="bg-white rounded-lg p-6 mb-6">
          <Text className="text-xl font-semibold text-gray-800 mb-4">
            Learning Examples
          </Text>
          <Text className="text-gray-600 mb-4">
            Try these React Native component examples:
          </Text>

          <TouchableOpacity
            onPress={() => navigateTo('/examples/lists/flatlist')}
            className="bg-orange-600 py-3 px-4 rounded-lg mb-3"
            activeOpacity={0.8}
          >
            <Text className="text-white font-medium">
              📋 FlatList Example
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigateTo('/examples/lists/scrollview')}
            className="bg-teal-600 py-3 px-4 rounded-lg mb-3"
            activeOpacity={0.8}
          >
            <Text className="text-white font-medium">
              📜 ScrollView Example
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigateTo('/examples/assets/image')}
            className="bg-pink-600 py-3 px-4 rounded-lg mb-3"
            activeOpacity={0.8}
          >
            <Text className="text-white font-medium">
              🖼️ Image Example
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigateTo('/examples/assets/font')}
            className="bg-indigo-600 py-3 px-4 rounded-lg mb-3"
            activeOpacity={0.8}
          >
            <Text className="text-white font-medium">
              📝 Font Example
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigateTo('/examples/components/demo')}
            className="bg-yellow-600 py-3 px-4 rounded-lg"
            activeOpacity={0.8}
          >
            <Text className="text-white font-medium">
              🔘 Component Examples
            </Text>
          </TouchableOpacity>
        </View>

        {/* App Features */}
        <View className="bg-blue-50 rounded-lg p-6">
          <Text className="text-xl font-semibold text-blue-800 mb-4">
            What You'll Learn
          </Text>
          <Text className="text-blue-700 mb-2">
            ✅ Expo Router tab navigation
          </Text>
          <Text className="text-blue-700 mb-2">
            ✅ Dynamic routing with parameters
          </Text>
          <Text className="text-blue-700 mb-2">
            ✅ React Native components and styling
          </Text>
          <Text className="text-blue-700 mb-2">
            ✅ State management with useState
          </Text>
          <Text className="text-blue-700">
            ✅ NativeWind/Tailwind CSS styling
          </Text>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}