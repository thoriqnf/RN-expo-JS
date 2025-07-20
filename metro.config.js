const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Add support for path mapping
config.resolver.alias = {
  '@': path.resolve(__dirname),
};

// Ensure platform extensions are processed correctly
config.resolver.platforms = ['ios', 'android', 'native', 'web'];

module.exports = config;