
class Etudiant {
  constructor(nom, note) {
    this.nom = nom;
    this.note = note;
  }

  getMention() {
    if (this.note >= 16) return 'Très bien';
    if (this.note >= 14) return 'Bien';
    if (this.note >= 10) return 'Passable';
    return 'Échec';
  }
}

const etudiants = [
  new Etudiant('zied', 17),
  new Etudiant('meriem', 12.5),
  new Etudiant('karim', 8)
];

etudiants.forEach(e => {
  console.log(`${e.nom} (${e.note}) -> ${e.getMention()}`);
});
