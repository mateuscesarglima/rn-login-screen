import React from "react";

import * as S from "./styles";
import { TextProps } from "react-native";

export type TextTypesType = {
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

type ThemedText = TextProps & {
  type?: TextTypesType;
};

export const ThemedText = ({ type, ...rest }: ThemedText) => {
  return <S.Container {...rest} />;
};
