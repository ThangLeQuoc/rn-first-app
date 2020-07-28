import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random.toString(), value: goalTitle }
    ]);
  };

  
  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={courseGoals} renderItem={itemData => <GoalItem onDelete={() => console.log('Does this work ?')} title={itemData.item.value} />}>  
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 40
  }
});

// 2:32 https://www.youtube.com/watch?v=qSRrxpdMpVc&t=10291s