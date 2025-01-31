import { StyleSheet, Text, View, SafeAreaView, Image,ScrollView } from "react-native";
import React ,{useContext} from "react";
import FitnessCards from "../components/FitnessCards";
import { FitnessItems } from "../Context";

const HomeScreen = () => {
  const {
   
    minutes,
  
    calories,

    workout,
  } = useContext(FitnessItems);
  return (
    <ScrollView style={{marginTop:40}}>
      <View
        style={{
          backgroundColor: "#8F00FF",  //CD853F
          padding: 10,
          height: 200,
          width: "100%",
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
          HOME WORKOUT
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
              {workout}
            </Text>
            <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>
              WORKOUTS
            </Text>
          </View>

          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
              {calories}
            </Text>
            <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>
              KCAL
            </Text>
          </View>

          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
              {minutes}
            </Text>
            <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>
              MINS
            </Text>
          </View>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={{
              width: "90%",
              height: 120,
              marginTop: 20,
              borderRadius: 7,
            }}
            // source={require=('./assets/stone.jpg')}
            source={{
              uri: "https://i.pinimg.com/736x/84/f3/30/84f3308ba51387f89ed81478150e37f5.jpg"
            }}
          />
        </View>
        <FitnessCards/>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});