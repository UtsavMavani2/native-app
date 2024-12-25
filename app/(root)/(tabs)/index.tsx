import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="bg-red-600 text-white font-rubik ">
        Welcome to Home Screen
      </Text>
      <Link href="/sign-in">Sign In</Link>
      <Link href="/export">export</Link>
      <Link href="/profile">profile</Link>
      <Link href="/propertices/1">propertices</Link>
    </View>
  );
}
