import react from "react";

import { View, Text, Image, Dimensions } from "react-native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import Coin from "../../../assets/data/crypto.json";
import CoinDetailedHeader from "./components/CoinDetailedHeader";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
/* import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
} from "@rainbow-me/animated-charts"; */  // I think the issue is here 

const CoinDetailedScreen = () => {
  const {
    image: { small },
    name,
    symbol,
    prices,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
  } = Coin;
  const percentageColor = price_change_percentage_24h < 0 ? "#ea3943" : "#16c784";
  //const screenWidth= Dimensions.get("window").width;

  return (
    <View style={{paddingHorizontal:10}}>
      <CoinDetailedHeader 
      image={small} 
      symbol={symbol}
      marketCapRank={market_cap_rank} />
<View style ={styles.priceContainer}>
    <View>
      < Text style ={styles.name}>{name}</Text>
      < Text style ={styles.currentPrice}>${current_price.usd}</Text>
      </View>
      <View style={{backgroundColor:percentageColor,paddingHorizontal:3, paddingVertical:8, borderRadius:5, flexDirection:'row'}}>
      <AntDesign
            name={price_change_percentage_24h < 0 ? 'caretdown':'caretup'}
            size={12}
            color={'white'}
            style={{ alignSelf: "center", marginRight: 5 }}
          />
      <Text style={styles.priceChange}>{
      price_change_percentage_24h. toFixed(2)}%
      </Text></View>
    </View>
    </View>
  );
};

export default CoinDetailedScreen;
