
//____Exo1 Boucles FOR
//Creer une varaible de type array et inserez toutes les personnes de la classe
//A l'aide d'une boucle for, dites `bonjour + prenom` à chaque personne du tableau
// let monTab = ["Adil","Agim","Ali","Antoine","Chris","Elvis","Fanny","Haroune","Ilias D","Ilias El","Jean","Kevin","Lira","Mouna","Nasila","Nathan","Seif","Stan","Van Hoa","Yassine"];

// for(let i=0; i < monTab.length; i++ ){  // method for in : (i in monTab)
//     console.log("Bonjour"+ " " +monTab[i]);
// }
//____Exo 2 Boucles FOR (let)
//Dans un prompt inserés un nombre 
//A l'aide d'une boucle for, affichez les nombres de 0 jusqu'au nombre que vous avez choisi.
// Let nbr = prompt("Inserez un nombre")
// for(let i = 0;i < nbr;){
//     i+=1
//     console.log(i);
// }
//____Exo 3 boucle FOR
// Avec une boucle for affichez le nombre de tours de la boucle entre 0 et 20 
// Affichez les chiffres et dites si c'est un nombre paire ou impaire
// for(let i =0; i < 20; i++){
//     console.log(i);
//     if(i%2 == 0){
//         console.log(i+" est pair");
//     }else{
//         console.log(i +" est impair");
//     }
// }
/////////////////////////////////////////////////////////////////
//Exo 4 
//Déclarer une variable qui se nomme 'multiplicateur' valant 5
//Utiliser une boucle for pour créer une table de multiplication allant jusqu'a 9 et apparaissant dans la console sous le format 5 x 1 = 5 etc. (ex: 5x1 = ... 5x2 = ... 5x3 = ... jusqu'à 9)
// let multiplicateur = 5
// for (i=0; i<=9; i++) {
//     console.log(multiplicateur+" x "+i+"="+multiplicateur*i);
// }

//Exo 5
//Faire une boucle décendante pour les nombres pairs de 20 à 0
    //Ex: 20-18-16, ect.

//     for(let i =20; i >= 0; i-=2){
//     console.log(i);
// }

//Exo 6
//Créer un tableau avec les prénoms des gens de la classe
//Avec l'aide d'une boucle, mettre les prénoms ayant plus de 5 caractères dans un second tableau qui se nomme 'longPrenoms'
// let mytab =["Adil","Agim","Ali","Antoine","Chris","Elvis","Fanny","Haroune","Ilias D","Ilias El","Jean","Kevin","Lira","Mouna","Nasila","Nathan","Seif","Stan","Van Hoa","Yassine"];
// let longPrenoms=[];
// console.log(mytab);
// for(let i =0;i < mytab.length;i++){
//     if(mytab[i].length > 5){
//         longPrenoms.push(mytab[i]);
//     }
// }
// console.log(longPrenoms);
//Exo 7
// Créer un tableau qui se nomme 'sommes' avec une multitude de valeurs numérique
//créer un tableau qui se nomme 'grossesSommes'. Si la valeur excède 60, pousser les dans ce tableau et les retirer du tableau sommes
// let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];
// let grossesSommes = [];
// for(i in sommes){
//     if(sommes[i]>60){
//         grossesSommes.push(sommes[i]);
//     }
// }
// for(i in grossesSommes){
//     sommes.splice(sommes.indexOf(grossesSommes[i]),1);
// }

// console.log(sommes);
// console.log(grossesSommes);

//Exo 8
// Voici un tableau : 
//Triez le contenu du tableau donnees en verifiant le type de chaque donnée
//Creez 4 Tableaux : 'typeString' , 'typeNumber' , 'typeObject' , 'typeAutre.
//Videz le tableau "donnees" en redistribuant avec l'aide de condition et d'une function prédéfinie trouvée sur internet dans les bons tableaux.

// let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];
// let typeString=[];
// let typeNumber=[];
// let typeObject=[];
// let typeAutre=[];

// donnees.forEach(element => {
//     if(typeof element == "string"){
//         typeString.push(element);
//     }else if(typeof element =="number"){
//         typeNumber.push(element);
//     }else if(typeof element =="object"){
//         typeObject.push(element);
//     }else{
//         typeAutre.push(element);
//     }
// });

// donnees.splice(0,donnees.length);

// console.log(donnees);
// console.log(typeString);
// console.log(typeNumber);
// console.log(typeObject);
// console.log(typeAutre);

