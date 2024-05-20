import type { PropsWithChildren, ReactElement } from "react";
import { Dimensions, StyleSheet, useColorScheme } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import Animated, {
    interpolate,
    useAnimatedRef,
    useAnimatedStyle,
    useScrollViewOffset,
} from "react-native-reanimated";

import { ThemedView } from "@/components/ThemedView";

const HEADER_HEIGHT = 250;
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

type Props = PropsWithChildren<{
    activeAnimating: boolean;
    headerImage: ReactElement;
    headerBackgroundColor: { dark: string; light: string };
}>;

export default function ParallaxScrollView({
    activeAnimating,
    children,
    headerImage,
    headerBackgroundColor,
}: Props) {
    const colorScheme = useColorScheme() ?? "light";
    const scrollRef = useAnimatedRef<Animated.ScrollView>();
    const scrollOffset = useScrollViewOffset(scrollRef);

    const headerAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: interpolate(
                        scrollOffset.value,
                        [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                        [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
                    ),
                },
                {
                    scale: interpolate(
                        scrollOffset.value,
                        [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                        [2, 1, 1]
                    ),
                },
            ],
        };
    });

    return (
        <ThemedView style={styles.container}>
            <ActivityIndicator
                style={[
                    {
                        width: windowWidth,
                        height: windowHeight,
                        position: "absolute",
                        backgroundColor: MD2Colors.black,
                        opacity: activeAnimating ? 0.8 : 0,
                        zIndex: activeAnimating ? 999 : 0,
                    },
                ]}
                size="large"
                animating={activeAnimating}
                color={MD2Colors.blue400}
            />
            <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
                <Animated.View
                    style={[
                        styles.header,
                        { backgroundColor: headerBackgroundColor[colorScheme] },
                        headerAnimatedStyle,
                    ]}
                >
                    {headerImage}
                </Animated.View>
                <ThemedView style={styles.content}>{children}</ThemedView>
            </Animated.ScrollView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 250,
        overflow: "hidden",
    },
    content: {
        flex: 1,
        padding: 20,
        gap: 25,
        overflow: "hidden",
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
});
