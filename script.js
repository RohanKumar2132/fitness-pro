
// ==================== AI DIET PLANNER (HOME & DIET PAGE) ====================
function generateDietPlan() {
    const age = parseInt(document.getElementById("age")?.value);
    const gender = document.getElementById("gender")?.value;
    const goal = document.getElementById("goal")?.value;
    const activity = document.getElementById("activity")?.value;
    const dietOutput = document.getElementById("diet-plan-output");

    if (!age || !gender || !goal || !activity) {
        alert("Please fill in all the fields to generate a diet plan.");
        return;
    }

    let dietPlan = [];

    // AI Diet Logic
    if (goal === "weight-loss") {
        dietPlan = [
            { meal: "Breakfast", food: "Oatmeal with fruits", quantity: "1 bowl" },
            { meal: "Lunch", food: "Grilled chicken with veggies", quantity: "200g" },
            { meal: "Snack", food: "Green tea + almonds", quantity: "10 pieces" },
            { meal: "Dinner", food: "Salad with boiled eggs", quantity: "1 plate" }
        ];
    } 
    else if (goal === "muscle-gain") {
        dietPlan = [
            { meal: "Breakfast", food: "Eggs & whole grain toast", quantity: "4 eggs + 2 slices" },
            { meal: "Lunch", food: "Chicken breast + rice + broccoli", quantity: "250g" },
            { meal: "Snack", food: "Protein shake + banana", quantity: "1 glass + 1 banana" },
            { meal: "Dinner", food: "Fish + sweet potato", quantity: "200g" }
        ];
    } 
    else {
        dietPlan = [
            { meal: "Breakfast", food: "Greek yogurt with honey", quantity: "1 cup" },
            { meal: "Lunch", food: "Quinoa + vegetables", quantity: "200g" },
            { meal: "Snack", food: "Nuts + apple", quantity: "10 nuts + 1 apple" },
            { meal: "Dinner", food: "Grilled tofu + salad", quantity: "150g" }
        ];
    }

    // Render the plan in the table
    dietOutput.innerHTML = "";
    dietPlan.forEach(item => {
        dietOutput.innerHTML += `
            <tr>
                <td>${item.meal}</td>
                <td>${item.food}</td>
                <td>${item.quantity}</td>
            </tr>`;
    });
}

// Attach event listener for both Home and Diet pages
document.getElementById("generateDietBtn")?.addEventListener("click", generateDietPlan);

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth" });
    });
});

// ==================== WORKOUT TIMER ====================
let workoutStartTime = null;
let workoutTimerInterval = null;
const exerciseMETs = {
    "Walking": 3.8,
    "Running": 9.8,
    "Pushups": 8.0,
    "Pullups": 8.5,
    "Rope Jumping": 12.0,
    "Swimming": 7.0,
    "Weight Lifting": 6.0,
    "Cycling": 6.0,
    "Plank": 4.0,
    "Squats": 8.0,
    "Yoga": 2.5,
    "Sitting": 1.3
};

const startWorkoutBtn = document.getElementById("startWorkoutBtn");
const stopWorkoutBtn = document.getElementById("stopWorkoutBtn");
const workoutTimerDisplay = document.getElementById("workout-timer");
const caloriesDisplay = document.getElementById("calories-result");

if (startWorkoutBtn && stopWorkoutBtn) {
    startWorkoutBtn.addEventListener("click", () => {
        const weight = parseFloat(document.getElementById("user-weight")?.value);
        const selectedExercises = Array.from(document.querySelectorAll(".exercise-list input:checked"))
            .map(cb => cb.value);

        if (!weight || selectedExercises.length === 0) {
            alert("Enter weight and select at least one exercise!");
            return;
        }

        workoutStartTime = new Date();
        clearInterval(workoutTimerInterval);

        workoutTimerInterval = setInterval(() => {
            const elapsed = Math.floor((new Date() - workoutStartTime) / 1000);
            const minutes = String(Math.floor(elapsed / 60)).padStart(2, '0');
            const seconds = String(elapsed % 60).padStart(2, '0');
            workoutTimerDisplay.innerText = `${minutes}:${seconds}`;
        }, 1000);

        caloriesDisplay.innerText = "Workout in progress...";
    });

    stopWorkoutBtn.addEventListener("click", () => {
        if (!workoutStartTime) {
            alert("Start your workout first!");
            return;
        }

        clearInterval(workoutTimerInterval);
        const elapsedSeconds = Math.floor((new Date() - workoutStartTime) / 1000);
        const weight = parseFloat(document.getElementById("user-weight")?.value);
        const selectedExercises = Array.from(document.querySelectorAll(".exercise-list input:checked"))
            .map(cb => cb.value);

        let totalCalories = 0;
        const minutes = elapsedSeconds / 60;
        selectedExercises.forEach(ex => {
            if (exerciseMETs[ex]) {
                totalCalories += exerciseMETs[ex] * weight * (minutes / 60);
            }
        });

        caloriesDisplay.innerText = `You burned ${Math.round(totalCalories)} kcal`;
        workoutStartTime = null;
    });
}

