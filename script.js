

const darkFunction = () => {
    const header = document.querySelector('.header');
    const heroTitle = document.getElementById('hero-title')
    const navLinks = document.querySelectorAll('.nav-link')
    const earningContainer = document.getElementById('earning-container')
    const createProfileSection = document.getElementById('create-profile')
    const profileCard = document.getElementById('profile-card')
    const profileDesc = document.querySelector('.profile-desc')
    const subContainer = document.querySelector('.sub-cover-container')
    const userForm = document.getElementById('userForm')
    const userForm2 = document.getElementById('userForm2')
    const achievmentSection = document.getElementById('achievments-section')
    const achievmentForm = document.getElementById('achievement-form')
    const userNames = document.querySelectorAll('.username')
    console.log()
    header.classList.toggle('dark-mode')
    heroTitle.classList.toggle('dark-mode')
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.toggle('text-white')
    }
    for (var i = 0; i < userNames.length; i++) {
        userNames[i].classList.toggle('text-white')
    }
    profileDesc.classList.toggle('text-white')
    earningContainer.classList.toggle('area-dark-mode')
    createProfileSection.classList.toggle('dark-mode')
    profileCard.classList.toggle('area-dark-mode')
    subContainer.classList.toggle('area-dark-mode')
    achievmentSection.classList.toggle('area-dark-mode')
    userForm.classList.toggle('form-dark')
    userForm2.classList.toggle('form-dark')
    achievmentForm.classList.toggle('form-dark')


}