function Person(namn, epost, mobil, Adress)
{
this.fullName = namn;
this.email = epost;
this.mobile = mobil;
this.location = Adress;
}
let adress = new Person("Per Zackrisson", "Pelle_9z@hotmail.com", 0731417253, "Vrenavägen 10");
adress.Postnummer = "124 56";
adress.Ort= "Vantör";

adress.Hela = function() {
    return this.fullName + " " + this.location + " " + this.Postnummer + " " + this.Ort
}
console.log(adress.Hela());