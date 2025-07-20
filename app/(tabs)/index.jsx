import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-4">
      <Text className="text-3xl font-bold text-blue-600 mb-4">
        🎉 Tailwind CSS Works!
      </Text>
      <View className="bg-white p-6 rounded-lg shadow-lg">
        <Text className="text-lg text-gray-800 mb-2">
          ✅ NativeWind is working correctly
        </Text>
        <Text className="text-gray-600">
          You can now use Tailwind utility classes in your React Native app!
        </Text>
      </View>
    </View>
  );
}
