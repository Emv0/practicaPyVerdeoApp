languageSelector = document.getElementById("language-selector");
content = document.getElementById("content");
PAboutboris = document.getElementById("p-about-boris");
aboutBoris = document.getElementById("about-boris");
homeItem = document.getElementById("home-item");
dashboardItem = document.getElementById("dashboard-item");
aboutUs = document.getElementById("about-us-item");
pageItem = document.getElementById("page-item");



document.getElementById("btn-español").addEventListener("click", ()=>{
    languageSelector.style.display = "none";
    content.style.display = "block";
});

document.getElementById("btn-ingles").addEventListener("click",()=>{
    languageSelector.style.display = "none";
    content.style.display = "block";
    homeItem.textContent = "Home";
    aboutUs.textContent = "About us"
    pageItem.textContent = "Home"
    dashboardItem.textContent = "Dashboard"
    aboutBoris.textContent = "about BORIS";
    PAboutboris.textContent = "BORIS, a Colombian company, experts committed to data analysis and smart solutions for socio-environmental management. Our mission is to develop a record base that enhances human impact on the environment and society. We collaborate with various sectors to promote sustainability and responsible development. We are guided by transparency, ethics, and the desire to build a better future for all."
})