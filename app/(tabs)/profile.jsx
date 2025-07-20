import { useState } from "react";
import { 
  ScrollView, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  Alert 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function ProfileTab() {
  const router = useRouter();
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    bio: "",
    age: "",
  });

  const handleSaveProfile = () => {
    if (!profile.name || !profile.email) {
      Alert.alert("Error", "Please fill in at least name and email");
      return;
    }
    Alert.alert("Success", "Profile saved successfully!");
  };

  const navigateToUserProfile = () => {
    if (profile.name) {
      router.push(`/user/${profile.name.toLowerCase().replace(/\s+/g, "-")}`);
    } else {
      Alert.alert("Error", "Please enter your name first");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView className="flex-1">
        <View className="p-6">
        {/* Header */}
        <View className="items-center mb-8">
          <Image
            source={require("../../assets/images/react-logo.png")}
            className="w-20 h-20 mb-4"
            resizeMode="contain"
          />
          <Text className="text-3xl font-bold text-gray-800 mb-2">
            Profile
          </Text>
          <Text className="text-lg text-gray-600 text-center">
            Manage your profile information
          </Text>
        </View>

        {/* Profile Form */}
        <View className="bg-white rounded-lg p-6 mb-6">
          <Text className="text-xl font-semibold text-gray-800 mb-4">
            Personal Information
          </Text>

          <View className="mb-4">
            <Text className="text-gray-700 mb-2 font-medium">Name</Text>
            <TextInput
              value={profile.name}
              onChangeText={(text) => setProfile({ ...profile, name: text })}
              placeholder="Enter your full name"
              className="bg-gray-50 p-4 rounded-lg border border-gray-300 text-lg"
              placeholderTextColor="#9CA3AF"
            />
          </View>

          <View className="mb-4">
            <Text className="text-gray-700 mb-2 font-medium">Email</Text>
            <TextInput
              value={profile.email}
              onChangeText={(text) => setProfile({ ...profile, email: text })}
              placeholder="Enter your email"
              keyboardType="email-address"
              className="bg-gray-50 p-4 rounded-lg border border-gray-300 text-lg"
              placeholderTextColor="#9CA3AF"
            />
          </View>

          <View className="mb-4">
            <Text className="text-gray-700 mb-2 font-medium">Age</Text>
            <TextInput
              value={profile.age}
              onChangeText={(text) => setProfile({ ...profile, age: text })}
              placeholder="Enter your age"
              keyboardType="numeric"
              className="bg-gray-50 p-4 rounded-lg border border-gray-300 text-lg"
              placeholderTextColor="#9CA3AF"
            />
          </View>

          <View className="mb-6">
            <Text className="text-gray-700 mb-2 font-medium">Bio</Text>
            <TextInput
              value={profile.bio}
              onChangeText={(text) => setProfile({ ...profile, bio: text })}
              placeholder="Tell us about yourself"
              multiline
              numberOfLines={4}
              className="bg-gray-50 p-4 rounded-lg border border-gray-300 text-lg h-24"
              placeholderTextColor="#9CA3AF"
              textAlignVertical="top"
            />
          </View>

          <TouchableOpacity
            onPress={handleSaveProfile}
            className="bg-green-600 py-4 rounded-lg items-center mb-4"
            activeOpacity={0.8}
          >
            <Text className="text-white text-lg font-semibold">
              Save Profile
            </Text>
          </TouchableOpacity>
        </View>

        {/* Dynamic Routes Demo */}
        <View className="bg-white rounded-lg p-6 mb-6">
          <Text className="text-xl font-semibold text-gray-800 mb-4">
            Try Dynamic Routes
          </Text>
          <Text className="text-gray-600 mb-4">
            Test dynamic routing with your profile:
          </Text>

          <TouchableOpacity
            onPress={navigateToUserProfile}
            className="bg-blue-600 py-3 px-4 rounded-lg mb-3"
            activeOpacity={0.8}
          >
            <Text className="text-white font-medium">
              📱 View My User Profile (/user/[id])
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push('/item/sample-product-123')}
            className="bg-purple-600 py-3 px-4 rounded-lg mb-3"
            activeOpacity={0.8}
          >
            <Text className="text-white font-medium">
              🛍️ View Sample Product (/item/[slug])
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push('/search/react-native')}
            className="bg-red-600 py-3 px-4 rounded-lg"
            activeOpacity={0.8}
          >
            <Text className="text-white font-medium">
              🔍 Search Example (/search/[query])
            </Text>
          </TouchableOpacity>
        </View>

        {/* Current Profile Display */}
        {(profile.name || profile.email) && (
          <View className="bg-blue-50 rounded-lg p-6">
            <Text className="text-xl font-semibold text-blue-800 mb-4">
              Current Profile
            </Text>
            {profile.name && (
              <Text className="text-blue-700 mb-2">
                <Text className="font-medium">Name:</Text> {profile.name}
              </Text>
            )}
            {profile.email && (
              <Text className="text-blue-700 mb-2">
                <Text className="font-medium">Email:</Text> {profile.email}
              </Text>
            )}
            {profile.age && (
              <Text className="text-blue-700 mb-2">
                <Text className="font-medium">Age:</Text> {profile.age}
              </Text>
            )}
            {profile.bio && (
              <Text className="text-blue-700">
                <Text className="font-medium">Bio:</Text> {profile.bio}
              </Text>
            )}
          </View>
        )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}