import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function UserProfile() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  // Sample user data - in real app, this would come from API/database
  const getUserData = (userId) => {
    const users = {
      'john-doe': {
        name: 'John Doe',
        email: 'john.doe@example.com',
        bio: 'Full-stack developer passionate about React Native and mobile development.',
        age: 28,
        location: 'San Francisco, CA',
        joined: 'January 2023',
        posts: 42,
        followers: 156,
        following: 89
      },
      'jane-smith': {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        bio: 'UI/UX designer with 5+ years experience in mobile app design.',
        age: 31,
        location: 'New York, NY',
        joined: 'March 2022',
        posts: 78,
        followers: 234,
        following: 123
      },
      'default': {
        name: id ? id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'User',
        email: `${id}@example.com`,
        bio: 'This is a dynamically generated user profile.',
        age: Math.floor(Math.random() * 30) + 20,
        location: 'Unknown',
        joined: 'Recently',
        posts: Math.floor(Math.random() * 50),
        followers: Math.floor(Math.random() * 200),
        following: Math.floor(Math.random() * 150)
      }
    };

    return users[id] || users['default'];
  };

  const userData = getUserData(id);

  const goBack = () => {
    router.back();
  };

  const navigateToOtherUser = (userId) => {
    router.push(`/user/${userId}`);
  };

  return (
    <ScrollView className="flex-1 bg-gray-100">
      <View className="p-6">
        {/* Header */}
        <View className="flex-row items-center mb-6">
          <TouchableOpacity
            onPress={goBack}
            className="bg-blue-600 px-4 py-2 rounded-lg mr-4"
            activeOpacity={0.8}
          >
            <Text className="text-white font-medium">← Back</Text>
          </TouchableOpacity>
          <Text className="text-2xl font-bold text-gray-800">User Profile</Text>
        </View>

        {/* Profile Header */}
        <View className="bg-white rounded-lg p-6 mb-6 items-center">
          <Image
            source={require('../../assets/images/react-logo.png')}
            className="w-20 h-20 mb-4"
            resizeMode="contain"
          />
          <Text className="text-2xl font-bold text-gray-800 mb-2">
            {userData.name}
          </Text>
          <Text className="text-blue-600 text-lg mb-4">
            @{id}
          </Text>
          
          {/* Stats */}
          <View className="flex-row justify-around w-full bg-gray-50 rounded-lg p-4">
            <View className="items-center">
              <Text className="text-xl font-bold text-gray-800">{userData.posts}</Text>
              <Text className="text-gray-600">Posts</Text>
            </View>
            <View className="items-center">
              <Text className="text-xl font-bold text-gray-800">{userData.followers}</Text>
              <Text className="text-gray-600">Followers</Text>
            </View>
            <View className="items-center">
              <Text className="text-xl font-bold text-gray-800">{userData.following}</Text>
              <Text className="text-gray-600">Following</Text>
            </View>
          </View>
        </View>

        {/* Profile Details */}
        <View className="bg-white rounded-lg p-6 mb-6">
          <Text className="text-xl font-semibold text-gray-800 mb-4">
            Profile Information
          </Text>
          
          <View className="mb-4">
            <Text className="text-gray-700 font-medium mb-1">Email</Text>
            <Text className="text-gray-600">{userData.email}</Text>
          </View>

          <View className="mb-4">
            <Text className="text-gray-700 font-medium mb-1">Age</Text>
            <Text className="text-gray-600">{userData.age} years old</Text>
          </View>

          <View className="mb-4">
            <Text className="text-gray-700 font-medium mb-1">Location</Text>
            <Text className="text-gray-600">{userData.location}</Text>
          </View>

          <View className="mb-4">
            <Text className="text-gray-700 font-medium mb-1">Member Since</Text>
            <Text className="text-gray-600">{userData.joined}</Text>
          </View>

          <View>
            <Text className="text-gray-700 font-medium mb-1">Bio</Text>
            <Text className="text-gray-600">{userData.bio}</Text>
          </View>
        </View>

        {/* Route Parameters Info */}
        <View className="bg-blue-50 rounded-lg p-6 mb-6">
          <Text className="text-xl font-semibold text-blue-800 mb-4">
            Dynamic Route Info
          </Text>
          <Text className="text-blue-700 mb-2">
            <Text className="font-medium">Route:</Text> /user/[id]
          </Text>
          <Text className="text-blue-700 mb-2">
            <Text className="font-medium">Parameter:</Text> id = "{id}"
          </Text>
          <Text className="text-blue-700">
            <Text className="font-medium">Purpose:</Text> Display user profiles with dynamic IDs
          </Text>
        </View>

        {/* Other Users */}
        <View className="bg-white rounded-lg p-6">
          <Text className="text-xl font-semibold text-gray-800 mb-4">
            Other Users
          </Text>
          <Text className="text-gray-600 mb-4">
            Navigate to other user profiles:
          </Text>

          <TouchableOpacity
            onPress={() => navigateToOtherUser('john-doe')}
            className="bg-green-600 py-3 px-4 rounded-lg mb-3"
            activeOpacity={0.8}
          >
            <Text className="text-white font-medium">
              👨‍💻 View John Doe's Profile
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigateToOtherUser('jane-smith')}
            className="bg-purple-600 py-3 px-4 rounded-lg mb-3"
            activeOpacity={0.8}
          >
            <Text className="text-white font-medium">
              👩‍🎨 View Jane Smith's Profile
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigateToOtherUser('random-user-123')}
            className="bg-orange-600 py-3 px-4 rounded-lg"
            activeOpacity={0.8}
          >
            <Text className="text-white font-medium">
              🎲 View Random User Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}