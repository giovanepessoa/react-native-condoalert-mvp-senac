import React, { useRef, useEffect } from "react";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { Image, Dimensions, StyleSheet, Alert } from "react-native";
import { router } from "expo-router";
import { Text, TextInput, SegmentedButtons, Button } from "react-native-paper";
import { useForm } from "react-hook-form";
import { db } from "@/data/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

const { handleSubmit } = useForm();

export default function LoginScreen() {
    const emailRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();

    const [indicator, setIndicator] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [segment, setSegment] = React.useState("");

    async function getUser() {
        setIndicator(true);

        let found = false;

        const q = query(
            collection(db, "users"),
            where("email", "==", email),
            where("segment", "==", segment)
        );

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            if (doc.data().password == password) found = true;
        });

        setIndicator(false);

        if (found) {
            switch (segment) {
                case "sindico":
                    router.navigate("(tabs-manager)");
                    break;
            }
        } else {
            Alert.alert("Acesso inválido! Verifique e-mail ou senha.");
            return;
        }
    }

    const onSubmitToLogin = async () => {
        /*
        if (!email) {
            Alert.alert("Informe o E-mail do usuário!");

            if (emailRef.current !== undefined) {
                emailRef.current.focus();
            }
            return;
        }

        if (!password) {
            Alert.alert("Informe a Senha do usuário!");

            if (passwordRef.current !== undefined) {
                passwordRef.current.focus();
            }
            return;
        }

        if (!segment) {
            Alert.alert("Selecione o Tipo de usuário! Síndico, Condômino...");
            return;
        }
        */

        await getUser();
    };

    const onSubmitToCreateAccount = () => {
        router.navigate("(user)/new-user");
    };

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
                    Bem bindo(a)!
                </Text>
                <Text
                    style={[
                        {
                            color: "#3333333",
                            fontWeight: 500,
                        },
                    ]}
                    variant="titleMedium"
                >
                    Faça login em sua conta
                </Text>
            </ThemedView>
            <ThemedView style={styles.inputView}>
                <TextInput
                    placeholder={"E-mail"}
                    left={<TextInput.Icon icon="account" />}
                    style={[
                        {
                            height: 40,
                            margin: 0,
                            backgroundColor: "#ffffff",
                        },
                    ]}
                    ref={emailRef}
                    onChangeText={setEmail}
                />
                <TextInput
                    secureTextEntry
                    placeholder={"Senha"}
                    left={<TextInput.Icon icon="lock" />}
                    style={[
                        {
                            height: 40,
                            margin: 0,
                            backgroundColor: "#ffffff",
                        },
                    ]}
                    ref={passwordRef}
                    onChangeText={setPassword}
                />
            </ThemedView>
            <ThemedView style={styles.segmentView}>
                <SegmentedButtons
                    value={segment}
                    theme={{ colors: { primary: "green" } }}
                    buttons={[
                        {
                            value: "sindico",
                            label: "Sindico",
                            showSelectedCheck: true,
                        },
                        {
                            value: "condominio",
                            label: "Condomínio",
                            showSelectedCheck: true,
                        },
                        {
                            value: "porteiro",
                            label: "Porteiro",
                            showSelectedCheck: true,
                        },
                    ]}
                    onValueChange={setSegment}
                />
            </ThemedView>
            <ThemedView style={styles.buttonView}>
                <Button
                    icon="check"
                    mode="contained"
                    textColor="#ffffff"
                    buttonColor="#2196f3"
                    style={[
                        {
                            width: 100,
                            height: 40,
                        },
                    ]}
                    onPress={handleSubmit(onSubmitToLogin)}
                >
                    Entrar
                </Button>
            </ThemedView>
            <ThemedView style={styles.linkView}>
                <Text
                    style={[
                        {
                            fontWeight: "bold",
                        },
                    ]}
                    variant="titleMedium"
                >
                    Esqueceu sua senha?
                </Text>
                <Button
                    mode="text"
                    textColor="#2196f3"
                    buttonColor="#ffffff"
                    onPress={handleSubmit(onSubmitToCreateAccount)}
                >
                    Criar conta
                </Button>
            </ThemedView>
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
    titleView: {
        gap: 0,
        marginBottom: 20,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
    inputView: {
        gap: 10,
        backgroundColor: "#ffffff",
    },
    segmentView: {
        margin: 0,
        backgroundColor: "#ffffff",
    },
    buttonView: {
        flexDirection: "column",
        alignItems: "center",
        margin: 0,
        backgroundColor: "#ffffff",
    },
    linkView: {
        gap: 10,
        flexDirection: "column",
        alignItems: "center",
        marginTop: 20,
        alignContent: "stretch",
        backgroundColor: "#ffffff",
    },
});
