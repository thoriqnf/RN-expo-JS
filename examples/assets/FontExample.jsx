import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FontExample() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView className="p-4">
        <Text className="text-2xl font-bold mb-4">Font Example</Text>
        
        {/* Default Font */}
        <View className="bg-white p-4 mb-4 rounded-lg">
          <Text className="text-lg font-semibold mb-3">Default Font</Text>
          <Text className="text-base mb-2">
            This is the default system font
          </Text>
          <Text className="text-sm text-gray-600">
            React Native uses the system font by default
          </Text>
        </View>

        {/* Custom Font */}
        <View className="bg-white p-4 mb-4 rounded-lg">
          <Text className="text-lg font-semibold mb-3">Custom Font</Text>
          <Text style={{ fontFamily: 'SpaceMono', fontSize: 16 }} className="mb-2">
            This uses SpaceMono font
          </Text>
          <Text className="text-sm text-gray-600">
            Custom fonts are loaded in _layout.jsx with expo-font
          </Text>
        </View>

        {/* Font Weights */}
        <View className="bg-white p-4 rounded-lg">
          <Text className="text-lg font-semibold mb-3">Font Weights</Text>
          <Text className="text-base font-normal mb-1">Normal Weight</Text>
          <Text className="text-base font-medium mb-1">Medium Weight</Text>
          <Text className="text-base font-semibold mb-1">Semibold Weight</Text>
          <Text className="text-base font-bold">Bold Weight</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}