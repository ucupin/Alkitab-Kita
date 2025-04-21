function searchVerse() {
    const searchInput = document.getElementById('search-input').value;
    const verseContainer = document.getElementById('verse-container');
  
    if (searchInput.trim() === "") {
      verseContainer.innerHTML = "<p>Silakan masukkan kata kunci untuk mencari ayat.</p>";
      return;
    }
  
    // Simulasi pencarian ayat (ganti dengan data nyata)
    const verseData = `Ayat yang ditemukan: <strong>${searchInput}</strong> - Ini adalah contoh ayat dari Alkitab yang relevan dengan pencarian Anda.`;
  
    verseContainer.innerHTML = `<p>${verseData}</p>`;
  }
  
  function toggleAnswer(index) {
    const answer = document.getElementById(`answer${index}`);
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  }
  