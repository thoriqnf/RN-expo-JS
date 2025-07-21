import { View } from 'react-native';

export default function Card({ children, className = '' }) {
  return (
    <View className={`bg-white p-4 rounded-lg shadow-sm ${className}`}>
      {children}
    </View>
  );
}