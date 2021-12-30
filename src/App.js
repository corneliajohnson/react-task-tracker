import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:20pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Walmart",
      day: "Jan 20th at 11:00am",
      reminder: true,
    },
    {
      id: 3,
      text: "Dentist Appointment",
      day: "Feb 17th at 7:15pm",
      reminder: true,
    },
    {
      id: 4,
      text: "Flight",
      day: "Feb 10th at 6:45am",
      reminder: true,
    },
  ]);
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
