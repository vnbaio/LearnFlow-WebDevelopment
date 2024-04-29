// Sample data to store workouts and goals
let workouts = [];
let goals = [];

function logWorkout() {
    const activity = document.getElementById('activity').value;
    const duration = document.getElementById('duration').value;

    const workout = {
        activity,
        duration,
        date: new Date().toLocaleString(),
    };

    workouts.push(workout);
    displayProgress();
}

function setGoal() {
    const goalActivity = document.getElementById('goal-activity').value;
    const goalDuration = document.getElementById('goal-duration').value;

    const goal = {
        activity: goalActivity,
        duration: goalDuration,
    };

    goals.push(goal);
    displayProgress();
}

function displayProgress() {
    const progressList = document.getElementById('progress-list');
    progressList.innerHTML = '';

    // Display workouts
    workouts.forEach(workout => {
        const workoutItem = document.createElement('div');
        workoutItem.className = 'progress-item';
        workoutItem.innerHTML = `<strong>${workout.activity}</strong> - ${workout.duration} minutes - ${workout.date}`;
        progressList.appendChild(workoutItem);
    });

    // Display goals
    goals.forEach(goal => {
        const goalItem = document.createElement('div');
        goalItem.className = 'progress-item goal';
        goalItem.innerHTML = `<strong>${goal.activity} Goal:</strong> ${goal.duration} minutes`;
        progressList.appendChild(goalItem);
    });
}
