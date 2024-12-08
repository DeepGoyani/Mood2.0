import './App.css'; 

const habits = [
  { id: 1, name: 'Drink Water' },
  { id: 2, name: 'Exercise' },
  { id: 3, name: 'Meditate' },
];

const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

const HabitTracker = () => {
  const handleDayClick = (habitId, day) => {
    const key = `habit-${habitId}-day-${day}`;
    const currentState = localStorage.getItem(key);
    localStorage.setItem(key, currentState === 'true' ? 'false' : 'true');
    document.getElementById(key).classList.toggle('completed');
  };

  return (
    <div className="tracker-container">
      <header className="header">
        <h1>Habit Tracker</h1>
      </header>

      {habits.map((habit) => (
        <div key={habit.id} className="habit">
          <h2>{habit.name}</h2>
          <div className="habit-grid">
            {daysInMonth.map((day) => {
              const key = `habit-${habit.id}-day-${day}`;
              const completed = localStorage.getItem(key) === 'true';
              return (
                <div
                  key={day}
                  id={key}
                  className={`day ${completed ? 'completed' : ''}`}
                  onClick={() => handleDayClick(habit.id, day)}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
export default HabitTracker;
