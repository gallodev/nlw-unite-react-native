import { colors } from "@/app/styles/colors";
import QRCodeSvg from "react-native-qrcode-svg";

type Props = {
  value: string;
  size: number;
};

export function QrCode({ value, size }: Props) {
  return (
    <QRCodeSvg
      value={value}
      size={size}
      color={colors.white}
      backgroundColor="transparent"
    />
  );
}
