// // ==================== AI DIET PLANNER ====================
// document.getElementById("generateDietBtn")?.addEventListener("click", function () {
//     const age = parseInt(document.getElementById("age")?.value);
//     const gender = document.getElementById("gender")?.value;
//     const goal = document.getElementById("goal")?.value;
//     const activity = document.getElementById("activity")?.value;
//     const dietOutput = document.getElementById("diet-plan-output");

//     if (!age || !gender || !goal || !activity) {
//         alert("Please fill in all the fields to generate a diet plan.");
//         return;
//     }

//     let dietPlan = [];

//     // Simple AI logic (customizable for better personalization)
//     if (goal === "weight-loss") {
//         dietPlan = [
//             { meal: "Breakfast", food: "Oatmeal with fruits", quantity: "1 bowl" },
//             { meal: "Lunch", food: "Grilled chicken with veggies", quantity: "200g" },
//             { meal: "Snack", food: "Green tea + almonds", quantity: "10 pieces" },
//             { meal: "Dinner", food: "Salad with boiled eggs", quantity: "1 plate" }
//         ];
//     } else if (goal === "muscle-gain") {
//         dietPlan = [
//             { meal: "Breakfast", food: "Eggs & whole grain toast", quantity: "4 eggs + 2 slices" },
//             { meal: "Lunch", food: "Chicken breast + rice + broccoli", quantity: "250g" },
//             { meal: "Snack", food: "Protein shake + banana", quantity: "1 glass + 1 banana" },
//             { meal: "Dinner", food: "Fish + sweet potato", quantity: "200g" }
//         ];
//     } else {
//         dietPlan = [
//             { meal: "Breakfast", food: "Greek yogurt with honey", quantity: "1 cup" },
//             { meal: "Lunch", food: "Quinoa + vegetables", quantity: "200g" },
//             { meal: "Snack", food: "Nuts + apple", quantity: "10 nuts + 1 apple" },
//             { meal: "Dinner", food: "Grilled tofu + salad", quantity: "150g" }
//         ];
//     }

//     // Display the diet plan in table format
//     dietOutput.innerHTML = "";
//     dietPlan.forEach(item => {
//         const row = `<tr>
//                         <td>${item.meal}</td>
//                         <td>${item.food}</td>
//                         <td>${item.quantity}</td>
//                     </tr>`;
//         dietOutput.innerHTML += row;
//     });
// });

// // ==================== BMI CALCULATION (Redirection) ====================
// document.querySelector('a[href="bmi.html"]')?.addEventListener("click", function (e) {
//     // Navigation to BMI page will be handled by the browser automatically
//     // If BMI calculations are on BMI page, handle it separately there.
// });

// // ==================== SMOOTH SCROLLING ====================
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener("click", function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute("href"));
//         if (target) target.scrollIntoView({ behavior: "smooth" });
//     });
// });

// // ==================== HEADER ACTIVE LINK ====================
// const currentPage = window.location.pathname.split("/").pop();
// document.querySelectorAll(".main-header nav a").forEach(link => {
//     if (link.getAttribute("href") === currentPage) {
//         link.classList.add("active");
//     }
// });

// // ==================== WORKOUT TIMER ====================
// let workoutStartTime = null;
// let workoutTimerInterval = null;

// const startWorkoutBtn = document.getElementById("startWorkoutBtn");
// const stopWorkoutBtn = document.getElementById("stopWorkoutBtn");
// const workoutTimerDisplay = document.getElementById("workout-timer");
// const caloriesDisplay = document.getElementById("calories-result");

// if (startWorkoutBtn && stopWorkoutBtn) {
//     startWorkoutBtn.addEventListener("click", () => {
//         const weight = parseFloat(document.getElementById("user-weight")?.value);
//         const selectedExercises = Array.from(document.querySelectorAll(".exercise-list input:checked"))
//             .map(cb => cb.value);

