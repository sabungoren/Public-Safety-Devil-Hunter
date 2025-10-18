// Toggle detail produk
// document.querySelectorAll('.toggle-btn').forEach(btn => {
//   btn.addEventListener('click', () => {
//     const detail = btn.nextElementSibling;
//     detail.classList.toggle('d-none');
//     btn.textContent = detail.classList.contains('d-none') ? 'Lihat Detail' : 'Sembunyikan';
//   });
// });

// Validasi form kontak
document.getElementById("contactForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  if (!nama || !email || !pesan) {
    alert("Harap isi semua kolom sebelum mengirim!");
  } else {
    alert(`Terima kasih ${nama}! Pesan kamu sudah terkirim.`);
    e.target.reset();
  }
});

// Toggle deskripsi singkat
document.querySelectorAll(".toggle-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation(); // cegah event klik card ikut jalan
    const detail = btn.nextElementSibling;
    detail.classList.toggle("d-none");
    btn.textContent = detail.classList.contains("d-none")
      ? "Deskripsi singkat"
      : "Sembunyikan";
  });
});

// card dipencet
document.querySelectorAll(".product-card").forEach((card) => {
  card.style.cursor = "pointer"; // ubah jadi pointer saat hover
  card.addEventListener("click", () => {
    const id = card.dataset.id;
    // redirect ke halaman detail sesuai id
    window.location.href = `detail.html?id=${encodeURIComponent(id)}`;
  });
});

// tombol 'Lihat Detail' punya event sendiri
document.querySelectorAll(".lihat-detail").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation(); // cegah klik card ikut ke-trigger
    const id = btn.dataset.id;
    window.location.href = `detail.html?id=${encodeURIComponent(id)}`;
  });
});

//fitur buka gambar besar
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("gallery-img")) {
    const src = e.target.src;
    const modalHTML = `
      <div class="modal fade" id="imgModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content bg-transparent border-0">
            <img src="${src}" class="img-fluid rounded shadow-lg">
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", modalHTML);
    const modal = new bootstrap.Modal(document.getElementById("imgModal"));
    modal.show();
    document
      .getElementById("imgModal")
      .addEventListener("hidden.bs.modal", () => {
        document.getElementById("imgModal").remove();
      });
  }
});

const body = document.body;
const toggle = document.getElementById("themeToggle");

// restore dari localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("theme-dark");
  toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
  body.classList.toggle("theme-dark");
  const isDark = body.classList.contains("theme-dark");
  toggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