// ==================== CONTACT FORM (MAILTO) ====================
document.getElementById("contactForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const message = document.getElementById("message")?.value.trim();
    const feedback = document.getElementById("contact-feedback");

    if (!name || !email || !message) {
        feedback.style.color = "red";
        feedback.innerText = "Please fill all fields.";
        return;
    }

    window.location.href = `mailto:support@fitnesspro.com?subject=Message from ${name}&body=${encodeURIComponent(message)}`;
    feedback.style.color = "green";
    feedback.innerText = "Redirecting to email client...";
});

// ==================== ACTIVE NAVIGATION LINK ====================
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll(".main-header nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});



// ==================== SLIDESHOW ====================
let currentSlide = 0;
const slides = document.querySelectorAll(".slideshow img");

if (slides.length > 0) {
    slides[currentSlide].classList.add("active"); // Show first slide
    setInterval(() => {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
    }, 4000); // Change every 4 seconds
}



// ==================== BMI CALCULATOR ====================
document.addEventListener("DOMContentLoaded", () => {
    const calculateBtn = document.getElementById("calculateBmiBtn");
    const bmiOutput = document.getElementById("bmi-result-output");

    calculateBtn?.addEventListener("click", () => {
        const height = parseFloat(document.getElementById("height")?.value);
        const weight = parseFloat(document.getElementById("weight")?.value);

        if (!height || !weight || height <= 0 || weight <= 0) {
            alert("⚠ Please enter valid height and weight.");
            return;
        }

        const bmi = weight / ((height / 100) ** 2);
        let category = "";
        let tip = "";
        let color = "";

        if (bmi < 18.5) {
            category = "Underweight";
            tip = "Increase calorie intake with healthy foods and strength training.";
            color = "#f39c12";
        } 
        else if (bmi < 24.9) {
            category = "Normal Weight";
            tip = "Maintain a balanced diet and stay active.";
            color = "#27ae60";
        } 
        else if (bmi < 29.9) {
            category = "Overweight";
            tip = "Reduce sugar intake, focus on cardio and healthy meals.";
            color = "#e67e22";
        } 
        else {
            category = "Obese";
            tip = "Consult a healthcare professional and follow a strict fitness plan.";
            color = "#e74c3c";
        }

        bmiOutput.innerHTML = `
            <tr>
                <td style="font-weight:bold; color:${color}">${bmi.toFixed(2)}</td>
                <td>${category}</td>
                <td>${tip}</td>
            </tr>
        `;
    });
});




document.addEventListener("DOMContentLoaded", () => {
    const weightInput = document.getElementById("user-weight");
    const exerciseCheckboxes = document.querySelectorAll(".workout-table input[type='checkbox']");
    const startBtn = document.getElementById("startWorkoutBtn");
    const stopBtn = document.getElementById("stopWorkoutBtn");
    const resetBtn = document.getElementById("resetWorkoutBtn");
    const timerDisplay = document.getElementById("workout-timer");
    const caloriesResult = document.getElementById("calories-result");

    let timerInterval = null;
    let elapsedSeconds = 0;
    let totalCalories = 0;
    let isWorkoutRunning = false;

    // Get selected exercises and their MET values
    function getSelectedExercises() {
        const selected = [];
        exerciseCheckboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                const metValue = parseFloat(checkbox.parentElement.nextElementSibling.nextElementSibling.innerText);
                selected.push({ name: checkbox.value, met: metValue });
            }
        });
        return selected;
    }

    // Format time for display
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
        const secs = (seconds % 60).toString().padStart(2, "0");
        return `${mins}:${secs}`;
    }

    // Calculate calories burned
    function calculateCalories(weight, exercises, durationMinutes) {
        let calories = 0;
        exercises.forEach((ex) => {
            calories += (ex.met * 3.5 * weight / 200) * durationMinutes; 
        });
        return calories;
    }

    // Start Workout
    startBtn.addEventListener("click", () => {
        const weight = parseFloat(weightInput.value);
        const selectedExercises = getSelectedExercises();

        if (!weight || weight <= 0) {
            alert("⚠ Please enter a valid weight!");
            return;
        }
        if (selectedExercises.length === 0) {
            alert("⚠ Please select at least one exercise!");
            return;
        }

        if (!isWorkoutRunning) {
            isWorkoutRunning = true;
            timerInterval = setInterval(() => {
                elapsedSeconds++;
                const durationMinutes = elapsedSeconds / 60;
                totalCalories = calculateCalories(weight, selectedExercises, durationMinutes);

                timerDisplay.innerText = formatTime(elapsedSeconds);
                caloriesResult.innerText = `${totalCalories.toFixed(2)} kcal`;
            }, 1000);
        }
    });

    // Stop Workout
    stopBtn.addEventListener("click", () => {
        if (!isWorkoutRunning) {
            alert("⚠ Start the workout first!");
            return;
        }
        clearInterval(timerInterval);
        isWorkoutRunning = false;
    });

    // Reset Workout
    resetBtn.addEventListener("click", () => {
        clearInterval(timerInterval);
        elapsedSeconds = 0;
        totalCalories = 0;
        isWorkoutRunning = false;
        timerDisplay.innerText = "00:00";
        caloriesResult.innerText = "0 kcal";
        weightInput.value = "";
        exerciseCheckboxes.forEach(cb => cb.checked = false);
    });
});

