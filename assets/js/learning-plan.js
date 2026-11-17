
const plans = {
    web: {
        title: "Web Development Learning Plan",
        description: "A four-week path to building your first website.",
        weeks: [
            {
                title: "Week 1: Learn HTML",
                tasks: [
                    "Understand what HTML does",
                    "Create your first HTML page",
                    "Practise headings and paragraphs",
                    "Add links and images"
                ]
            },
            {
                title: "Week 2: Learn CSS",
                tasks: [
                    "Connect a CSS file to HTML",
                    "Change colours and fonts",
                    "Add margins and padding",
                    "Style buttons and cards"
                ]
            },
            {
                title: "Week 3: Build Your Layout",
                tasks: [
                    "Learn Flexbox basics",
                    "Create a navigation bar",
                    "Build a grid of cards",
                    "Make your page responsive"
                ]
            },
            {
                title: "Week 4: Create a Project",
                tasks: [
                    "Plan a personal website",
                    "Build the HTML structure",
                    "Style the website with CSS",
                    "Test your finished website"
                ]
            }
        ]
    },

    javascript: {
        title: "JavaScript Starter Plan",
        description: "Learn the basics of programming in four weeks.",
        weeks: [
            {
                title: "Week 1: JavaScript Basics",
                tasks: [
                    "Connect JavaScript to HTML",
                    "Learn variables",
                    "Practise strings and numbers",
                    "Display messages in the console"
                ]
            },
            {
                title: "Week 2: Make Decisions",
                tasks: [
                    "Understand if and else",
                    "Compare values",
                    "Learn logical operators"
                ]
            },
            {
                title: "Week 3: Functions and Events",
                tasks: [
                    "Create a function",
                    "Respond to button clicks",
                    "Change webpage text"
                ]
            },
            {
                title: "Week 4: Build a Project",
                tasks: [
                    "Create a simple counter",
                    "Add buttons to control it",
                    "Test and fix your code"
                ]
            }
        ]
    },

    design: {
        title: "Graphic Design Learning Plan",
        description: "Learn design principles and create your own graphics.",
        weeks: [
            {
                title: "Week 1: Design Foundations",
                tasks: [
                    "Understand basic design principles",
                    "Explore colour combinations",
                    "Learn about readable fonts"
                ]
            },
            {
                title: "Week 2: Layout and Typography",
                tasks: [
                    "Arrange text and images",
                    "Practise font pairing",
                    "Learn spacing and alignment"
                ]
            },
            {
                title: "Week 3: Create Graphics",
                tasks: [
                    "Plan a simple poster",
                    "Choose colours and fonts",
                    "Create a social media graphic"
                ]
            },
            {
                title: "Week 4: Final Project",
                tasks: [
                    "Plan an event poster",
                    "Create your design",
                    "Review and improve your work"
                ]
            }
        ]
    }
};

const planButtons = document.querySelectorAll(".plan-button");
const panel = document.getElementById("learningPanel");
const title = document.getElementById("planTitle");
const description = document.getElementById("planDescription");
const weeksContainer = document.getElementById("planWeeks");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");

const STORAGE_KEY = "kotechLearningProgress";

let activePlan = null;

function getProgress() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch {
        return {};
    }
}

function saveProgress(progress) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
        alert("Progress could not be saved in this browser.");
    }
}

function renderPlan(planKey) {
    const plan = plans[planKey];

    if (!plan) return;

    activePlan = planKey;
    title.textContent = plan.title;
    description.textContent = plan.description;
    weeksContainer.replaceChildren();

    const progress = getProgress();
    const completed = progress[planKey] || {};

    plan.weeks.forEach((week, weekIndex) => {
        const weekSection = document.createElement("section");
        weekSection.className = "week";

        const heading = document.createElement("h3");
        heading.textContent = week.title;
        weekSection.appendChild(heading);

        week.tasks.forEach((task, taskIndex) => {
            const label = document.createElement("label");
            label.className = "task";

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = Boolean(
                completed[`${weekIndex}-${taskIndex}`]
            );

            checkbox.dataset.week = weekIndex;
            checkbox.dataset.task = taskIndex;

            const text = document.createElement("span");
            text.textContent = task;

            label.append(checkbox, text);
            weekSection.appendChild(label);
        });

        weeksContainer.appendChild(weekSection);
    });

    panel.hidden = false;
    updateProgress();

    panel.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function updateProgress() {
    if (!activePlan) return;

    const checkboxes = weeksContainer.querySelectorAll(
        'input[type="checkbox"]'
    );

    const total = checkboxes.length;
    const completed = [...checkboxes].filter(
        checkbox => checkbox.checked
    ).length;

    const percentage = total === 0
        ? 0
        : Math.round((completed / total) * 100);

    progressText.textContent =
        `${percentage}% complete (${completed}/${total} tasks)`;

    progressBar.style.width = `${percentage}%`;
    progressBar.setAttribute("role", "progressbar");
    progressBar.setAttribute("aria-valuemin", "0");
    progressBar.setAttribute("aria-valuemax", "100");
    progressBar.setAttribute("aria-valuenow", percentage);
}

planButtons.forEach(button => {
    button.addEventListener("click", () => {
        renderPlan(button.dataset.plan);
    });
});

weeksContainer.addEventListener("change", event => {
    if (!event.target.matches('input[type="checkbox"]')) return;

    const progress = getProgress();

    if (!progress[activePlan]) {
        progress[activePlan] = {};
    }

    const taskKey =
        `${event.target.dataset.week}-${event.target.dataset.task}`;

    progress[activePlan][taskKey] = event.target.checked;

    saveProgress(progress);
    updateProgress();
});

document.getElementById("closePlan").addEventListener("click", () => {
    panel.hidden = true;
});

document.getElementById("resetProgress").addEventListener("click", () => {
    if (!activePlan) return;

    const progress = getProgress();
    delete progress[activePlan];

    saveProgress(progress);
    renderPlan(activePlan);
});
