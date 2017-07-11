const ReactPrimitives = require('../ReactPrimitives');
const TouchableMixin = require('../web/Touchable/TouchableMixin');

const {
  Animated,
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  Easing,
  Dimensions,
} = require('react-native');

ReactPrimitives.inject({
  StyleSheet,
  View,
  Text,
  Image,
  Easing,
  Animated,
  Platform: {
    OS: Platform.OS,
    Version: Platform.Version,
  },
  Dimensions,
  Touchable: require('../modules/Touchable')(Animated, StyleSheet, Platform, TouchableMixin),
});