// === SLEEP MONITORING LOGIC ===
const sleepInput = document.getElementById("sleep-hours");
const trackSleepBtn = document.getElementById("track-sleep-btn");
const sleepFeedback = document.getElementById("sleep-feedback");

trackSleepBtn.addEventListener("click", () => {
  const sleepHours = parseFloat(sleepInput.value);

  if (!sleepHours || sleepHours < 0 || sleepHours > 24) {
    sleepFeedback.textContent = "⚠ Please enter valid sleep hours (0-24).";
    sleepFeedback.style.color = "red";
    return;
  }

  if (sleepHours < 6) {
    sleepFeedback.textContent = "😴 Poor Sleep: You should sleep more for better recovery!";
    sleepFeedback.style.color = "orange";
  } 
  else if (sleepHours >= 6 && sleepHours <= 8) {
    sleepFeedback.textContent = "✅ Good Sleep: Perfect! Your body will recover well.";
    sleepFeedback.style.color = "green";
  } 
  else {
    sleepFeedback.textContent = "💤 Oversleeping: Try to maintain 7-8 hours for optimal health.";
    sleepFeedback.style.color = "blue";
  }
});
<script>
  const loginBtn = document.getElementById('login-btn');
  const createAccountLink = document.getElementById('create-account-link');
  const createAccountForm = document.getElementById('create-account-form');
  const createBtn = document.getElementById('create-btn');

  // Toggle create account form
  createAccountLink.addEventListener('click', (e) => {
    e.preventDefault();
    createAccountForm.style.display = createAccountForm.style.display === 'block' ? 'none' : 'block';
  });

  // Create account logic
  createBtn.addEventListener('click', () => {
    const newUsername = document.getElementById('new-username').value.trim();
    const newPassword = document.getElementById('new-password').value.trim();

    if (!newUsername || !newPassword) {
      alert('Please enter username and password');
      return;
    }

    // Save user data in localStorage
    localStorage.setItem('fitnessUser', JSON.stringify({
      username: newUsername,
      password: newPassword,
      name: newUsername,
      email: '',
      age: '',
      height: '',
      weight: '',
      gender: ''
    }));

    alert('Account created successfully! You can now login.');
    createAccountForm.style.display = 'none';
  });

  // Login logic
  loginBtn.addEventListener('click', () => {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    const savedUser = JSON.parse(localStorage.getItem('fitnessUser'));

    if (!savedUser || savedUser.username !== username || savedUser.password !== password) {
      alert('Invalid username or password!');
      return;
    }

    // Store active user session
    localStorage.setItem('loggedInUser', username);

    // Redirect to profile page
    window.location.href = 'profile.html';
  });
</script>


