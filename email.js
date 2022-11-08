const resumeButton = document.getElementById("resume");
const instagramButton = document.getElementById("insta");
const gitHubMainButton = document.getElementById("gitHubMain");
const linkedinButton = document.getElementById("linkedIn");
resumeButton.addEventListener("click", openResume =>{
    window.location.href = "Chris_Rinehardt_MIS_Resume.pdf";
});
instagramButton.addEventListener("click", openInsta =>{
    window.location.href = "https://www.instagram.com/__chris275__/";
});
gitHubMainButton.addEventListener("click", opengitHubMain =>{
    window.location.href = "https://github.com/tug74661?tab=overview&from=2022-02-01&to=2022-02-28";
});
linkedinButton.addEventListener("click", openLinkedIn =>{
    window.location.href = "https://www.linkedin.com/in/christopher-rinehardt-280b17177";
});