//         if (!weight || selectedExercises.length === 0) {
//             alert("Enter weight and select at least one exercise!");
//             return;
//         }

//         workoutStartTime = new Date();
//         clearInterval(workoutTimerInterval);

//         workoutTimerInterval = setInterval(() => {
//             const elapsed = Math.floor((new Date() - workoutStartTime) / 1000);
//             const minutes = String(Math.floor(elapsed / 60)).padStart(2, '0');
//             const seconds = String(elapsed % 60).padStart(2, '0');
//             workoutTimerDisplay.innerText = `${minutes}:${seconds}`;
//         }, 1000);

//         caloriesDisplay.innerText = "Workout in progress...";
//     });

//     stopWorkoutBtn.addEventListener("click", () => {
//         if (!workoutStartTime) {
//             alert("Start your workout first!");
//             return;
//         }

//         clearInterval(workoutTimerInterval);
//         const elapsedSeconds = Math.floor((new Date() - workoutStartTime) / 1000);
//         const weight = parseFloat(document.getElementById("user-weight")?.value);
//         const selectedExercises = Array.from(document.querySelectorAll(".exercise-list input:checked"))
//             .map(cb => cb.value);

//         let totalCalories = 0;
//         const exerciseMETs = {
//             "Walking": 3.8,
//             "Running": 9.8,
//             "Pushups": 8.0,
//             "Pullups": 8.5,
//             "Rope Jumping": 12.0,
//             "Swimming": 7.0,
//             "Weight Lifting": 6.0,
//             "Cycling": 6.0,
//             "Plank": 4.0,
//             "Squats": 8.0,
//             "Yoga": 2.5,
//             "Sitting": 1.3
//         };

//         const minutes = elapsedSeconds / 60;
//         selectedExercises.forEach(ex => {
//             if (exerciseMETs[ex]) {
//                 totalCalories += exerciseMETs[ex] * weight * (minutes / 60);
//             }
//         });

//         caloriesDisplay.innerText = `You burned ${Math.round(totalCalories)} kcal`;
//         workoutStartTime = null;
//     });
// }

// // ==================== CONTACT FORM (DIRECT MAIL) ====================
// document.getElementById("contactForm")?.addEventListener("submit", function (e) {
//     e.preventDefault();

//     const name = document.getElementById("name")?.value.trim();
//     const email = document.getElementById("email")?.value.trim();
//     const message = document.getElementById("message")?.value.trim();
//     const feedback = document.getElementById("contact-feedback");

//     if (!name || !email || !message) {
//         feedback.style.color = "red";
//         feedback.innerText = "Please fill all fields.";
//         return;
//     }

//     window.location.href = `mailto:support@fitnesspro.com?subject=Message from ${name}&body=${encodeURIComponent(message)}`;
//     feedback.style.color = "green";
//     feedback.innerText = "Redirecting to email client...";
// });


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

// ==================== BMI CALCULATOR ====================
document.getElementById("calculateBmiBtn")?.addEventListener("click", function () {
    const height = parseFloat(document.getElementById("height")?.value);
    const weight = parseFloat(document.getElementById("weight")?.value);
    const bmiOutput = document.getElementById("bmi-result-output");

    if (!height || !weight || height <= 0 || weight <= 0) {
        alert("Please enter valid height and weight.");
        return;
    }

    const bmi = weight / ((height / 100) ** 2);
    let category = "";

    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal weight";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obese";

    // Display results in tabular format
    bmiOutput.innerHTML = `
        <tr>
            <td>${bmi.toFixed(2)}</td>
            <td>${category}</td>
        </tr>
    `;
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
        } else if (bmi < 24.9) {
            category = "Normal Weight";
            tip = "Maintain a balanced diet and stay active.";
            color = "#27ae60";
        } else if (bmi < 29.9) {
            category = "Overweight";
            tip = "Reduce sugar intake, focus on cardio and healthy meals.";
            color = "#e67e22";
        } else {
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

