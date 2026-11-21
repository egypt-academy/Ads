let courseActivationCompleted = false;

function validateCode(event) {
    event.preventDefault();
    const code = document.getElementById('code').value.trim();
    const validCode = "28102810";

    if (code !== validCode) {
        alert('كود غير صحيح');
        return false;
    }

    if (courseActivationCompleted) {
        return false;
    }
    courseActivationCompleted = true;

    try {
        localStorage.setItem('isLoggedIn', 'true');
    } catch {
        // Opening the course also works when the browser disables storage.
    }

    const openCourse = () => {
        window.location.href = 'https://drive.google.com/drive/folders/1INYJsFv4k0eS1R60PmSa2zQZp50Vmp3V?usp=sharing';
    };

    if (typeof fbq !== 'function') {
        openCourse();
        return false;
    }

    try {
        fbq('trackSingle', '1490850028610885', 'Purchase', {
            content_name: 'كورس مدرب الحساب الذهني',
            currency: 'EGP',
            value: 750
        });
    } finally {
        // Give the browser pixel a brief chance to send before leaving for Drive.
        setTimeout(openCourse, 600);
    }

    return false;
}
