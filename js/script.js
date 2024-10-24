/* file reserved for javascript */

// Section bagian windows prompt untuk mengisi nama di slider
let username;
username = window.prompt("Silahkan masukan nama Anda");

// Cek apakah pengguna memasukkan teks
if (username !== null && username.trim() !== "") {
    // Tampilkan username yang dimasukkan ke dalam elemen <p> di halaman
    document.getElementById("outputText").innerHTML = "<h1>Hai, " + username + "!" + " Selamat datang di website ini...</h1>";
} else {
    // Jika pengguna tidak memasukkan teks atau menekan cancel
    document.getElementById("outputText").innerHTML = "<h1>Hai Pengunjung. Selamat datang di website ini...</h1>";
}

// Section bagian  form isian 
document.getElementById("dataForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mengirim popup/error kalau datanya tidak diisi

    // Input data elemet id
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Output data element id yang telah diketikan
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
        <h2>Data yang Dimasukkan:</h2>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Tanggal Lahir:</strong> ${dob}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong> ${message}</p>
    `;
    outputDiv.style.display = "block"; // Menampilkan area/data output
});

// Slide images //
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 