function showSideBar() {
    const sidebar = document.querySelector('nav > ul');
    sidebar.style.display = 'flex';
    const sidebarIco = document.getElementById("sidebarIco");
    sidebarIco.style.display = "none";
}

function hideSideBar() {
    const sidebar = document.querySelector('nav > ul');
    sidebar.style.display = 'none';
    const sidebarIco = document.getElementById("sidebarIco");
    sidebarIco.style.display = "block";
}