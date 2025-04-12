// All courses for Levels I, II, and III
const allCourses = {
    1: [ // Level I
        { code: "IT1106", name: "Information Systems", semester: 1, credits: 4, isGPA: true, grade: null },
        { code: "IT1206", name: "Computer Systems", semester: 1, credits: 4, isGPA: true, grade: null },
        { code: "IT1306", name: "Free and Open Source Software for Personal Computing", semester: 1, credits: 3, isGPA: true, grade: null },
        { code: "IT1406", name: "Introduction to Programming", semester: 1, credits: 4, isGPA: true, grade: null },
        { code: "IT1506", name: "Fundamentals of Mathematics", semester: 1, credits: 1, isGPA: true, grade: null },
        { code: "EN2106", name: "Communication Skills I", semester: 2, credits: 2, isGPA: false, grade: null },
        { code: "IT2106", name: "Mathematics for Computing I", semester: 2, credits: 3, isGPA: true, grade: null },
        { code: "IT2206", name: "Fundamentals of Software Engineering", semester: 2, credits: 4, isGPA: true, grade: null },
        { code: "IT2306", name: "Database Systems", semester: 2, credits: 4, isGPA: true, grade: null },
        { code: "IT2406", name: "Web Application Development I", semester: 2, credits: 4, isGPA: true, grade: null }
    ],
    2: [ // Level II
        { code: "EN3106", name: "Communication Skills II", semester: 3, credits: 2, isGPA: false, grade: null },
        { code: "IT3106", name: "Object Oriented Analysis & Design", semester: 3, credits: 3, isGPA: true, grade: null },
        { code: "IT3206", name: "Data Structures and Algorithms", semester: 3, credits: 3, isGPA: true, grade: null },
        { code: "IT3306", name: "Data Management Systems", semester: 3, credits: 3, isGPA: true, grade: null },
        { code: "IT3406", name: "Web Application Development II", semester: 3, credits: 4, isGPA: true, grade: null },
        { code: "IT4106", name: "User Experience Design", semester: 4, credits: 3, isGPA: true, grade: null },
        { code: "IT4206", name: "Enterprise Application Development", semester: 4, credits: 4, isGPA: true, grade: null },
        { code: "IT4306", name: "Information Technology Project Management", semester: 4, credits: 3, isGPA: true, grade: null },
        { code: "IT4406", name: "Agile Software Development", semester: 4, credits: 4, isGPA: true, grade: null },
        { code: "IT4506", name: "Computer Networks", semester: 4, credits: 3, isGPA: true, grade: null }
    ],
    3: [ // Level III
        { code: "EN5106", name: "Fundamentals of Management & Entrepreneurship", semester: 5, credits: 2, isGPA: false, grade: null },
        { code: "IT5106", name: "Software Development Project (Sem 5)", semester: 5, credits: 4, isGPA: true, grade: null },
        { code: "IT5206", name: "Professional Practice", semester: 5, credits: 3, isGPA: true, grade: null },
        { code: "IT5306", name: "Principles of Information Security", semester: 5, credits: 3, isGPA: true, grade: null },
        { code: "IT5406", name: "Systems & Network Administration", semester: 5, credits: 3, isGPA: true, grade: null },
        { code: "IT5506", name: "Mathematics for Computing II", semester: 5, credits: 3, isGPA: true, grade: null, optional: true },
        { code: "EN6106", name: "Emerging Topics in Information Technology", semester: 6, credits: 2, isGPA: false, grade: null },
        { code: "IT5106", name: "Software Development Project (Sem 6)", semester: 6, credits: 4, isGPA: true, grade: null },
        { code: "IT6206", name: "Software Quality Assurance", semester: 6, credits: 3, isGPA: true, grade: null },
        { code: "IT6306", name: "Mobile Application Development", semester: 6, credits: 4, isGPA: true, grade: null },
        { code: "IT6406", name: "Network Security and Audit", semester: 6, credits: 3, isGPA: true, grade: null },
        { code: "IT6506", name: "e-Business Technologies", semester: 6, credits: 3, isGPA: true, grade: null, optional: true }
    ]
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updateSemesters();
    updateCourseList();
});

