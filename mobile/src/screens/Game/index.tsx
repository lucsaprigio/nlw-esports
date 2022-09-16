import { useEffect, useState } from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Entypo } from "@expo/vector-icons";
import { THEME } from '../../theme';

import logoImg from '../../assets/logo-nlw-esports.png';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { Background } from '../../components/Background';
import { GameParams } from '../../@types/navigation';
import { Heading } from '../../components/Heading';

import { styles } from './styles';

export function Game() {
    const [duos, setDuos] = useState<DuoCardProps[]>([]);

    const navigation = useNavigation();
    const route = useRoute();
    const game = route.params as GameParams;

    useEffect(() => {
        fetch(`http://192.16.16.177:3333/${game.id}/ad`)
            .then(response => response.json())
            .then(data => setDuos(data));
    }, []);

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleGoBack}>
                        <Entypo
                            name="chevron-thin-left"
                            color={THEME.COLORS.CAPTION_300}
                            size={20}
                        />
                    </TouchableOpacity>
                    <Image
                        source={logoImg}
                        style={styles.logo}
                    />
                    <View style={styles.right} />
                </View>

                <Image
                    source={{ uri: game.bannerUrl }}
                    style={styles.cover}
                    resizeMode="cover"
                />

                <Heading
                    title={game.title}
                    subtitle="Conecte-se e comece a jogar!"
                />

                <FlatList
                    data={duos}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <DuoCard data={duos[0]} />
                    )}
                />
            </SafeAreaView>
        </Background>
    );
}