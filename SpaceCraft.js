import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const DIRECTIONS = ['N', 'E', 'S', 'W', 'Up', 'Down'];
const SpaceCraft = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);
  const [directionIndex, setDirectionIndex] = useState(0);

  const move = steps => {
    if (DIRECTIONS[directionIndex] === 'N') setY(y + steps);
    if (DIRECTIONS[directionIndex] === 'S') setY(y - steps);
    if (DIRECTIONS[directionIndex] === 'E') setX(x + steps);
    if (DIRECTIONS[directionIndex] === 'W') setX(x - steps);
    if (DIRECTIONS[directionIndex] === 'Up') setZ(z + steps);
    if (DIRECTIONS[directionIndex] === 'Down') setZ(z - steps);
  };

  const turnLeft = () => {
    setDirectionIndex((directionIndex + 3) % 4);
  };

  const turnRight = () => {
    setDirectionIndex((directionIndex + 1) % 4);
  };

  const turnUp = () => {
    setDirectionIndex(4);
  };

  const turnDown = () => {
    setDirectionIndex(5);
  };
  return (
    <View style={{padding: 20}}>
      <Text>
        Spacecraft Position: (x={x}, y={y}, z={z}), Direction:{' '}
        {DIRECTIONS[directionIndex]}
      </Text>
      <TextInput
        placeholder="Enter commands"
        onChangeText={text => {
          const commands = text.trim().split('');
          for (const command of commands) {
            if (command === 'f') move(1);
            else if (command === 'b') move(-1);
            else if (command === 'l') turnLeft();
            else if (command === 'r') turnRight();
            else if (command === 'u') turnUp();
            else if (command === 'd') turnDown();
          }
        }}
      />
    </View>
  );
};

export default SpaceCraft;
