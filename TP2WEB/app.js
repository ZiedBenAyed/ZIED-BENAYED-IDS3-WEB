// Étape 2 : variables
let tasks = []; // tableau d'objets { texte, terminee }

// Sélection des éléments DOM
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const clearAllBtn = document.getElementById("clearAll");
const searchInput = document.getElementById("searchInput");
const compteur = document.getElementById("compteur");

console.log("Bienvenue dans l'application de gestion de tâches !");

// ----------- FONCTIONS PRINCIPALES -----------

// Ajouter une tâche
function ajouterTache() {
  const texte = taskInput.value.trim();
  if (texte === "") return;

  const tache = { texte: texte, terminee: false };
  tasks.push(tache);

  taskInput.value = "";
  sauvegarder();
  afficherTaches();
}

// Afficher toutes les tâches
function afficherTaches() {
  taskList.innerHTML = "";
  const recherche = searchInput.value.toLowerCase();

  tasks.forEach((tache, index) => {
    if (!tache.texte.toLowerCase().includes(recherche)) return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = tache.texte;
    if (tache.terminee) span.classList.add("completed");

    const btnGroup = document.createElement("div");
    btnGroup.classList.add("btn-group");

    const terminerBtn = document.createElement("button");
    terminerBtn.textContent = "✔";
    terminerBtn.classList.add("terminer");
    terminerBtn.onclick = () => terminerTache(index);

    const supprimerBtn = document.createElement("button");
    supprimerBtn.textContent = "🗑";
    supprimerBtn.classList.add("supprimer");
    supprimerBtn.onclick = () => supprimerTache(index);

    btnGroup.appendChild(terminerBtn);
    btnGroup.appendChild(supprimerBtn);

    li.appendChild(span);
    li.appendChild(btnGroup);
    taskList.appendChild(li);
});


  afficherCompteur();
}

// Supprimer une tâche
function supprimerTache(index) {
  tasks.splice(index, 1);
  sauvegarder();
  afficherTaches();
}

// Marquer une tâche comme terminée
function terminerTache(index) {
  tasks[index].terminee = !tasks[index].terminee;
  sauvegarder();
  afficherTaches();
}

// Tout supprimer
function toutSupprimer() {
  tasks = [];
  sauvegarder();
  afficherTaches();
}

// Afficher compteur
function afficherCompteur() {
  const total = tasks.length;
  const terminees = tasks.filter(t => t.terminee).length;
  compteur.textContent = `${terminees}/${total} tâches terminées`;
}

// ----------- LOCALSTORAGE -----------

function sauvegarder() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function charger() {
  const data = localStorage.getItem("tasks");
  if (data) tasks = JSON.parse(data);
  afficherTaches();
}

// ----------- ÉVÉNEMENTS -----------

addBtn.addEventListener("click", ajouterTache);

taskInput.addEventListener("keypress", e => {
  if (e.key === "Enter") ajouterTache();
});

clearAllBtn.addEventListener("click", toutSupprimer);

searchInput.addEventListener("input", afficherTaches);

// Charger au démarrage
charger();
