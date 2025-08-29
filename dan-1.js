document.getElementById('formPendaftaran').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Terima kasih, pendaftaran Anda telah dikirim!");
    this.reset();
});