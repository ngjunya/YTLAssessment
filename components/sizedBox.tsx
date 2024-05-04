import React from "react";
import { View } from "react-native";

interface SizedBoxProps {
  width: number;
  height: number;
}

const SizedBox = ({ width, height }: SizedBoxProps) => {
  return (
    <View style={[{ width, height }]} />
  );
};

export default SizedBox;
