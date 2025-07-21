import { View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ImageExample() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView className="p-4">
        <Text className="text-2xl font-bold mb-4">Image Example</Text>
        
        {/* Local Image */}
        <View className="bg-white p-4 mb-4 rounded-lg">
          <Text className="text-lg font-semibold mb-3">Local Image</Text>
          <Image
            source={require('../../assets/images/react-logo.png')}
            className="w-20 h-20 mb-2"
            resizeMode="contain"
          />
          <Text className="text-gray-600">
            Local images use require() and are bundled with your app
          </Text>
        </View>

        {/* Different Resize Modes */}
        <View className="bg-white p-4 mb-4 rounded-lg">
          <Text className="text-lg font-semibold mb-3">Resize Modes</Text>
          
          <Text className="font-medium mb-2">Contain:</Text>
          <Image
            source={require('../../assets/images/react-logo.png')}
            className="w-24 h-16 mb-3 bg-gray-200"
            resizeMode="contain"
          />
          
          <Text className="font-medium mb-2">Cover:</Text>
          <Image
            source={require('../../assets/images/react-logo.png')}
            className="w-24 h-16 mb-3 bg-gray-200"
            resizeMode="cover"
          />
          
          <Text className="font-medium mb-2">Stretch:</Text>
          <Image
            source={require('../../assets/images/react-logo.png')}
            className="w-24 h-16 bg-gray-200"
            resizeMode="stretch"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}