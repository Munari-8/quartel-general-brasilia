import { StyleSheet, Text, View, ScrollView, useWindowDimensions, Platform } from 'react-native';

// Expo
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';

// Fonts
import { useFonts, RobotoCondensed_100Thin, RobotoCondensed_500Medium } from '@expo-google-fonts/roboto-condensed';
import { Plaster_400Regular } from '@expo-google-fonts/plaster';

export default function App() {
  const { width } = useWindowDimensions();
  const isDesktop = width > 768;

  const getFontSize = () => {
    if (width > 1024) return 56;
    if (width > 768) return 40;
    return 28;
  };

  const getBannerHeight = () => {
    if (width > 1024) return 450;
    if (width > 768) return 350;
    return 220;
  };

  const [fontsLoaded] = useFonts({
    RobotoCondensed_100Thin,
    RobotoCondensed_500Medium,
    Plaster_400Regular,
  });

  if (!fontsLoaded) return null;

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
          colors={[
            'transparent',
            'transparent',
            'rgba(0, 0, 0, 0.4)',
            'rgba(0, 0, 0, 0.75)',
            'rgba(245, 245, 245, 0.3)',
            'rgba(245, 245, 245, 0.85)',
            '#f5f5f5'
          ]}
          locations={[0, 0.3, 0.5, 0.7, 0.85, 0.95, 1]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.bannerGradient}
        >
          <Text style={[styles.title, { fontSize, lineHeight: fontSize * 1.15 }]}>
            <Text style={styles.txtThin}>Conheça o </Text>
            <Text style={styles.txtRegular}>Quartel-General do Exército </Text>
            <Text style={styles.txtThin}>em </Text>
            <Text style={styles.txtRegular}>Brasília</Text>
          </Text>
        </LinearGradient>
      </View>

      {/* Subcontainer 1: Videoclipe do YouTube (Web iFrame) */}
      <View style={[styles.subContainer, { flexDirection: isDesktop ? 'row' : 'column' }]}>
        <View style={isDesktop ? styles.videoDesktopLarge : styles.videoMobileLarge}>
          {Platform.OS === 'web' ? (
            <iframe
              src="https://www.youtube.com/embed/RW7Vqskmmas"
              style={{ width: '100%', height: '100%', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : null}
        </View>

        <View style={styles.textWrapper}>
          <Text style={styles.title2}>Alegria, Alegria</Text>
          <Text style={styles.txt}>
            "Caminhando contra o vento, sem lenço e sem documento", trazemos nossa releitura visual inspirada no clássico de Caetano Veloso.{'\n\n'}
            Este videoclipe foi desenvolvido como parte de um projeto escolar vibrante, misturando a genialidade da Tropicália com a imponente arquitetura modernista de Brasília para questionar, sentir e celebrar a nossa cultura!
          </Text>
        </View>
      </View>

      {/* Subcontainer 2: História */}
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
          source={require('./assets/hist/qgex1.jpg')}
          style={isDesktop ? styles.imgDesktop : styles.imgMobile}
          contentFit='cover'
        />
      </View>

      {/* Subcontainer 3: Autor do Projeto */}
      <View style={[styles.subContainer, { flexDirection: isDesktop ? 'row' : 'column' }]}>
        <Image
          source={require('./assets/cult_niemeyer.jpg')}
          style={isDesktop ? styles.imgDesktop : styles.imgMobile}
          contentFit='cover'
        />

        <View style={styles.textWrapper}>
          <Text style={styles.title2}>Autor do Projeto</Text>
          <Text style={styles.txt}>
            O projeto foi concebido por Oscar Niemeyer (1907-2012), renomado arquiteto brasileiro, reconhecido por suas obras modernistas.{'\n\n'}
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

  bannerCard: {
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
  },

  bannerGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    padding: 24,
    paddingBottom: 36,
  },

  title: {
    color: '#FFFFFF',
    textShadow: '0px 2px 6px rgba(0, 0, 0, 0.5)',
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
  },

  // Container para o iframe no Web
  videoDesktopLarge: {
    width: '55%',
    minHeight: 340,
    alignSelf: 'stretch'
  },

  videoMobileLarge: {
    width: '100%',
    height: 240
  }
});