function updateSemesters() {
    const level = parseInt(document.getElementById('level').value);
    const semesterSelect = document.getElementById('semester');
    semesterSelect.innerHTML = '';

    let semesters;
    if (level === 1) semesters = [1, 2];
    else if (level === 2) semesters = [3, 4];
    else semesters = [5, 6];

    semesters.forEach(sem => {
        const option = document.createElement('option');
        option.value = sem;
        option.textContent = `Semester ${sem}`;
        semesterSelect.appendChild(option);
    });

    updateCourseList();
}

function updateCourseList() {
    const level = parseInt(document.getElementById('level').value);
    const semester = parseInt(document.getElementById('semester').value);
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = '';

    const courses = allCourses[level].filter(course => course.semester === semester);

    courses.forEach((course, index) => {
        const div = document.createElement('div');
        div.className = 'course-item';
        const isOptional = course.optional || false;
        div.innerHTML = `
            <span>${course.code}</span>
            <span>${course.name}${isOptional ? ' (Optional)' : ''}</span>
            <span>${course.credits}</span>
            <span>
                <select onchange="updateGrade(${level}, ${semester}, ${index}, this.value)" ${course.isGPA ? '' : 'disabled'}>
                    <option value="" ${!course.grade ? 'selected' : ''}>Select Grade</option>
                    <option value="4.00" ${course.grade === 4.00 ? 'selected' : ''}>A+/A</option>
                    <option value="3.70" ${course.grade === 3.70 ? 'selected' : ''}>A-</option>
                    <option value="3.30" ${course.grade === 3.30 ? 'selected' : ''}>B+</option>
                    <option value="3.00" ${course.grade === 3.00 ? 'selected' : ''}>B</option>
                    <option value="2.70" ${course.grade === 2.70 ? 'selected' : ''}>B-</option>
                    <option value="2.30" ${course.grade === 2.30 ? 'selected' : ''}>C+</option>
                    <option value="2.00" ${course.grade === 2.00 ? 'selected' : ''}>C</option>
                    <option value="1.70" ${course.grade === 1.70 ? 'selected' : ''}>C-</option>
                    <option value="1.30" ${course.grade === 1.30 ? 'selected' : ''}>D+</option>
                    <option value="1.00" ${course.grade === 1.00 ? 'selected' : ''}>D</option>
                    <option value="0.00" ${course.grade === 0.00 ? 'selected' : ''}>E</option>
                </select>
            </span>
        `;
        courseList.appendChild(div);
    });

    calculateGPA();
}

function updateGrade(level, semester, index, grade) {
    const courses = allCourses[level].filter(course => course.semester === semester);
    courses[index].grade = grade ? parseFloat(grade) : null;
    calculateGPA();
}

function calculateGPA() {
    const level = parseInt(document.getElementById('level').value);
    const semester = parseInt(document.getElementById('semester').value);

    // Semester GPA
    const semesterCourses = allCourses[level]
        .filter(course => course.semester === semester && course.isGPA && course.grade !== null);
    
    let semesterCredits = 0;
    let semesterGradePoints = 0;

    semesterCourses.forEach(course => {
        semesterCredits += course.credits;
        semesterGradePoints += course.grade * course.credits;
    });

    const semesterGPA = semesterCredits > 0 ? (semesterGradePoints / semesterCredits) : 0;
    document.getElementById('gpa-result').textContent = `Semester GPA: ${semesterGPA.toFixed(2)}`;
    document.getElementById('breakdown').textContent = `Total GPA Credits: ${semesterCredits} | Grade Points: ${semesterGradePoints.toFixed(2)}`;

    // Cumulative GPA for the Level
    const levelCourses = allCourses[level]
        .filter(course => course.isGPA && course.grade !== null);
    
    let levelCredits = 0;
    let levelGradePoints = 0;

    levelCourses.forEach(course => {
        levelCredits += course.credits;
        levelGradePoints += course.grade * course.credits;
    });

    const cumulativeGPA = levelCredits > 0 ? (levelGradePoints / levelCredits) : 0;
    document.getElementById('cumulative-gpa').textContent = `Cumulative GPA (Level): ${cumulativeGPA.toFixed(2)}`;
}

function clearGrades() {
    const level = parseInt(document.getElementById('level').value);
    allCourses[level].forEach(course => course.grade = null);
    updateCourseList();
}

function toggleTheme() {
    document.body.classList.toggle('dark');
}
