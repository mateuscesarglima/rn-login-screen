import React from "react";

import * as S from "./styles";
import { TextInputProps } from "react-native";
import { Feather } from "@expo/vector-icons";

type CustomInputType = {
  iconType?: "mail" | "eye" | "eye-off";
  showPassword?: boolean;
  togglePasswordVisibility?: () => void;
} & TextInputProps;

export const CustomInput = ({
  iconType,
  showPassword,
  togglePasswordVisibility,
  ...rest
}: CustomInputType) => {
  return (
    <S.Container>
      <S.Input {...rest} />
      <S.IconWrapper onPress={togglePasswordVisibility}>
        <Feather name={iconType} size={20} color={"rgba(0, 0, 0, 0.5)"} />
      </S.IconWrapper>
    </S.Container>
  );
};
