function Person(namn, epost, mobil, gNamn, gNummer, pNummer, pOrt) {
    this.namn = namn;
    this.epost = epost;
    this.mobil = mobil;
    this.Adress = new Adress(gNamn, gNummer, pNummer, pOrt);

    this.print = function () {
        return this.namn + "\n" +  this.Adress.gNamn + " " + this.Adress.gNummer + "\n" + this.Adress.pNummer + " " + this.Adress.pOrt;
    }
}

function Adress(gNamn, gNummer, pNummer, pOrt) {
    this.gNamn = gNamn;
    this.gNummer = gNummer;
    this.pNummer = pNummer;
    this.pOrt = pOrt;
}

function Constructor() {

    let namn = "Per Zackrisson ";
    let epost = "Pelle_9z@hotmail.com";
    let mobil = "0731417253";
    let gNamn = "Skebokvarnsvägen";
    let gNummer = "326";
    let pNummer = "12456";
    let pOrt = "Bandhagen";

    let person = new Person(namn, epost, mobil, gNamn, gNummer, pNummer, pOrt);

    console.log(person.print());
}

Constructor();