let zahlausform = document.getElementById("zahl");

function verdoppeln() {
  console.log(zahlausform.value);

  let n = Number(zahlausform.value) + Number(zahlausform.value);
  console.log(n);
  ausgabe.innerHTML = n;
}


let jahrAusForm = document.getElementById("jahr");
const aktuellesJahr = 2022;

function alterBerechnen(){
  console.log(jahrAusForm.value);
  console.log(typeof(jahrAusForm.value))
  let j = Number(jahrAusForm.value);
  console.log(j);
  console.log(typeof(j));
  m = aktuellesJahr - j;
  console.log(m);
  ausgabe2.innerHTML = m;
}


let alterAusForm1 = document.getElementById("alter1");
let alterAusForm2 = document.getElementById("alter2");


function differenzBerechnen(){
  let k = Number(alterAusForm1.value);
  console.log(k);
  let l = Number(alterAusForm2.value);
  console.log(l);
  z = k - l;
  console.log(z);
  ausgabe3.innerHTML = z;
}
