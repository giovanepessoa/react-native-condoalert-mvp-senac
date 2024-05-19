import React, { useRef } from "react";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { Image, Dimensions, StyleSheet, Alert } from "react-native";
import { router } from "expo-router";
import { Text, TextInput, SegmentedButtons, Button } from "react-native-paper";
import { useForm } from "react-hook-form";

const { setValue, handleSubmit } = useForm();

export default function NewUserScreen() {
    const nameRef = useRef<HTMLInputElement>();
    const emailRef = useRef<HTMLInputElement>();
    const cellphoneRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [cellphone, setCellphone] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [segment, setSegment] = React.useState("");

    const onSubmitToCreateAccount = () => {
        if (!name) {
            Alert.alert("Informe o Nome do usuário!");

            if (nameRef.current !== undefined) {
                nameRef.current.focus();
            }
            return;
        }

        if (!email) {
            Alert.alert("Informe o E-mail do usuário!");

            if (emailRef.current !== undefined) {
                emailRef.current.focus();
            }
            return;
        }

        if (!cellphone) {
            Alert.alert("Informe o Celular do usuário!");

            if (cellphoneRef.current !== undefined) {
                cellphoneRef.current.focus();
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
    };

    const onSubmitToLogin = () => {
        router.navigate("(login)");
    };

    return (
        <ParallaxScrollView
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
                    Crie sua conta!
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
                    Insira seus dados
                </Text>
            </ThemedView>
            <ThemedView style={styles.inputView}>
                <TextInput
                    placeholder={"Nome"}
                    left={<TextInput.Icon icon="account" />}
                    style={[
                        {
                            height: 40,
                            margin: 0,
                            backgroundColor: "#ffffff",
                        },
                    ]}
                    ref={nameRef}
                    onChangeText={setName}
                />
                <TextInput
                    placeholder={"E-mail"}
                    left={<TextInput.Icon icon="email" />}
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
                    placeholder={"Celular"}
                    left={<TextInput.Icon icon="phone" />}
                    style={[
                        {
                            height: 40,
                            margin: 0,
                            backgroundColor: "#ffffff",
                        },
                    ]}
                    ref={cellphoneRef}
                    onChangeText={setCellphone}
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
                    buttons={[
                        {
                            value: "sindico",
                            label: "Sindico",
                        },
                        {
                            value: "condominio",
                            label: "Condomínio",
                        },
                        {
                            value: "porteiro",
                            label: "Porteiro",
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
                    onPress={handleSubmit(onSubmitToCreateAccount)}
                >
                    Criar
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
                    Já tem uma conta?
                </Text>
                <Button
                    mode="text"
                    textColor="#2196f3"
                    buttonColor="#ffffff"
                    onPress={handleSubmit(onSubmitToLogin)}
                >
                    Entrar
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
        marginTop: 20,
        marginBottom: 20,
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
