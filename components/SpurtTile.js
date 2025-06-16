import { Text, StyleSheet, View, Pressable } from 'react-native';

function SpurtTile({ exercise, onPressHandler }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}
      onPress={onPressHandler}
    >
      <View style={styles.mainContainer}>
        <View>
          <Text>{exercise.icon}</Text>
        </View>
        <View style={styles.exerciseInfo}>
          <Text style={styles.title}>{exercise.title}</Text>
          <Text style={styles.time}>{exercise.time}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default SpurtTile;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FE7F2D',
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
    textAlign: 'center',
    color: '#233D4D',
  },
  time: {
    color: '#233D4D',
  },
  pressable: {
    borderRadius: 24,
  },
  pressed: {
    opacity: 0.7,
  },
  exerciseInfo: {},
});
