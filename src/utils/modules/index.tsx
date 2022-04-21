import styled from 'styled-components/native';
import { isEmpty } from 'lodash';

export {
  getTheme,
  ifStyle,
  toOnlyNumbers,
  currencyParser,
  currencyToNumber,
} from '@platformbuilders/helpers';
export { isIOS } from '@platformbuilders/helpers/native';
export { scale, verticalScale, moderateScale } from 'react-native-size-matters';
export { default as AlertMessage } from 'react-native-flash-message';
export { showMessage } from 'react-native-flash-message';
export { default as AsyncStorage } from '@react-native-async-storage/async-storage';

export { styled, isEmpty };
