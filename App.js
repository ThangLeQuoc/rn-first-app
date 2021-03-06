import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    if (goalTitle.length === 0) {
      return;
    }

    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  const cancelGoalAdditionalHandler = () => {
    setIsAddMode(false)
  }

  
  return (
    <View style={styles.screen}>
      <Button title="Add new goal" onPress= {() => setIsAddMode(true)} />
      <GoalInput visible = {isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionalHandler} />
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={courseGoals} renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />}>  
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 40
  }
});

// 2:57 https://www.youtube.com/watch?v=qSRrxpdMpVc&t=10291s