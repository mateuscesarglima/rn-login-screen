import React from "react";

import * as S from "./styles";
import { TouchableOpacityProps } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";

export type CustomButtonTypes = {
  type: "primary" | "secondary" | "tertiary";
};

type CustomButtonType = {
  type?: CustomButtonTypes;
  text: string;
  icon?: boolean;
} & TouchableOpacityProps;

export const CustomButton = ({
  type,
  text,
  icon,
  ...rest
}: CustomButtonType) => {
  return (
    <S.Container {...rest}>
      <S.ButtonText>{text}</S.ButtonText>
      {icon && <Ionicons name="chevron-forward" color={"#FFF"} size={22} />}
    </S.Container>
  );
};
