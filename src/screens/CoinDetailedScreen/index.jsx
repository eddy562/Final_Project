import react from "react";

import { View, Text, Image } from "react-native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import Coin from "../../../assets/data/crypto.json";
import styles from "./styles";

const CoinDetailedScreen = () => {
  const {
    image: { small },
    name,
    symbol,
    market_data: { market_cap_rank },
  } = Coin;

  return (
    <View style={styles.headerContainer}>
      <Ionicons name="md-chevron-back-outline" size={30} color="white" />
      <View style={styles.tickerContainer}>
        <Image source={{ uri: small }} style={{ width: 25, height: 25 }} />
        <Text style={styles.tickerTitle}>{symbol.toUpperCase()} </Text>
        <View style={styles.rankContainer}>
        <Text style={{ color: "white", fontWeight:'bold' , fontSize: 15}}>#{market_cap_rank} </Text>
      </View>
      </View>
      <EvilIcons name="user" size={30} color="white" />
    </View>
  );
};

export default CoinDetailedScreen;
