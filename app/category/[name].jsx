import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function CategoryPage() {
  const { name } = useLocalSearchParams();
  const router = useRouter();

  // Sample category data - in real app, this would come from API/database
  const getCategoryData = (categoryName) => {
    const categories = {
      'technology': {
        title: 'Technology',
        description: 'Latest tech products and gadgets',
        color: 'blue',
        items: [
          { id: 'wireless-headphones-pro', name: 'Wireless Headphones Pro', price: 159.99 },
          { id: 'smartphone-x1', name: 'Smartphone X1', price: 899.99 },
          { id: 'laptop-ultra', name: 'Laptop Ultra', price: 1299.99 },
          { id: 'smart-watch-2023', name: 'Smart Watch 2023', price: 299.99 }
        ],
        subcategories: ['Electronics', 'Mobile', 'Computers', 'Audio']
      },
      'education': {
        title: 'Education',
        description: 'Online courses and learning materials',
        color: 'green',
        items: [
          { id: 'react-native-course', name: 'React Native Pro Course', price: 99.99 },
          { id: 'javascript-basics', name: 'JavaScript Fundamentals', price: 49.99 },
          { id: 'web-design-course', name: 'Web Design Masterclass', price: 79.99 },
          { id: 'mobile-dev-bootcamp', name: 'Mobile Dev Bootcamp', price: 199.99 }
        ],
        subcategories: ['Programming', 'Design', 'Business', 'Languages']
      },
      'fashion': {
        title: 'Fashion',
        description: 'Clothing, accessories, and style',
        color: 'pink',
        items: [
          { id: 'summer-dress', name: 'Summer Dress', price: 59.99 },
          { id: 'leather-jacket', name: 'Leather Jacket', price: 149.99 },
          { id: 'running-shoes', name: 'Running Shoes', price: 89.99 },
          { id: 'designer-bag', name: 'Designer Bag', price: 299.99 }
        ],
        subcategories: ['Clothing', 'Shoes', 'Accessories', 'Jewelry']
      },
      'default': {
        title: name ? name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Category',
        description: 'Discover amazing products in this category',
        color: 'gray',
        items: [
          { id: 'sample-item-1', name: 'Sample Product 1', price: 29.99 },
          { id: 'sample-item-2', name: 'Sample Product 2', price: 49.99 },
          { id: 'sample-item-3', name: 'Sample Product 3', price: 79.99 }
        ],
        subcategories: ['General', 'Miscellaneous', 'Other']
      }
    };

    return categories[name] || categories['default'];
  };

  const categoryData = getCategoryData(name);

  const goBack = () => {
    router.back();
  };

  const navigateToItem = (itemId) => {
    router.push(`/item/${itemId}`);
  };

  const navigateToSubcategory = (subcategory) => {
    router.push(`/category/${subcategory.toLowerCase().replace(/\s+/g, '-')}`);
  };

  const navigateToOtherCategory = (categoryName) => {
    router.push(`/category/${categoryName}`);
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: { bg: 'bg-blue-600', bgLight: 'bg-blue-50', text: 'text-blue-800', textLight: 'text-blue-700' },
      green: { bg: 'bg-green-600', bgLight: 'bg-green-50', text: 'text-green-800', textLight: 'text-green-700' },
      pink: { bg: 'bg-pink-600', bgLight: 'bg-pink-50', text: 'text-pink-800', textLight: 'text-pink-700' },
      gray: { bg: 'bg-gray-600', bgLight: 'bg-gray-50', text: 'text-gray-800', textLight: 'text-gray-700' }
    };
    return colors[color] || colors.gray;
  };

  const colorClasses = getColorClasses(categoryData.color);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigateToItem(item.id)}
      className="bg-white rounded-lg p-4 mb-3"
      activeOpacity={0.8}
    >
      <View className="flex-row justify-between items-center">
        <View className="flex-1">
          <Text className="text-lg font-semibold text-gray-800 mb-1">
            {item.name}
          </Text>
          <Text className="text-2xl font-bold text-green-600">
            ${item.price}
          </Text>
        </View>
        <View className={`${colorClasses.bg} px-3 py-1 rounded-full`}>
          <Text className="text-white text-sm font-medium">View</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView className="flex-1 bg-gray-100">
      <View className="p-6">
        {/* Header */}
        <View className="flex-row items-center justify-between mb-6">
          <TouchableOpacity
            onPress={goBack}
            className="bg-blue-600 px-4 py-2 rounded-lg"
            activeOpacity={0.8}
          >
            <Text className="text-white font-medium">← Back</Text>
          </TouchableOpacity>
          <Text className="text-xl font-bold text-gray-800">{categoryData.title}</Text>
          <View className="w-16" />
        </View>

        {/* Category Header */}
        <View className={`${colorClasses.bgLight} rounded-lg p-6 mb-6`}>
          <Text className={`text-3xl font-bold ${colorClasses.text} mb-2`}>
            {categoryData.title}
          </Text>
          <Text className={`text-lg ${colorClasses.textLight}`}>
            {categoryData.description}
          </Text>
          <View className="flex-row flex-wrap mt-4">
            <View className={`${colorClasses.bg} px-3 py-1 rounded-full mr-2`}>
              <Text className="text-white text-sm font-medium">
                {categoryData.items.length} items
              </Text>
            </View>
          </View>
        </View>

        {/* Subcategories */}
        <View className="bg-white rounded-lg p-6 mb-6">
          <Text className="text-xl font-semibold text-gray-800 mb-4">
            Subcategories
          </Text>
          <View className="flex-row flex-wrap">
            {categoryData.subcategories.map((subcategory, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => navigateToSubcategory(subcategory)}
                className="bg-gray-100 px-4 py-2 rounded-full mr-2 mb-2"
                activeOpacity={0.8}
              >
                <Text className="text-gray-700 font-medium">{subcategory}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Products List */}
        <View className="bg-white rounded-lg p-6 mb-6">
          <Text className="text-xl font-semibold text-gray-800 mb-4">
            Products in {categoryData.title}
          </Text>
          <FlatList
            data={categoryData.items}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            scrollEnabled={false}
          />
        </View>

        {/* Route Info */}
        <View className="bg-blue-50 rounded-lg p-6 mb-6">
          <Text className="text-xl font-semibold text-blue-800 mb-4">
            Dynamic Route Info
          </Text>
          <Text className="text-blue-700 mb-2">
            <Text className="font-medium">Route:</Text> /category/[name]
          </Text>
          <Text className="text-blue-700 mb-2">
            <Text className="font-medium">Parameter:</Text> name = "{name}"
          </Text>
          <Text className="text-blue-700">
            <Text className="font-medium">Purpose:</Text> Browse products by category with SEO-friendly URLs
          </Text>
        </View>

        {/* Other Categories */}
        <View className="bg-white rounded-lg p-6">
          <Text className="text-xl font-semibold text-gray-800 mb-4">
            Other Categories
          </Text>
          <Text className="text-gray-600 mb-4">
            Explore more categories:
          </Text>

          <TouchableOpacity
            onPress={() => navigateToOtherCategory('technology')}
            className="bg-blue-600 py-3 px-4 rounded-lg mb-3"
            activeOpacity={0.8}
          >
            <Text className="text-white font-medium">
              💻 Technology
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigateToOtherCategory('education')}
            className="bg-green-600 py-3 px-4 rounded-lg mb-3"
            activeOpacity={0.8}
          >
            <Text className="text-white font-medium">
              📚 Education
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigateToOtherCategory('fashion')}
            className="bg-pink-600 py-3 px-4 rounded-lg mb-3"
            activeOpacity={0.8}
          >
            <Text className="text-white font-medium">
              👗 Fashion
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigateToOtherCategory('sports')}
            className="bg-orange-600 py-3 px-4 rounded-lg"
            activeOpacity={0.8}
          >
            <Text className="text-white font-medium">
              ⚽ Sports
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}