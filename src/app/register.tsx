import { useState } from "react";
import { View, Image, StatusBar, Alert } from "react-native";
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { Link, router } from "expo-router";

import { Input } from "@/components/input";
import { Button } from "@/components/button";

import { colors } from "./styles/colors";

export default function Register() {
  const [name, setName] = useState<String>("");
  const [email, setEmail] = useState<String>("");

  const handleRegister = () => {
    if (!name.trim() || !email.trim()) {
      return Alert.alert("Incrição", "Preencha todos os campos!");
    }
    router.push("/ticket");
  };

  return (
    <View className="flex-1 bg-green-500 items-center justify-center p-8">
      <StatusBar barStyle={"light-content"} />
      <Image
        source={require("@/app/assets/logo.png")}
        className="h-16"
        resizeMode="contain"
      />
      <View className="mt-12 gap-3 w-full">
        <Input>
          <FontAwesome6
            color={colors.green[200]}
            size={20}
            name="user-circle"
          />
          <Input.Field placeholder="Nome completo" onChangeText={setName} />
        </Input>
        <Input>
          <MaterialIcons
            color={colors.green[200]}
            size={20}
            name="alternate-email"
          />
          <Input.Field
            placeholder="E-mail"
            keyboardType="email-address"
            onChangeText={setEmail}
          />
        </Input>
        <Button title="Realizar inscrição" onPress={handleRegister} />
        <Link
          href="/"
          className="text-gray-100 text-base font-bold text-center mt-8"
        >
          Já possui ingresso
        </Link>
      </View>
    </View>
  );
}
