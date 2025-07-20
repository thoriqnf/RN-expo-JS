import { View, Text, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';

export default function ItemDetail() {
  const { slug } = useLocalSearchParams();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  // Sample item data - in real app, this would come from API/database
  const getItemData = (itemSlug) => {
    const items = {
      'sample-product-123': {
        name: 'React Native Pro Course',
        price: 99.99,
        originalPrice: 149.99,
        category: 'Education',
        rating: 4.8,
        reviews: 234,
        description: 'Master React Native development with this comprehensive course. Learn to build beautiful, performant mobile apps for iOS and Android.',
        features: [
          '50+ hours of video content',
          'Real-world projects',
          'Lifetime access',
          'Certificate of completion',
          'Community support'
        ],
        inStock: true,
        seller: 'EduTech Solutions'
      },
      'wireless-headphones-pro': {
        name: 'Wireless Headphones Pro',
        price: 159.99,
        originalPrice: 199.99,
        category: 'Electronics',
        rating: 4.6,
        reviews: 1247,
        description: 'Premium wireless headphones with active noise cancellation and superior sound quality.',
        features: [
          'Active noise cancellation',
          '30-hour battery life',
          'Quick charge (5 min = 2 hours)',
          'Premium materials',
          'Wireless charging case'
        ],
        inStock: true,
        seller: 'TechGear Inc'
      },
      'default': {
        name: slug ? slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Product',
        price: Math.floor(Math.random() * 200) + 10,
        originalPrice: null,
        category: 'General',
        rating: (Math.random() * 2 + 3).toFixed(1),
        reviews: Math.floor(Math.random() * 500) + 50,
        description: 'This is a dynamically generated product description for demonstration purposes.',
        features: [
          'High quality materials',
          'Modern design',
          'Great value for money',
          'Customer satisfaction guaranteed'
        ],
        inStock: Math.random() > 0.2,
        seller: 'Demo Store'
      }
    };

    return items[slug] || items['default'];
  };

  const itemData = getItemData(slug);
  const discount = itemData.originalPrice ? Math.round(((itemData.originalPrice - itemData.price) / itemData.originalPrice) * 100) : 0;

  const goBack = () => {
    router.back();
  };

  const addToCart = () => {
    Alert.alert(
      'Added to Cart',
      `${itemData.name} (Qty: ${quantity}) has been added to your cart!`
    );
  };

  const adjustQuantity = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const navigateToOtherItem = (itemSlug) => {
    router.push(`/item/${itemSlug}`);
  };

  const navigateToCategory = () => {
    router.push(`/category/${itemData.category.toLowerCase()}`);
  };

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
          <TouchableOpacity
            onPress={navigateToCategory}
            className="bg-gray-600 px-4 py-2 rounded-lg"
            activeOpacity={0.8}
          >
            <Text className="text-white font-medium">{itemData.category}</Text>
          </TouchableOpacity>
        </View>

        {/* Product Image */}
        <View className="bg-white rounded-lg p-8 mb-6 items-center">
          <Image
            source={require('../../assets/images/react-logo.png')}
            className="w-32 h-32"
            resizeMode="contain"
          />
        </View>

        {/* Product Info */}
        <View className="bg-white rounded-lg p-6 mb-6">
          <Text className="text-2xl font-bold text-gray-800 mb-2">
            {itemData.name}
          </Text>
          
          <View className="flex-row items-center mb-4">
            <Text className="text-yellow-500 text-lg mr-2">
              {'★'.repeat(Math.floor(itemData.rating))}{'☆'.repeat(5 - Math.floor(itemData.rating))}
            </Text>
            <Text className="text-gray-600">
              {itemData.rating} ({itemData.reviews} reviews)
            </Text>
          </View>

          <View className="flex-row items-center mb-4">
            <Text className="text-3xl font-bold text-green-600 mr-3">
              ${itemData.price}
            </Text>
            {itemData.originalPrice && (
              <>
                <Text className="text-lg text-gray-500 line-through mr-2">
                  ${itemData.originalPrice}
                </Text>
                <View className="bg-red-600 px-2 py-1 rounded">
                  <Text className="text-white text-sm font-medium">
                    {discount}% OFF
                  </Text>
                </View>
              </>
            )}
          </View>

          <View className="flex-row items-center mb-4">
            <Text className="text-gray-700 mr-2">Sold by:</Text>
            <Text className="text-blue-600 font-medium">{itemData.seller}</Text>
          </View>

          <View className={`px-3 py-1 rounded-full self-start ${itemData.inStock ? 'bg-green-100' : 'bg-red-100'}`}>
            <Text className={`text-sm font-medium ${itemData.inStock ? 'text-green-800' : 'text-red-800'}`}>
              {itemData.inStock ? '✓ In Stock' : '✗ Out of Stock'}
            </Text>
          </View>
        </View>

        {/* Description */}
        <View className="bg-white rounded-lg p-6 mb-6">
          <Text className="text-xl font-semibold text-gray-800 mb-4">
            Description
          </Text>
          <Text className="text-gray-600 leading-6">
            {itemData.description}
          </Text>
        </View>

        {/* Features */}
        <View className="bg-white rounded-lg p-6 mb-6">
          <Text className="text-xl font-semibold text-gray-800 mb-4">
            Features
          </Text>
          {itemData.features.map((feature, index) => (
            <View key={index} className="flex-row items-center mb-2">
              <Text className="text-green-600 mr-2">✓</Text>
              <Text className="text-gray-700">{feature}</Text>
            </View>
          ))}
        </View>

        {/* Quantity and Add to Cart */}
        {itemData.inStock && (
          <View className="bg-white rounded-lg p-6 mb-6">
            <Text className="text-xl font-semibold text-gray-800 mb-4">
              Add to Cart
            </Text>
            
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-gray-700 font-medium">Quantity:</Text>
              <View className="flex-row items-center">
                <TouchableOpacity
                  onPress={() => adjustQuantity(-1)}
                  className="bg-gray-200 w-10 h-10 rounded-lg items-center justify-center"
                  activeOpacity={0.8}
                >
                  <Text className="text-xl font-bold">-</Text>
                </TouchableOpacity>
                <Text className="mx-4 text-xl font-semibold">{quantity}</Text>
                <TouchableOpacity
                  onPress={() => adjustQuantity(1)}
                  className="bg-gray-200 w-10 h-10 rounded-lg items-center justify-center"
                  activeOpacity={0.8}
                >
                  <Text className="text-xl font-bold">+</Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              onPress={addToCart}
              className="bg-blue-600 py-4 rounded-lg items-center"
              activeOpacity={0.8}
            >
              <Text className="text-white text-lg font-semibold">
                Add to Cart - ${(itemData.price * quantity).toFixed(2)}
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Route Info */}
        <View className="bg-blue-50 rounded-lg p-6 mb-6">
          <Text className="text-xl font-semibold text-blue-800 mb-4">
            Dynamic Route Info
          </Text>
          <Text className="text-blue-700 mb-2">
            <Text className="font-medium">Route:</Text> /item/[slug]
          </Text>
          <Text className="text-blue-700 mb-2">
            <Text className="font-medium">Parameter:</Text> slug = "{slug}"
          </Text>
          <Text className="text-blue-700">
            <Text className="font-medium">Purpose:</Text> Display product details with SEO-friendly URLs
          </Text>
        </View>

        {/* Related Items */}
        <View className="bg-white rounded-lg p-6">
          <Text className="text-xl font-semibold text-gray-800 mb-4">
            Other Items
          </Text>
          <Text className="text-gray-600 mb-4">
            Browse other products:
          </Text>

          <TouchableOpacity
            onPress={() => navigateToOtherItem('wireless-headphones-pro')}
            className="bg-purple-600 py-3 px-4 rounded-lg mb-3"
            activeOpacity={0.8}
          >
            <Text className="text-white font-medium">
              🎧 Wireless Headphones Pro
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigateToOtherItem('sample-product-123')}
            className="bg-green-600 py-3 px-4 rounded-lg mb-3"
            activeOpacity={0.8}
          >
            <Text className="text-white font-medium">
              📚 React Native Pro Course
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigateToOtherItem('random-product-xyz')}
            className="bg-orange-600 py-3 px-4 rounded-lg"
            activeOpacity={0.8}
          >
            <Text className="text-white font-medium">
              🎲 Random Product
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}