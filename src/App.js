import React, { useState } from "react";
import GoalList from "./components/GoalList";
import NewGoal from "./components/NewGoal";
import "./app.css";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    {id: 'cg1', text: 'Finish Course'},
    {id: 'cg2', text: 'Learn all about the course main topis'},
    {id: 'cg3', text: 'Help other students in the course'},
  ]);

   

  const handleAddGoal = newGoal => {
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoal)
    })
  };

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={handleAddGoal}/>
      <GoalList goals={courseGoals}/>
    </div>
  );
};

export default App;
