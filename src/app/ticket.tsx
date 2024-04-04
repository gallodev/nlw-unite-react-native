import { useState } from "react";
import {
  View,
  Text,
  Alert,
  Modal,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import { colors } from "./styles/colors";

import { Header } from "@/components/header";
import { Credential } from "@/components/credential";
import { Button } from "@/components/button";
import { QrCode } from "@/components/qrcode";

export default function Ticket() {
  const [image, setImage] = useState("");
  const [expandQRCode, setExpandQRCode] = useState(false);

  async function handleSelectImage() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
      });

      if (result.assets) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Foto", "Não foi possível selecionar a imagem.");
    }
  }

  return (
    <View className="flex-1 bg-green-500">
      <StatusBar barStyle={"light-content"} />
      <Header title="Minha credêncial" />
      <ScrollView
        className="-mt-28 -z-10"
        contentContainerClassName="px-8 pb-8"
        showsVerticalScrollIndicator={false}
      >
        <Credential
          image={image}
          onChangeAvatar={handleSelectImage}
          onExpandQRCode={() => setExpandQRCode(true)}
        />
        <FontAwesome
          name="angle-double-down"
          size={24}
          color={colors.gray[300]}
          className="self-center my-6"
        />
        <Text className="text-white font-bold text-2xl mt-4">
          Compartilhar credêncial
        </Text>
        <Text className="text-white font-regular mt-1 mb-6 text-base">
          Mostre ao mundo que você vai participar do Unite Summit!
        </Text>
        <Button title="Compartilhar"></Button>
        <TouchableOpacity activeOpacity={0.8} className="mt-10">
          <Text className="text-base text-white font-bold text-center">
            Remover ingresso
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <Modal visible={expandQRCode} statusBarTranslucent animationType="fade">
        <View className="flex-1 bg-green-500 items-center justify-center">
          <QrCode value="teste" size={300} />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setExpandQRCode(false)}
          >
            <Text className="font-body text-orange-500 text-sm mt-10 text-center">
              Fechar QRCode
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
