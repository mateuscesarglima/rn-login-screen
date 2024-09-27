import { CustomButton } from "@/components/atom/CustomButton";
import { CustomInput } from "@/components/atom/CustomInput";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as C from "./styles";
import { useState } from "react";

export default function SignIn() {
  const insets = useSafeAreaInsets();
  const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);
  console.log("🚀 ~ SignIn ~ isPasswordVisible:", isPasswordVisible);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <C.Container insets={insets}>
      <C.ImageWrapper>
        <C.Image source={require("@/assets/images/signin_image.png")} />
        <C.Title>Welcome back</C.Title>
        <C.Subtitle>Sign in to access your account</C.Subtitle>
      </C.ImageWrapper>
      <C.InputWrapper>
        <CustomInput
          placeholder="Enter your email"
          placeholderTextColor={"#00000087"}
          iconType="mail"
        />
        <CustomInput
          placeholder="Enter your password"
          placeholderTextColor={"#00000087"}
          iconType={isPasswordVisible ? "eye" : "eye-off"}
          togglePasswordVisibility={togglePasswordVisibility}
          secureTextEntry={!isPasswordVisible}
        />
      </C.InputWrapper>
      <C.Footer insets={insets}>
        <CustomButton text="Next" activeOpacity={0.8} icon />
        <C.NewMemberWrapper>
          <C.NewMemberText>
            New member?{" "}
            <C.LinkText href={"/(public)/signup"}>Register now</C.LinkText>
          </C.NewMemberText>
        </C.NewMemberWrapper>
      </C.Footer>
    </C.Container>
  );
}
