import { Link } from "expo-router";
import { EdgeInsets } from "react-native-safe-area-context";
import styled from "styled-components/native";

type ContainerType = {
  insets: EdgeInsets;
};

export const Container = styled.View<ContainerType>`
  flex: 1;
  align-items: center;
  padding-top: ${(props) => props.insets.top}px;
  padding-right: 20px;
  padding-left: 20px;
`;

export const ImageWrapper = styled.View`
  position: relative;
  align-items: center;
  margin-top: 150px;
`;

export const Image = styled.Image`
  position: absolute;
  top: -135px;
  left: -25px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 24px;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  margin-top: 5px;
  font-family: ${({ theme }) => theme.fonts.light};
`;

export const InputWrapper = styled.View`
  width: 100%;
  margin-top: 100px;
  gap: 12px;
`;

export const Input = styled.TextInput``;

export const Footer = styled.View<{ insets: EdgeInsets }>`
  margin-top: auto;
  width: 100%;
  margin-bottom: ${({ insets }) => insets.bottom}px;
`;

export const NewMemberWrapper = styled.View`
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;

export const NewMemberText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const LinkText = styled(Link)`
  color: ${({ theme }) => theme.colors.main};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
