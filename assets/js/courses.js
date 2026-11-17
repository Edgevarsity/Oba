
const courseSearch = document.getElementById("courseSearch");
const categoryFilter = document.getElementById("categoryFilter");
const courseCards = document.querySelectorAll(".course-card");
const courseCount = document.getElementById("courseCount");
const emptyMessage = document.getElementById("emptyMessage");

const lessonPanel = document.getElementById("lessonPanel");
const lessonTitle = document.getElementById("lessonTitle");
const lessonContent = document.getElementById("lessonContent");

const lessons = {
    html: {
        title: "HTML for Beginners",
        content: `
            <h3>Lesson 1: Your First HTML Page</h3>
            <p>HTML gives a webpage its structure. It tells the browser
            where to display headings, paragraphs, images, and links.</p>
            <pre>&lt;h1&gt;Welcome to Kotech&lt;/h1&gt;
&lt;p&gt;I am learning HTML.&lt;/p&gt;</pre>
            <p><strong>Try it:</strong> Create a file named index.html,
            paste the code above, and open it in your browser.</p>
        `
    },

    css: {
        title: "CSS Web Design",
        content: `
            <h3>Lesson 1: Change Your Page Style</h3>
            <p>CSS controls colours, fonts, spacing, and layout.</p>
            <pre>body {
    background: lightblue;
    font-family: Arial, sans-serif;
}

h1 {
    color: navy;
}</pre>
            <p><strong>Try it:</strong> Add this code to your CSS file
            and see how your webpage changes.</p>
        `
    },

    javascript: {
        title: "JavaScript Basics",
        content: `
            <h3>Lesson 1: Make a Button Work</h3>
            <p>JavaScript makes webpages interactive.</p>
            <pre>function sayHello() {
    alert("Welcome to Kotech!");
}</pre>
            <p>Add a button with
            <code>onclick="sayHello()"</code> to try this example.</p>
        `
    },

    design: {
        title: "Graphic Design Basics",
        content: `
            <h3>Lesson 1: Learn the Design Basics</h3>
            <p>Good graphic design helps people understand your message.</p>
            <ul>
                <li><strong>Colour:</strong> Choose colours that work well together.</li>
                <li><strong>Typography:</strong> Use readable fonts.</li>
                <li><strong>Layout:</strong> Arrange elements neatly.</li>
                <li><strong>Contrast:</strong> Make important information stand out.</li>
            </ul>
            <p><strong>Try it:</strong> Design a simple poster with a title,
            two colours, and one clear message.</p>
        `
    },

    poster: {
        title: "Poster Design",
        content: `
            <h3>Lesson 1: Plan Your Poster</h3>
            <p>A good poster communicates its main message quickly.</p>
            <ul>
                <li>Write a clear, short headline.</li>
                <li>Choose one main image or illustration.</li>
                <li>Use two or three matching colours.</li>
                <li>Include important details that people need to know.</li>
            </ul>
            <p><strong>Try it:</strong> Make a poster advertising a
            beginner coding class.</p>
        `
    },

    website: {
        title: "Build Your First Website",
        content: `
            <h3>Lesson 1: Understand the Three Main Technologies</h3>
            <ul>
                <li><strong>HTML:</strong> Builds the webpage structure.</li>
                <li><strong>CSS:</strong> Makes the webpage look good.</li>
                <li><strong>JavaScript:</strong> Adds interactive features.</li>
            </ul>
            <p>Start with a heading in HTML, style it with CSS, and
            use JavaScript to make a button respond to a click.</p>
            <p><strong>Project:</strong> Build a personal webpage with
            your name, a picture, and an introduction.</p>
        `
    }
};

function filterCourses() {
    const query = courseSearch.value.trim().toLowerCase();
    const category = categoryFilter.value;
    let visibleCount = 0;

    courseCards.forEach(card => {
        const matchesText = card.textContent.toLowerCase().includes(query);
        const matchesCategory =
            category === "all" || card.dataset.category === category;

        const showCard = matchesText && matchesCategory;
        card.hidden = !showCard;

        if (showCard) visibleCount++;
    });

    courseCount.textContent =
        `${visibleCount} course${visibleCount === 1 ? "" : "s"} found`;

    emptyMessage.hidden = visibleCount !== 0;
}

courseSearch.addEventListener("input", filterCourses);
categoryFilter.addEventListener("change", filterCourses);

document.querySelectorAll(".start-button").forEach(button => {
    button.addEventListener("click", () => {
        const lesson = lessons[button.dataset.course];

        if (!lesson) return;

        lessonTitle.textContent = lesson.title;
        lessonContent.innerHTML = lesson.content;
        lessonPanel.hidden = false;

        lessonPanel.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

document.getElementById("closeLesson").addEventListener("click", () => {
    lessonPanel.hidden = true;
});


const params = new URLSearchParams(window.location.search);

const initialCategory = params.get("category");
const initialSearch = params.get("search");

if (["coding", "design", "all"].includes(initialCategory)) {
    categoryFilter.value = initialCategory;
}

if (initialSearch) {
    courseSearch.value = initialSearch;
}

filterCourses();{
    const applyButton = document.createElement("button");
applyButton.className = "learn-button";
applyButton.textContent = "Apply Now";

applyButton.addEventListener("click", () => {
  document.getElementById("application").hidden = false;
  document.getElementById("selectedCourse").value = course.title;

  document.getElementById("application").scrollIntoView({
    behavior: "smooth"
  });
});

document.getElementById("lessonContent").appendChild(applyButton);
}

