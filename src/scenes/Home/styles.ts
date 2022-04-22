import { Platform } from 'react-native';
import styled from 'styled-components/native';

import {
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';

export const Wrapper = styled.View`
  flex: 1;
  margin-top: ${Platform.OS === 'ios' ? `${getStatusBarHeight() + 8}px` : 0};
  margin-bottom: ${Platform.OS === 'ios' ? `${getBottomSpace()}px` : 0};
v`;

export const Header = styled.View``;

export const Title = styled.Text`
  /* font-family: 'Poppins-Regular'; */
`;

export const Description = styled.Text``;

export const TextSpan = styled.Text``;
