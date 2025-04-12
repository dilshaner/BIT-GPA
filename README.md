# BIT-GPA: GPA Calculator

[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)

A simple and intuitive GPA calculator specifically designed for BIT students, mirroring the structure and grading system of the "Student Handbook Academic Year - 2024." Calculate your GPA for Levels I, II, and III across semesters.

[https://github.com/dilshaner/BIT-GPA](https://github.com/dilshaner/BIT-GPA)

## Features and Functionality

*   **Level Selection:**  Choose between Level I, Level II, and Level III using the dropdown menu.
*   **Semester Selection:**  Select the specific semester for which you want to calculate the GPA. The options dynamically update based on the selected level.
*   **Course List:** Displays a list of courses for the selected level and semester, including course code, name, credits, and a grade selection dropdown.  Optional courses are indicated.
*   **Grade Input:**  Select your grade for each course from a dropdown menu of possible grades (A+/A, A-, B+, B, B-, C+, C, C-, D+, D, E). Non-GPA courses have the grade selection disabled.
*   **GPA Calculation:**  Automatically calculates and displays the Semester GPA and Cumulative GPA for the selected level based on the entered grades.
*   **Results Breakdown:** Provides a breakdown of the total GPA credits and grade points contributing to the semester GPA.
*   **Clear Grades:** Resets all grades for the selected level to null.
*   **Theme Toggle:** Switch between light and dark themes for optimal viewing experience.
*   **Disclaimer:** Includes a disclaimer highlighting that the calculator is an independent tool and not officially affiliated with the University of Colombo, Sri Lanka.

## Technology Stack

*   **HTML:**  Structure and content of the web page (`index.html`).
*   **CSS:**  Styling and visual presentation (`styles.css` - file not provided, assume basic styles are applied).  Uses Google Fonts (`Inter` family).
*   **JavaScript:**  Dynamic functionality, GPA calculation, and user interaction (`script.js`).

## Prerequisites

*   A web browser (Chrome, Firefox, Safari, etc.). No specific version required.
*   (Optional) A text editor or IDE for modifying the code (VSCode, Sublime Text, etc.).

## Installation Instructions

No installation is required to use the calculator.  Simply open the `index.html` file in your web browser.

Alternatively, you can clone this repository to your local machine:

```bash
git clone https://github.com/dilshaner/BIT-GPA.git
cd BIT-GPA
```

Then, open `index.html` in your browser.

## Usage Guide

1.  **Open the GPA Calculator:** Open the `index.html` file in your web browser.
2.  **Select Level:** Use the "Level" dropdown to select your current academic level (I, II, or III).
3.  **Select Semester:** Use the "Semester" dropdown to select the semester you want to calculate the GPA for.
4.  **Enter Grades:** For each course in the displayed list, select the appropriate grade from the dropdown menu.  If a course is not considered for GPA, the grade selection will be disabled.
5.  **View Results:** The calculated Semester GPA and Cumulative GPA for the selected level will be displayed below the course list.
6.  **Reset Grades:** To clear all entered grades for the currently selected level, click the "Reset Grades" button.
7.  **Toggle Theme:**  Click the moon icon to toggle between light and dark themes.

## API Documentation

This project does not have an external API. All calculations and data handling are performed client-side using JavaScript.

## Contributing Guidelines

Contributions are welcome! If you find any bugs or have suggestions for improvement, please submit a pull request.

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive commit messages.
4.  Push your changes to your forked repository.
5.  Submit a pull request to the `main` branch of the original repository.

## License Information

This project is licensed under the Creative Commons Zero v1.0 Universal license. See the [LICENSE](http://creativecommons.org/publicdomain/zero/1.0/) for more information.

## Contact/Support Information

For any questions or support requests, please contact the repository owner through GitHub.  Since this is a personal project based on available data from the student handbook, ensure you always cross-reference the results with your official academic transcript or advisor.