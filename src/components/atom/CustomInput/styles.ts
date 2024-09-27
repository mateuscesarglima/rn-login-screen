import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Container = styled.View``;

export const Input = styled.TextInput`
  background-color: rgba(196, 196, 196, 0.2);
  padding: 16px 7px;
  border-radius: 10px;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const IconWrapper = styled.Pressable`
  position: absolute;
  right: 20px;
  top: 15px;
`;

export const Icon = styled(Feather)``;
