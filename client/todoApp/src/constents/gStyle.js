import {StyleSheet} from 'react-native';
import {rh} from './responsiveDimensions.js';

export const gStyles = StyleSheet.create({
  imageView: {
    height: rh(7),
    backgroundColor: '#ddd',
    width: rh(7),
    borderRadius: 100,
    overflow: 'hidden',
    marginVertical: rh(1),
  },
  imageStyle: {
    height: '100%',
    width: '100%',
  },
  row: {flexDirection: 'row'},
});
