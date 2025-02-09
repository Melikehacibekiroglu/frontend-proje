document.getElementById("add-note").addEventListener("click", function () {
    let noteText = document.getElementById("note-input").value.trim();
    if (noteText === "") return; // Boş not eklenmesin

    let noteList = document.getElementById("note-list");

    // Yeni bir <li> elementi oluştur
    let li = document.createElement("li");
    li.classList.add("note-item"); // CSS için class ekle
    li.textContent = noteText;

    // Silme butonu oluştur
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Sil";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function () {
        noteList.removeChild(li);
        removeNoteFromStorage(noteText);
    };

    li.appendChild(deleteBtn);
    noteList.appendChild(li);

    saveNoteToStorage(noteText);
    document.getElementById("note-input").value = ""; // Input'u temizle
});

function saveNoteToStorage(note) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
}

function removeNoteFromStorage(note) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes = notes.filter(n => n !== note);
    localStorage.setItem("notes", JSON.stringify(notes));
}

function loadNotes() {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    let noteList = document.getElementById("note-list");

    notes.forEach(note => {
        let li = document.createElement("li");
        li.classList.add("note-item");
        li.textContent = note;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Sil";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = function () {
            noteList.removeChild(li);
            removeNoteFromStorage(note);
        };

        li.appendChild(deleteBtn);
        noteList.appendChild(li);
    });
}

// Sayfa yüklendiğinde geçmiş notları getir
document.addEventListener("DOMContentLoaded", loadNotes);


document.addEventListener("DOMContentLoaded", loadNotes);
document.getElementById("notlarim-btn").addEventListener("click", function () {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    alert("Geçmiş Notlar:\n" + notes.join("\n"));
});

document.getElementById("tosuncuk").addEventListener("click",function(){
    
})