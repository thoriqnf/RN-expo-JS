import { TouchableOpacity, Text } from 'react-native';

export default function Button({ title, onPress, variant = 'primary' }) {
  const getButtonStyle = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-gray-200 border border-gray-300';
      case 'danger':
        return 'bg-red-600';
      default:
        return 'bg-blue-600';
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case 'secondary':
        return 'text-gray-700';
      default:
        return 'text-white';
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`px-6 py-3 rounded-lg items-center ${getButtonStyle()}`}
      activeOpacity={0.8}
    >
      <Text className={`font-medium ${getTextStyle()}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}