import React from "react";
import GoalList from "./components/GoalList";
import "./app.css";

const App = () => {
  const courseGoals= [
    {id: 'cg1', text: 'Finish Course'},
    {id: 'cg2', text: 'Learn all about the course main topis'},
    {id: 'cg3', text: 'Help other students in the course'},
  ];
  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <GoalList goals={courseGoals}/>
    </div>
  );
};

export default App;
