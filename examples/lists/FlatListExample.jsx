import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Simple data array
const data = [
  { id: '1', name: 'Apple', emoji: '🍎' },
  { id: '2', name: 'Banana', emoji: '🍌' },
  { id: '3', name: 'Orange', emoji: '🍊' },
  { id: '4', name: 'Grape', emoji: '🍇' },
  { id: '5', name: 'Strawberry', emoji: '🍓' },
];

export default function FlatListExample() {
  // Render each item
  const renderItem = ({ item }) => (
    <TouchableOpacity className="bg-white p-4 mb-2 rounded-lg">
      <View className="flex-row items-center">
        <Text className="text-2xl mr-3">{item.emoji}</Text>
        <Text className="text-lg font-medium">{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <View className="p-4">
        <Text className="text-2xl font-bold mb-4">FlatList Example</Text>
        
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}