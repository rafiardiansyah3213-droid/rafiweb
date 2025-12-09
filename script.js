// tahun footer otomatis
document.getElementById("year").textContent = new Date().getFullYear();

// toggle mobile menu
function toggleMenu() {
  const el = document.getElementById("mobileNav");
  el.style.display = el.style.display === "flex" ? "none" : "flex";
}

// menutup menu setelah klik
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", () => {
    const mobile = document.getElementById("mobileNav");
    if (mobile) mobile.style.display = "none";
  });
});
// ===============================
// ✅ TOMBOL BACK KE HALAMAN GAME
// ===============================
const backBtn = document.getElementById("backBtn");
if (backBtn) {
  backBtn.addEventListener("click", function () {
    window.location.href = "games.html"; // halaman pilihan game
  });
}
