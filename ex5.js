
const livre = {
  titre: 'Le Petit',
  auteur: 'Jhon Georges',
  annee: 1987,
  getInfo() {
    return `${this.titre} par ${this.auteur} en (${this.annee})`;
  }
};

console.log(livre.getInfo());
