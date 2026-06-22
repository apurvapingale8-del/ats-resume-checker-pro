function checkATS() {

    const resume =
        document.getElementById("resume")
        .value
        .toLowerCase();

    const jd =
        document.getElementById("jd")
        .value
        .toLowerCase();

    if (resume.trim() === "" || jd.trim() === "") {
        alert("Please enter both Resume and Job Description.");
        return;
    }

    const skills = [
        "python",
        "java",
        "javascript",
        "react",
        "node",
        "express",
        "mongodb",
        "mysql",
        "sql",
        "html",
        "css",
        "git",
        "github",
        "docker",
        "aws",
        "azure",
        "tensorflow",
        "pytorch",
        "machine learning",
        "deep learning",
        "data science",
        "power bi",
        "excel",
        "flask",
        "django",
        "rest api",
        "api",
        "c",
        "c++"
    ];

    let matching = [];
    let missing = [];

    const jdSkills = skills.filter(skill =>
        jd.includes(skill)
    );

    jdSkills.forEach(skill => {

        if (resume.includes(skill)) {
            matching.push(skill);
        } else {
            missing.push(skill);
        }

    });

    let score = 0;

    if (jdSkills.length > 0) {
        score = Math.round(
            (matching.length / jdSkills.length) * 100
        );
    }

    document.getElementById("resultSection")
        .classList.remove("hidden");

    document.getElementById("scoreValue")
        .innerText = score + "%";

    const progressBar =
        document.getElementById("progressBar");

    progressBar.style.width = score + "%";

    if (score >= 80) {
        progressBar.style.background = "#22c55e";
    }
    else if (score >= 50) {
        progressBar.style.background = "#f59e0b";
    }
    else {
        progressBar.style.background = "#ef4444";
    }

    document.getElementById("resumeWords")
        .innerText = resume.split(/\s+/).length;

    document.getElementById("jdWords")
        .innerText = jd.split(/\s+/).length;

    const matchingList =
        document.getElementById("matchingSkills");

    matchingList.innerHTML = "";

    matching.forEach(skill => {
        matchingList.innerHTML +=
            `<li>${skill}</li>`;
    });

    const missingList =
        document.getElementById("missingSkills");

    missingList.innerHTML = "";

    missing.forEach(skill => {
        missingList.innerHTML +=
            `<li>${skill}</li>`;
    });

    let recommendation = "";

    if (score >= 80) {
        recommendation =
            "Excellent match. Your resume aligns well with the job description.";
    }
    else if (score >= 50) {
        recommendation =
            "Good match. Add the missing skills if you have experience with them.";
    }
    else {
        recommendation =
            "Low ATS score. Consider updating your resume with more relevant skills and keywords from the job description.";
    }

    document.getElementById("recommendationText")
        .innerText = recommendation;
}