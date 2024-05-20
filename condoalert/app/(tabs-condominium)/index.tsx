import React, { useRef, useEffect } from "react";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { Image, Dimensions, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export default function ScheduleScreen() {
    const [indicator, setIndicator] = React.useState(false);

    return (
        <ParallaxScrollView
            activeAnimating={indicator}
            headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
            headerImage={
                <Image
                    source={require("@/assets/images/partial-react-logo.png")}
                    style={styles.reactLogo}
                />
            }
        >
            <ThemedView style={styles.titleView}>
                <Text
                    style={[
                        {
                            color: "#3333333",
                            fontWeight: "bold",
                        },
                    ]}
                    variant="headlineMedium"
                >
                    Agenda
                </Text>
            </ThemedView>
        </ParallaxScrollView>
    );
}

const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    titleView: {
        gap: 0,
        marginBottom: 20,
        flexDirection: "column",
        alignItems: "flex-start",
        backgroundColor: "#ffffff",
    },
    reactLogo: {
        width: windowWidth,
        // height: "auto",
        bottom: 0,
        left: 0,
        position: "absolute",
    },
});
