import React, { useRef, useEffect } from "react";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import SchedulePanel from "@/components/SchedulePanel";
import { Image, Dimensions, StyleSheet } from "react-native";

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
            <SchedulePanel userType="sindico"></SchedulePanel>
        </ParallaxScrollView>
    );
}

const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    reactLogo: {
        width: windowWidth,
        // height: "auto",
        bottom: 0,
        left: 0,
        position: "absolute",
    },
});
