
function validateCode(event) {
    event.preventDefault();
       const code = document.getElementById('code').value;
    const validCode = "28102810";

    if (code === validCode) {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'https://drive.google.com/drive/folders/1INYJsFv4k0eS1R60PmSa2zQZp50Vmp3V?usp=sharing';
    } else {
        alert('كود غير صحيح');
    }
    return false;
}



