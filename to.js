
function validateCode(event) {
    event.preventDefault();
    const code = prompt("ادخل كود الاشتراك");
    const validCode = "01272796287";

    if (code === validCode) {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'https://egypt-academy.github.io/uc/basics-course.html';
    } else {
        alert('كود غير صحيح');
    }
    return false;
}


