import { Text, StyleSheet, View } from 'react-native';

function SpurtTile() {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Text>Exercise Icon</Text>
      </View>
      <View style={styles.exerciseInfo}>
        <Text style={styles.title}>Exercise Title</Text>
        <Text style={styles.time}>Time to Complete</Text>
      </View>
    </View>
  );
}

export default SpurtTile;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FE7F2D',
    width: 'auto',
    padding: 16,
    gap: 16,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 24,
    margin: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignItems: 'center',
    color: '#233D4D',
  },
  time: {
    color: '#233D4D',
  },
  exerciseInfo: {},
});
