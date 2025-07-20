import { View, Text, ScrollView, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState, useEffect } from 'react';

export default function SearchResults() {
  const { query } = useLocalSearchParams();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(query || '');
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: 'all',
    sortBy: 'relevance'
  });

  // Sample search results - in real app, this would come from API/database
  const getSearchResults = (searchTerm) => {
    const allItems = [
      { id: 'react-native-course', name: 'React Native Pro Course', category: 'Education', price: 99.99, rating: 4.8, type: 'course' },
      { id: 'wireless-headphones', name: 'Wireless Headphones Pro', category: 'Technology', price: 159.99, rating: 4.6, type: 'product' },
      { id: 'javascript-guide', name: 'JavaScript Complete Guide', category: 'Education', price: 49.99, rating: 4.7, type: 'course' },
      { id: 'smartphone-x1', name: 'Smartphone X1', category: 'Technology', price: 899.99, rating: 4.5, type: 'product' },
      { id: 'web-design-course', name: 'React Web Design Course', category: 'Education', price: 79.99, rating: 4.9, type: 'course' },
      { id: 'laptop-ultra', name: 'Native Development Laptop', category: 'Technology', price: 1299.99, rating: 4.4, type: 'product' },
      { id: 'mobile-app-book', name: 'Mobile App Development Book', category: 'Education', price: 29.99, rating: 4.3, type: 'book' },
      { id: 'smart-watch', name: 'React Smart Watch', category: 'Technology', price: 299.99, rating: 4.2, type: 'product' }
    ];

    if (!searchTerm) return allItems;

    const searchTermLower = searchTerm.toLowerCase();
    return allItems.filter(item => 
      item.name.toLowerCase().includes(searchTermLower) ||
      item.category.toLowerCase().includes(searchTermLower)
    );
  };

  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    const searchResults = getSearchResults(query);
    setResults(searchResults);
    applyFilters(searchResults);
  }, [query]);

  const applyFilters = (items = results) => {
    let filtered = [...items];

    // Filter by category
    if (filters.category !== 'all') {
      filtered = filtered.filter(item => item.category.toLowerCase() === filters.category);
    }

    // Filter by price range
    if (filters.priceRange !== 'all') {
      switch (filters.priceRange) {
        case 'under-50':
          filtered = filtered.filter(item => item.price < 50);
          break;
        case '50-100':
          filtered = filtered.filter(item => item.price >= 50 && item.price <= 100);
          break;
        case '100-300':
          filtered = filtered.filter(item => item.price > 100 && item.price <= 300);
          break;
        case 'over-300':
          filtered = filtered.filter(item => item.price > 300);
          break;
      }
    }

    // Sort results
    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      // 'relevance' is default order
    }

    setFilteredResults(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const goBack = () => {
    router.back();
  };

  const performNewSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search/${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const navigateToItem = (itemId) => {
    router.push(`/item/${itemId}`);
  };

  const updateFilter = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'course': return '📚';
      case 'product': return '📱';
      case 'book': return '📖';
      default: return '🔍';
    }
  };

  const renderResult = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigateToItem(item.id)}
      className="bg-white rounded-lg p-4 mb-3"
      activeOpacity={0.8}
    >
      <View className="flex-row items-start">
        <Text className="text-2xl mr-3">{getTypeIcon(item.type)}</Text>
        <View className="flex-1">
          <Text className="text-lg font-semibold text-gray-800 mb-1">
            {item.name}
          </Text>
          <View className="flex-row items-center mb-2">
            <Text className="text-yellow-500 mr-2">
              {'★'.repeat(Math.floor(item.rating))}
            </Text>
            <Text className="text-gray-600 text-sm">{item.rating}</Text>
            <View className="bg-blue-100 px-2 py-1 rounded ml-2">
              <Text className="text-blue-800 text-xs font-medium">{item.category}</Text>
            </View>
          </View>
          <Text className="text-2xl font-bold text-green-600">
            ${item.price}
          </Text>
        </View>
        <View className="bg-blue-600 px-3 py-1 rounded-full">
          <Text className="text-white text-sm font-medium">View</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

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
          <Text className="text-xl font-bold text-gray-800">Search Results</Text>
        </View>

        {/* Search Bar */}
        <View className="bg-white rounded-lg p-4 mb-6">
          <Text className="text-lg font-semibold text-gray-800 mb-3">
            Search
          </Text>
          <View className="flex-row">
            <TextInput
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Enter search terms..."
              className="flex-1 bg-gray-50 p-3 rounded-lg border border-gray-300 mr-3"
              placeholderTextColor="#9CA3AF"
              onSubmitEditing={performNewSearch}
            />
            <TouchableOpacity
              onPress={performNewSearch}
              className="bg-blue-600 px-4 py-3 rounded-lg"
              activeOpacity={0.8}
            >
              <Text className="text-white font-medium">Search</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Info */}
        <View className="bg-blue-50 rounded-lg p-4 mb-6">
          <Text className="text-blue-800 font-semibold mb-2">
            Search Results for "{query}"
          </Text>
          <Text className="text-blue-700">
            Found {filteredResults.length} of {results.length} total results
          </Text>
        </View>

        {/* Filters */}
        <View className="bg-white rounded-lg p-4 mb-6">
          <Text className="text-lg font-semibold text-gray-800 mb-4">
            Filters & Sorting
          </Text>
          
          {/* Category Filter */}
          <View className="mb-4">
            <Text className="text-gray-700 font-medium mb-2">Category:</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View className="flex-row">
                {['all', 'technology', 'education'].map(category => (
                  <TouchableOpacity
                    key={category}
                    onPress={() => updateFilter('category', category)}
                    className={`px-4 py-2 rounded-full mr-2 ${filters.category === category ? 'bg-blue-600' : 'bg-gray-200'}`}
                    activeOpacity={0.8}
                  >
                    <Text className={`font-medium ${filters.category === category ? 'text-white' : 'text-gray-700'}`}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>

          {/* Price Filter */}
          <View className="mb-4">
            <Text className="text-gray-700 font-medium mb-2">Price Range:</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View className="flex-row">
                {[
                  { key: 'all', label: 'All Prices' },
                  { key: 'under-50', label: 'Under $50' },
                  { key: '50-100', label: '$50-$100' },
                  { key: '100-300', label: '$100-$300' },
                  { key: 'over-300', label: 'Over $300' }
                ].map(price => (
                  <TouchableOpacity
                    key={price.key}
                    onPress={() => updateFilter('priceRange', price.key)}
                    className={`px-4 py-2 rounded-full mr-2 ${filters.priceRange === price.key ? 'bg-green-600' : 'bg-gray-200'}`}
                    activeOpacity={0.8}
                  >
                    <Text className={`font-medium text-sm ${filters.priceRange === price.key ? 'text-white' : 'text-gray-700'}`}>
                      {price.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>

          {/* Sort Filter */}
          <View>
            <Text className="text-gray-700 font-medium mb-2">Sort By:</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View className="flex-row">
                {[
                  { key: 'relevance', label: 'Relevance' },
                  { key: 'price-low', label: 'Price: Low to High' },
                  { key: 'price-high', label: 'Price: High to Low' },
                  { key: 'rating', label: 'Rating' },
                  { key: 'name', label: 'Name' }
                ].map(sort => (
                  <TouchableOpacity
                    key={sort.key}
                    onPress={() => updateFilter('sortBy', sort.key)}
                    className={`px-4 py-2 rounded-full mr-2 ${filters.sortBy === sort.key ? 'bg-purple-600' : 'bg-gray-200'}`}
                    activeOpacity={0.8}
                  >
                    <Text className={`font-medium text-sm ${filters.sortBy === sort.key ? 'text-white' : 'text-gray-700'}`}>
                      {sort.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>

        {/* Results */}
        <View className="bg-white rounded-lg p-4 mb-6">
          <Text className="text-lg font-semibold text-gray-800 mb-4">
            Results ({filteredResults.length})
          </Text>
          {filteredResults.length > 0 ? (
            <FlatList
              data={filteredResults}
              renderItem={renderResult}
              keyExtractor={item => item.id}
              scrollEnabled={false}
            />
          ) : (
            <View className="items-center py-8">
              <Text className="text-xl text-gray-500 mb-2">🔍</Text>
              <Text className="text-gray-600 text-center">
                No results found for "{query}"
              </Text>
              <Text className="text-gray-500 text-center mt-2">
                Try adjusting your filters or search terms
              </Text>
            </View>
          )}
        </View>

        {/* Route Info */}
        <View className="bg-blue-50 rounded-lg p-6 mb-6">
          <Text className="text-xl font-semibold text-blue-800 mb-4">
            Dynamic Route Info
          </Text>
          <Text className="text-blue-700 mb-2">
            <Text className="font-medium">Route:</Text> /search/[query]
          </Text>
          <Text className="text-blue-700 mb-2">
            <Text className="font-medium">Parameter:</Text> query = "{query}"
          </Text>
          <Text className="text-blue-700">
            <Text className="font-medium">Purpose:</Text> Display search results with filtering and sorting
          </Text>
        </View>

        {/* Quick Searches */}
        <View className="bg-white rounded-lg p-6">
          <Text className="text-xl font-semibold text-gray-800 mb-4">
            Popular Searches
          </Text>
          <View className="flex-row flex-wrap">
            {['react', 'javascript', 'mobile', 'headphones', 'course', 'laptop'].map((term, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => router.push(`/search/${term}`)}
                className="bg-gray-100 px-4 py-2 rounded-full mr-2 mb-2"
                activeOpacity={0.8}
              >
                <Text className="text-gray-700 font-medium">{term}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}