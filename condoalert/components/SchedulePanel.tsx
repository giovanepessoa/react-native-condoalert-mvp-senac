import type { PropsWithChildren } from "react";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native";
import { Icon, Card, Text } from "react-native-paper";

type Props = PropsWithChildren<{
    userType: string;
}>;

export default function SchedulePanel({ userType }: Props) {
    return (
        <ThemedView style={styles.container}>
            <Card>
                <Card.Content style={styles.card}>
                    <ThemedView style={styles.view}>
                        <Icon source="calendar-plus" size={28} />
                        <Text
                            style={[
                                {
                                    color: "#3333333",
                                    fontWeight: 500,
                                },
                            ]}
                            variant="titleMedium"
                        >
                            Agendar reunião
                        </Text>
                    </ThemedView>
                    <Icon source="chevron-right" size={32} />
                </Card.Content>
            </Card>
            <Text
                style={[
                    {
                        color: "#3333333",
                        fontWeight: "bold",
                        marginTop: 20,
                    },
                ]}
                variant="headlineMedium"
            >
                Realizados
            </Text>
            <Card
                style={[
                    {
                        marginTop: 20,
                    },
                ]}
            >
                <Card.Content style={styles.card}>
                    <ThemedView style={styles.view}>
                        <Icon source="calendar-text" size={28} />
                        <Text
                            style={[
                                {
                                    color: "#3333333",
                                    fontWeight: 500,
                                },
                            ]}
                            variant="titleMedium"
                        >
                            Reunião condominial
                        </Text>
                    </ThemedView>
                    <Icon source="chevron-right" size={32} />
                </Card.Content>
            </Card>
            <Card
                style={[
                    {
                        marginTop: 20,
                    },
                ]}
            >
                <Card.Content style={styles.card}>
                    <ThemedView style={styles.view}>
                        <Icon source="calendar-text" size={28} />
                        <Text
                            style={[
                                {
                                    color: "#3333333",
                                    fontWeight: 500,
                                },
                            ]}
                            variant="titleMedium"
                        >
                            Início de reunião
                        </Text>
                    </ThemedView>
                    <Icon source="chevron-right" size={32} />
                </Card.Content>
            </Card>
            <Card
                style={[
                    {
                        marginTop: 20,
                    },
                ]}
            >
                <Card.Content style={styles.card}>
                    <ThemedView style={styles.view}>
                        <Icon source="calendar-text" size={28} />
                        <Text
                            style={[
                                {
                                    color: "#3333333",
                                    fontWeight: 500,
                                },
                            ]}
                            variant="titleMedium"
                        >
                            Reunião condominial
                        </Text>
                    </ThemedView>
                    <Icon source="chevron-right" size={32} />
                </Card.Content>
            </Card>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    card: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#eaf5ff",
    },
    view: {
        flex: 1,
        gap: 5,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "transparent",
    },
});
