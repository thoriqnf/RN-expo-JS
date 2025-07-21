import { useState } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../../examples/components/Button';
import Card from '../../../examples/components/Card';
import { ThemeProvider, useTheme } from '../../../examples/components/ThemeContext';

function ComponentDemo() {
  const [counter, setCounter] = useState(0);
  const { isDark, toggleTheme, colors } = useTheme();

  const handleButtonPress = (type) => {
    Alert.alert('Button Pressed', `You pressed the ${type} button!`);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView className="p-4">
        <Text 
          className="text-2xl font-bold mb-4"
          style={{ color: colors.text }}
        >
          Component Examples
        </Text>
        
        {/* Theme Example */}
        <Card className="mb-4">
          <Text 
            className="text-lg font-semibold mb-3"
            style={{ color: colors.text }}
          >
            Theme Context
          </Text>
          <Text 
            className="mb-3"
            style={{ color: colors.textSecondary }}
          >
            Current theme: {isDark ? 'Dark' : 'Light'}
          </Text>
          <Button 
            title={`Switch to ${isDark ? 'Light' : 'Dark'} Theme`}
            onPress={toggleTheme}
          />
        </Card>

        {/* Button Examples */}
        <Card className="mb-4">
          <Text 
            className="text-lg font-semibold mb-3"
            style={{ color: colors.text }}
          >
            Button Component
          </Text>
          <View className="space-y-3">
            <Button 
              title="Primary Button" 
              onPress={() => handleButtonPress('primary')}
            />
            <Button 
              title="Secondary Button" 
              variant="secondary"
              onPress={() => handleButtonPress('secondary')}
            />
            <Button 
              title="Danger Button" 
              variant="danger"
              onPress={() => handleButtonPress('danger')}
            />
          </View>
        </Card>

        {/* Card Examples */}
        <Card className="mb-4">
          <Text 
            className="text-lg font-semibold mb-3"
            style={{ color: colors.text }}
          >
            Card Component
          </Text>
          <Text 
            className="mb-3"
            style={{ color: colors.textSecondary }}
          >
            This is a reusable Card component with shadow and padding.
          </Text>
          
          <Card className="bg-blue-50 border border-blue-200">
            <Text className="text-blue-800 font-medium">
              Nested Card Example
            </Text>
            <Text className="text-blue-600">
              Cards can be nested and styled differently
            </Text>
          </Card>
        </Card>

        {/* Interactive Example */}
        <Card>
          <Text 
            className="text-lg font-semibold mb-3"
            style={{ color: colors.text }}
          >
            Interactive Example
          </Text>
          <Text 
            className="mb-3"
            style={{ color: colors.textSecondary }}
          >
            Counter: {counter}
          </Text>
          <View className="flex-row space-x-2">
            <View className="flex-1 mr-2">
              <Button 
                title="+" 
                onPress={() => setCounter(counter + 1)}
              />
            </View>
            <View className="flex-1">
              <Button 
                title="-" 
                variant="secondary"
                onPress={() => setCounter(counter - 1)}
              />
            </View>
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

export default function ComponentDemoWithTheme() {
  return (
    <ThemeProvider>
      <ComponentDemo />
    </ThemeProvider>
  );
}