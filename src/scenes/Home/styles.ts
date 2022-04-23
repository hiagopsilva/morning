/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Platform } from 'react-native';
import styled from 'styled-components/native';

import {
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';

type PropsActive = {
  active: boolean;
};

type PropsFirst = {
  first: boolean;
};

export const Wrapper = styled.View`
  flex: 1;
  margin-top: ${Platform.OS === 'ios' ? `${getStatusBarHeight() + 8}px` : 0};
  margin-bottom: ${Platform.OS === 'ios' ? `${getBottomSpace()}px` : 0};
  background: #F9F9F9;
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

export const Calendar = styled.View`
  width: 100%;

  margin-top: 26px;
`;

export const ContentCalendar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 22px;
`;

export const TitleCalendar = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: #3a3c43;
`;

export const MonthText = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #3564d8;
`;

export const ContentDays = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  padding-horizontal: 22px;
  margin-top: 14px;
`;

export const WrapperDay = styled.View.attrs((props: PropsActive) => {})`
  width: 74px;
  height: 84px;
  background: ${props => (props.active ? '#7468ef' : '#E5E8EF')};
  border-radius: 8px;

  align-items: center;
  justify-content: center;

  margin-right: 17px;
`;

export const TextDay = styled.Text.attrs((props: PropsActive) => {})`
  color: ${props => (props.active ? '#ffff' : '#B7B0C8')};
  font-weight: 400;
  font-size: 18px;
`;

export const NumberDay = styled.Text.attrs((props: PropsActive) => {})`
  color: ${props => (props.active ? '#ffff' : '#3A3C43')};
  font-weight: 500;
  font-size: 24px;
`;

export const Options = styled.View`
  margin-top: 27px;

  flex-direction: row;
  justify-content: center;
`;

export const TextOptions = styled.Text.attrs(
  (props: PropsActive & PropsFirst) => {},
)`
  margin-right: ${props => (props.first ? 17 : 0)}px;
  color: ${props => (props.active ? '#7468EF' : '#3A3C43')};
  font-weight: 600;
  font-size: 14px;
`;

export const ListTasks = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;

  padding-horizontal: 22px;
  /* margin-top: 8px; */
`;

export const NewTask = styled.View`
  margin-left: auto;
  margin-top: 27px;
`;

export const Task = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;

  margin-bottom: 12px;
`;

export const CheckTask = styled.View`
  width: 32px;
  height: 32px;
  background: #c4c4c4;
  border-radius: 16px;

  margin-right: 12px;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: '#555454',
})`
  background: ${props => (props.new ? 'transparent' : '#ffff')};
  border: ${props => (props.new ? 'none' : '1px solid #e5e8ef;')};
  height: 49px;
  border-radius: 8px;
  width: 302px;

  padding-horizontal: 12px;
  margin-right: 22px;
`;
