import React, { useState, useEffect } from "react";
import "../App.css";
import GoalForm from "./GoalForm";
import GoalList from "./GoalList";

const LOCAL_STORAGE_KEY = "goal-list-storage";

function GoalPage() {
   const [goals, setGoals] = useState([]);

   useEffect(() => {
      const storageGoals = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if (storageGoals) {
         setGoals(storageGoals);
      }
   }, []);

   let goalId = goals.length || 1;

   useEffect(() => {
      if (goals.length > 0) {
         localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(goals));
      }
   }, [goals]);

   function addGoal(newGoal) {
      while (goals.find((goal) => goal.id === newGoal.id)) {
         newGoal.id++;
      }
      setGoals([newGoal, ...goals]);
      goalId = newGoal.id + 1;
   }

   function toggleComplete(goalId) {
      setGoals(
          goals.map((goal) => {
             if (goal.id === goalId) {
                return {
                   ...goal,
                   complete: !goal.complete,
                };
             }
             return goal;
          })
      );
   }

   function removeGoal(goalId) {
      setGoals(goals.filter((goal) => goalId !== goal.id));
      if (goals.length === 1) {
         localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([]));
      }
   }

   function updateCheckpoints(goalId, updatedCheckpoints) {
      console.log(updatedCheckpoints);
      setGoals(
          goals.map((goal) => {
             if (goal.id === goalId) {
                goal.checkpoints = updatedCheckpoints;
                goal.complete = !updatedCheckpoints.find(cp => !cp.complete);
             }
             return goal;
          })
      );
   }

   return (
       <div className="App">
          <header className="App-header">
             <h1>Goals</h1>
             <GoalForm addGoal={addGoal} goalId={goalId} />
             <GoalList
                 goals={goals}
                 toggleComplete={toggleComplete}
                 removeGoal={removeGoal}
                 updateCheckpoints={updateCheckpoints}
             />
          </header>
       </div>
   );
}

export default GoalPage;