//_____Exo 9 Boucles FOREACH
//Creer une varaible de type array et inserez toutes les personnes de la classe
//A l'aide d'une boucle foreach, dites bonjour + prenom à chaque personne du tableau
// let classe =["Adil","Agim","Ali","Antoine","Chris","Elvis","Fanny","Haroune","Ilias D","Ilias El","Jean","Kevin","Lira","Mouna","Nasila","Nathan","Seif","Stan","Van Hoa","Yassine"];
// classe.forEach(element => {
//     console.log("Bonjour "+ element);
// });


// //_____Exo 10 Boucle FOREACH
// //Créez un un array qui contient 5 éléments
// //Affichez touts les éléments a l'aide d'une boucle foreach
// let elem = ["element1","element2","element3","element4","element5"];
// elem.forEach(element => {
//     console.log(element);
// });

//_____Exercice 11 Boucles (Foreach)

//Créer un tableau dans le quel vous devez avoir les prenoms de chaque student de la Coding School 19
//A l'aide l'un foreach, affichez les prenom des students qui commenecent par (A, F, G, I, H, L, M) en majuscule, les autres en minuscule

// let coding = ["Adil","Agim","Ali","Antoine","Chris","Elvis","Fanny","Haroune","Ilias D","Ilias El","Jean","Kevin","Lira","Mouna","Nasila","Nathan","Seif","Stan","Van Hoa","Yassine"];
// coding.forEach(element => {

// });

//Exercice 1 boucle while
// A l'aide d'un prompt, choisissez un chiffre et enregistrez la valeur dans une variable
// Déclarez une variable compteur qui commence par 0
// A l'aide d'une boucle while, incrémentez de 1 la variable compteur à chaque boucle et affichez touts les chiffres de 0 jusqu'au nombre choisis au debut dans le prompt
// let chiffre = prompt("Donne un nombre :");
// let compteur =0;
// while (chiffre >= compteur) {
//     console.log(compteur);
//     compteur++;
// }

//Exo 2 Boucles WHILE
//Créez une variable classe avec un array
//A l'aide d'un prompt, choisissez le nombre max d'étudiants dans la classe
//A l'aide d'une boucle while, inserez des étudiants dans la classe tant que la classe n'est pas remplie
//Après avoir rempli la classe, affichez tous les etudiants
// let classe1 = [];
// let nomEleve;
// let nbMax = prompt("Nombre max d'élèves ?");
// while (classe.length < nbMax) {
//     nomEleve = prompt("Entrez un nom d'élève");
//     classe.push(nomEleve);
    
// }
// console.log(classe1);
// alert("Le nombre d'élèves est suffisant!");
// Ex 03
//Créer un tableau de 9 prénoms 
//Faire une boucle sur les prénoms précédé de Bonjour tant que 9 n'est pas atteint et les affiché dans la console
//Astuce : let i = 0;
//Astuce 2 : (i < 9)
// let tab = ["Adil","Agim","Ali","Antoine","Chris","Elvis","Fanny","Haroune","Ilias D"];
// let i = 0;
// while(i < 9) {
//     console.log(`Bonjour ${tab[i]}`);
//     i++;
// }
// Exo 04
//Créer un tableau de 6 fruits
//Avec l'aide d'une boucle while vider le tableau.
//Utilisez fruits.length
// let fruits = ["Fraise","Banane","Pomme","Kiwi","Mangue","Litchi"];
// while(fruits.length > 0) {
//     fruits.pop();
//     console.log(fruits);
// }
// Exo 05
//Créer un tableau de 4 légumes du nom de 'panierLegumes'
//Stocker la longueur du tableau dans une variable du nom de 'longeur'//Vider le tableau panierLegumes pour mettre son contenu dans un second tableau du nom de 'caisseLegumes'
let panierLegumes = ["Banane","Kiwi","Mangue","Litchi"];
let longueur = panierLegumes.length-1;
let caisseLegumes =[];
while (longueur >= 0) {
    caisseLegumes.push(panierLegumes[0]);
    panierLegumes.shift();
    console.log(panierLegumes);
    console.log(caisseLegumes);
    longueur--;
}
// Exo6
// Préparer une énigme, et faites une boucle WHILE qui va vérifier si l'utilisateur répond correctement à l'énigme via un prompt, tant qu'il se trompe, vous lui reposer la question. S'il a juste, faites une alerte qui le félicite
// let quiz = prompt("J'ai pas d'idée donc entre la lettre 'n' :");toLowerCase();
// while (quiz != "n") {
//     quiz = prompt("J'ai pas d'idée donc entre la lettre 'n' :");
// }
// alert("Félicitations");