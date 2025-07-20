import { Text, View } from "react-native";

export function TailwindTest() {
  return (
    <View className="flex-1 bg-gray-50 p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Tailwind CSS Test
      </Text>

      <View className="bg-white rounded-lg p-4 mb-4 shadow-sm border border-gray-200">
        <Text className="text-lg font-semibold text-blue-600 mb-2">
          🎨 Styling Test
        </Text>
        <Text className="text-gray-600 leading-6">
          This text is styled with Tailwind CSS classes! The container has a
          white background, rounded corners, padding, and a subtle shadow.
        </Text>
      </View>
    </View>
  );
}
