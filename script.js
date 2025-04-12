// Pre-defined Level I courses from Table 4a
const courses = [
    { code: "IT1106", name: "Information Systems", credits: 4, isGPA: true, grade: null },
    { code: "IT1206", name: "Computer Systems", credits: 4, isGPA: true, grade: null },
    { code: "IT1306", name: "Free and Open Source Software for Personal Computing", credits: 3, isGPA: true, grade: null },
    { code: "IT1406", name: "Introduction to Programming", credits: 4, isGPA: true, grade: null },
    { code: "IT1506", name: "Fundamentals of Mathematics", credits: 1, isGPA: true, grade: null },
    { code: "EN2106", name: "Communication Skills I", credits: 2, isGPA: false, grade: null },
    { code: "IT2106", name: "Mathematics for Computing I", credits: 3, isGPA: true, grade: null },
    { code: "IT2206", name: "Fundamentals of Software Engineering", credits: 4, isGPA: true, grade: null },
    { code: "IT2306", name: "Database Systems", credits: 4, isGPA: true, grade: null },
    { code: "IT2406", name: "Web Application Development I", credits: 4, isGPA: true, grade: null }
];

// Initialize the course list on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCourseList();
});

function updateCourseList() {
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = '';

    courses.forEach((course, index) => {
        const div = document.createElement('div');
        div.className = 'course-item';
        div.innerHTML = `
            <span>${course.code}</span>
            <span>${course.name}</span>
            <span>${course.credits}</span>
            <span>
                <select onchange="updateGrade(${index}, this.value)" ${course.isGPA ? '' : 'disabled'}>
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

function updateGrade(index, grade) {
    courses[index].grade = grade ? parseFloat(grade) : null;
    calculateGPA();
}

function calculateGPA() {
    // Filter courses that contribute to GPA and have a grade selected
    const gpaCourses = courses.filter(course => course.isGPA && course.grade !== null);

    if (gpaCourses.length === 0) {
        document.getElementById('gpa-result').textContent = 'Your GPA: 0.00';
        document.getElementById('breakdown').textContent = 'Total GPA Credits: 0 | Grade Points: 0.00';
        return;
    }

    let totalCredits = 0;
    let totalGradePoints = 0;

    gpaCourses.forEach(course => {
        totalCredits += course.credits;
        totalGradePoints += course.grade * course.credits;
    });

    const gpa = totalGradePoints / totalCredits;
    document.getElementById('gpa-result').textContent = `Your GPA: ${gpa.toFixed(2)}`;
    document.getElementById('breakdown').textContent = `Total GPA Credits: ${totalCredits} | Grade Points: ${totalGradePoints.toFixed(2)}`;
}

function clearGrades() {
    courses.forEach(course => course.grade = null);
    updateCourseList();
}

function toggleTheme() {
    document.body.classList.toggle('dark');
}