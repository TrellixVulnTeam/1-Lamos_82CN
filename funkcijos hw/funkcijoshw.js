console.log(`DUOMENU STRUKTUROS`)
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}
//1.Parašykite funkciją, kurios argumentas būtų tekstas, kuris yra atspausdinamas su console.log;
console.log(`1 UZDAVINYS`)


function tekstas(vardas){
    
    console.log(`Labukas ${vardas}`)
}

tekstas('Kajus');

//2.Parašykite funkciją su dviem argumentais, pirmas argumentas tekstas, įterpiamas atspausdinamas su console.log, 
//o antrasis kiek kartų spausdinimas atliekamas. Rašydami šią funkciją remkitės pirmame uždavinyje parašytą funkciją;
console.log(`2 UZDAVINYS`)
let countPaminetas = 0;
function tekstas1(vardas, paminetas){
    for (let i = 0; i < paminetas; i++){
        console.log(`Labukas ${vardas}`)
    }
  
}

tekstas1('Kajus', 5);


//4.Parašykite funkciją, kuri skaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos 
//(išskyrus vienetą ir patį save)
console.log(`4 UZDAVINYS`)

function sveikuSkaicuKiekis(skaicius) {
     let count = 0;
     for (let i=2; i<skaicius; i++){
        if ((skaicius % i === 0) && (i != skaicius)) {
            count++;
        }
    }
    return count
}

    console.log(sveikuSkaicuKiekis(412));
    console.log(sveikuSkaicuKiekis(501));
    
    
   
    sveikuSkaicuKiekis()

//5.Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 33 iki 77. Išrūšiuokite 
//masyvą pagal daliklių be liekanos kiekį mažėjimo tvarka, panaudodami ketvirto uždavinio funkciją.
console.log(`5 UZDAVINYS`)

const masyvas5 = [];
let reiksmes;

for(let i = 0; i < 100; i++){
    let reiksmes = rand(33, 77);
    masyvas5.push(reiksmes);
}
 for(let k = 0; k < masyvas5.length; k++){
    
    masyvas5.sort((a, b) => {
     
        if (sveikuSkaicuKiekis(a) > sveikuSkaicuKiekis(b)){
            return -1;
        }
        if (sveikuSkaicuKiekis(a) < sveikuSkaicuKiekis(b)){
            return 1;
        }
    })
    
  
}

console.log(masyvas5);


//6. Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 333 iki 777. 
//Naudodami 4 uždavinio funkciją iš masyvo ištrinkite pirminius skaičius.
console.log(`6 UZDAVINYS`)

const masyvas6 = [];
let reiksmes6;
let pirminiai = [];

for(let i = 0; i < 100; i++){
    let reiksmes = rand(333, 777);
    masyvas6.push(reiksmes);
}
    for(let k = 0; k < masyvas6.length; k++){
        if(sveikuSkaicuKiekis(masyvas6[k]) === 0){
            pirminiai.push(masyvas6[k])
        }
}
masyvas6.length = masyvas6.length - pirminiai.length
console.log(pirminiai)
console.log(masyvas6)



//7.Sugeneruokite atsitiktinio (nuo 10 iki 20) ilgio masyvą, kurio visi, išskyrus paskutinį, 
//elementai yra atsitiktiniai skaičiai nuo 0 iki 10, o paskutinis masyvas, kuris generuojamas pagal tokią pat salygą
// kaip ir pirmasis masyvas. Viską pakartokite atsitiktinį nuo 10 iki 30  kiekį kartų. Paskutinio masyvo paskutinis 
// elementas yra lygus 0;
console.log(`7 UZDAVINYS`)

 function masyvasMasyve() {
    const masyvas7 = [];
    masyvas7.length = rand(10, 20);
    for(let i = 0; i < masyvas7.length; i++) {
        masyvas7[i] = []
        for(let j = 0; j < masyvas7.length - 1; j++) {
          masyvas7[j] = rand(0, 10);
        }
    }
    console.log(masyvas7);
  };

  masyvasMasyve();


//8.Suskaičiuokite septinto uždavinio elementų, kurie nėra masyvai, sumą. Skaičiuoti reikia visuose masyvuose ir 
//submasyvuose.
console.log(`8 UZDAVINYS`)

//9.Sugeneruokite masyvą iš trijų elementų, kurie yra atsitiktiniai skaičiai nuo 1 iki 33. 
//Jeigu tarp trijų paskutinių elementų yra nors vienas ne pirminis skaičius, prie masyvo pridėkite dar vieną elementą-
//atsitiktinį skaičių nuo 1 iki 33. Vėl patikrinkite pradinę sąlygą ir jeigu reikia pridėkite dar vieną elementą. 
//Kartokite, kol sąlyga nereikalaus pridėti elemento. 
console.log(`9 UZDAVINYS`)

const masyvas9 = [];

for(let i = 0; i < 3; i++){
    masyvas9[i] = rand(1, 33)
}
console.log(masyvas9)
console.log(sveikuSkaicuKiekis(masyvas9[masyvas9.length-1]))
console.log(sveikuSkaicuKiekis(masyvas9[masyvas9.length-2]))
console.log(sveikuSkaicuKiekis(masyvas9[masyvas9.length-3]))

do{ masyvas9.push(rand(1, 33));

} while (
sveikuSkaicuKiekis(masyvas9[masyvas9.length-1]) != 0 ||
sveikuSkaicuKiekis(masyvas9[masyvas9.length-2]) != 0 ||
sveikuSkaicuKiekis(masyvas9[masyvas9.length-3]) != 0)


console.log(masyvas9)
console.log(sveikuSkaicuKiekis(masyvas9[masyvas9.length-1]))
console.log(sveikuSkaicuKiekis(masyvas9[masyvas9.length-2]))
console.log(sveikuSkaicuKiekis(masyvas9[masyvas9.length-3]))


//10.Sugeneruokite masyvą iš 10 elementų, kurie yra masyvai iš 10 elementų, kurie yra atsitiktiniai skaičiai nuo 1 iki 100.
// Jeigu tokio didelio masyvo (ne atskirai mažesnių) pirminių skaičių vidurkis mažesnis už 70, suraskite masyve 
//mažiausią skaičių (nebūtinai pirminį) ir prie jo pridėkite 3. Vėl paskaičiuokite masyvo pirminių skaičių vidurkį ir
// jeigu mažesnis nei 70 viską kartokite. 
console.log(`10 UZDAVINYS`)

const masyvas10 = [];
masyvas10.length = 10;
let pirminiaiSkaiciai = 0;
let pirminiuSkaiciuSuma = 0;


for (let i = 0; i < masyvas10.length; i++) {
    const masyvas10A = [];
    for (let j = 0; j < 10; j++) {
       masyvas10A[j] = rand(1, 100);
    
    if(sveikuSkaicuKiekis(masyvas10A[j]) === 0){
        pirminiaiSkaiciai += 1;
        pirminiuSkaiciuSuma = pirminiuSkaiciuSuma + masyvas10A[j];
       
    }
    
 }
masyvas10[i] = masyvas10A
   


}



console.log(masyvas10)
console.log(pirminiaiSkaiciai)
console.log(pirminiuSkaiciuSuma)





