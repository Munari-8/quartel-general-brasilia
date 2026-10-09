import { StyleSheet, Text, View, ScrollView, useWindowDimensions } from 'react-native';

// Expo
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';

//  Fonts
import { useFonts, RobotoCondensed_100Thin, RobotoCondensed_500Medium } from '@expo-google-fonts/roboto-condensed';
import { Plaster_400Regular } from '@expo-google-fonts/plaster';

export default function App() {
  const { width } = useWindowDimensions();
  const isDesktop = width > 768;

  // Responsive banner font size
  const getFontSize = () => {
    if (width > 1024) return 56; // Big desktop
    if (width > 768) return 40;  // Tablet or small desktop
    return 28;                   // Cell phone
  };

  // Responsive banner size
  const getBannerHeight = () => {
    if (width > 1024) return 450; // Big desk
    if (width > 768) return 350;  // Tab/small desk
    return 220;                   // Phone
  };

  const [fontsLoaded] = useFonts({
    RobotoCondensed_100Thin,
    RobotoCondensed_500Medium,
    Plaster_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  };

  const fontSize = getFontSize();
  const bannerHeight = getBannerHeight();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={[styles.bannerCard, { height: bannerHeight }]}>
        <Image
          source={require('./assets/vista-do-predio-do-qg.jpg')}
          style={StyleSheet.absoluteFillObject}
          contentFit='cover'
        />

        <LinearGradient
          colors={['transparent', 'rgba(0, 0, 0, 0.75)']}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.gradientOverlay}
        >
          <Text style={[styles.title, { fontSize, lineHeight: fontSize * 1.15 }]}>
            <Text style={styles.txtThin}>Conheça o </Text>
            <Text style={styles.txtRegular}>Quartel-General do Exército </Text>
            <Text style={styles.txtThin}>em </Text>
            <Text style={styles.txtRegular}>Brasília</Text>
          </Text>
        </LinearGradient>
      </View>

      <View style={[styles.subContainer, { flexDirection: isDesktop ? 'row' : 'column' }]}>
        <View style={styles.textWrapper}>
          <Text style={styles.title2}>História</Text>
          
          <Text style={styles.txt}>
            A criação de Brasília, planejada por Juscelino Kubitschek (1902-1976), foi parte do plano de interiorizar o desenvolvimento do país.{'\n\n'}
            A estrutura do QGEx (Quartel General do Exército) foi realizada como parte da transferência dos principais órgãos do governo e comandos militares para a nova capital federal.{'\n\n'}
            Sua construção durou de 1969 à 1973, porém sua inauguração ocorreu em 1971. Mais recentemente, em 2011, foi tombado pelo Patrimônio do Distrito Federal.
          </Text>
        </View>

        <Image
          source={require('./assets/hist/O Quartel General do Exército (QGEx), denominado historicamente de Forte Caxias, é o edifício-se.jpg')}
          style={isDesktop ? styles.imgDesktop : styles.imgMobile}
          contentFit='cover'
        />
      </View>

      <View style={[styles.subContainer, { flexDirection: isDesktop ? 'row' : 'column' }]}>
        <Image
          source={require('./assets/cult_niemeyer.jpg')}
          style={isDesktop ? styles.imgDesktop : styles.imgMobile}
          contentFit='cover'
        />

        <View style={styles.textWrapper}>
          <Text style={styles.title2}>Autor do Projeto</Text>

          <Text style={styles.txt}>
            O projeto foi concebido por Oscar Niemeyer (1907-2012), renomado arquiteto brasileiro, reconhecido por suas obras obras modernistas.{'\n\n'}
            Além do QGEx e outras obras em Brasília (como o Congresso Nacional e a Catedral de Brasília), Niemeyer também é conhecido por diversas outras contruções mundo a fora, como a Sede das Nações Unidas, a Editora Mondadori e, no Brasil, a Pampulha.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    gap: 20,
    paddingBottom: 32
  },

  subContainer: {
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: 1100,

    overflow: 'hidden',
    borderRadius: 16
  },

  textWrapper: {
    flex: 1,
    padding: 24
  },
  
  rowContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16
  },

  // Banner
  bannerCard: {
    width: '100%',
    height: '66.6%',
    overflow: 'hidden',
    position: 'relative',
  },

  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
    justifyContent: 'flex-end',
    padding: 16,
  },

  // Text
  title: {
    color: '#FFFFFF'
  },

  title2: {
    fontSize: 32,
    fontFamily: 'Plaster_400Regular',

    marginBottom: 16
  },
  
  txt: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333333',
    textAlign: 'justify'
  },

  txtThin: {
    fontFamily: 'RobotoCondensed_100Thin'
  },

  txtRegular: {
    fontFamily: 'RobotoCondensed_500Medium'
  },

  imgDesktop: {
    width: '45%',

    alignSelf: 'stretch'
  },

  imgMobile: {
    width: '100%',
    height: 220
  }
});
