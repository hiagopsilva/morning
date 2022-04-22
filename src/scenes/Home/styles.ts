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

export const Header = styled.View`
  flex-direction: row;
  padding-horizontal: 22px;
  padding-vertical: 12px;
  justify-content: space-between;
`;

export const Content = styled.View``;

export const Title = styled.Text`
  /* font-family: 'Poppins-Regular'; */
  color: #3a3c43;
  font-size: 24px;
  font-weight: 600;
`;

export const Description = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: #555454;
`;

export const TextSpan = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #555454;
`;

export const Avatar = styled.View`
  width: 48px;
  height: 48px;
  background: #ffffff;
  border-radius: 8px;
`;
