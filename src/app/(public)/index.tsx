import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <Text style={{ color: "white", fontSize: 25 }}>HOME</Text>
      <Link href={"/(public)/signin"}>
        <Text style={{ color: "white", fontSize: 25 }}>Go to signin</Text>
      </Link>
      <Link href={"/(public)/signup"}>
        <Text style={{ color: "white", fontSize: 25 }}>Go to signUp</Text>
      </Link>
    </View>
  );
}
