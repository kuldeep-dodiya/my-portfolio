// ========== Fade-In on Scroll ==========
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      obs.unobserve(entry.target);
    });
  },
  {
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px",
  }
);

fadeElements.forEach((el) => observer.observe(el));

// ========== Optional: Back to Top Button ==========
const backToTop = document.createElement("button");
backToTop.innerText = "↑";
backToTop.className = "back-to-top";
document.body.appendChild(backToTop);

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const url = button.getAttribute("data-url");
    if (url) {
      window.open(url, "_blank");
    } else {
      alert("No URL provided for this button.");
    }
  });
});

// function openPDF() {
//     window.open("resume/Kuldeep_Dodiya_Resume.pdf", "_blank");
// }

function downloadPDF() {
  const link = document.createElement("a");
  link.href = "resume/Kuldeep_Dodiya_Resume.pdf"; // your PDF path
  link.download = "Kuldeep_Dodiya_Resume.pdf"; // file name after download
  link.click();
  window.open("resume/Kuldeep_Dodiya_Resume.pdf", "_blank");
}

function openlink(url) {
  window.open(url, "_blank");
}

function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    // Small notification
    let toast = document.createElement("div");
    toast.innerText = text + " copied!";
    toast.className = "toast";
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 2000);
  });
}
