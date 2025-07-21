import { ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ScrollViewExample() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <View className="p-4">
        <Text className="text-2xl font-bold mb-4">ScrollView Example</Text>
        
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Multiple cards to demonstrate scrolling */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <View key={num} className="bg-white p-6 mb-4 rounded-lg">
              <Text className="text-xl font-semibold mb-2">Card {num}</Text>
              <Text className="text-gray-600">
                This is card number {num}. ScrollView allows you to scroll through 
                content when it exceeds the screen height. This is useful for 
                long content that doesn't fit on one screen.
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}