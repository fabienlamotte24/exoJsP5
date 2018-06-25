var languagesArrayCreation = function () {
var languages = ['Html','CSS','Java','PHP'];//Créé un tableau avec des chainnes de caractères//
  return languages;
}

var numbersArrayCreation = function () {
var numbers = [0,1,2,3,4,5];//Créé un tableau avec des nombres//
    return numbers;
}

var ElementReplacement = function (languages) {
var languages = ['Html','CSS','Java','PHP'];//Remplacement d'un élément du tableau en spécifiant sa position et son nouveau nom//
languages[2] = 'Javascript';
  return languages;
}

var AddElementToLanguagesArray = function (languages) {
var languages = ['Html','CSS','Javascript','PHP',];//Ajoute des éléments à la fin du tableau//
languages.push('Ruby', 'Python');
  return languages;
}

var AddElementToNumbersArray = function (numbers) {
var numbers = [0,1,2,3,4,5];//Ajoute des élément au tableau en première position//
numbers.unshift(-2,-1);
  return numbers;
}

var deleteArrayFirstElement = function (languages) {
var languages = ['Html','CSS','Javascript','PHP','Ruby','Python'];//Supprime le 1er élément du tableau//
languages.shift();
  return languages;
}

var deleteArrayLastElement = function (languages) {
var languages = ['CSS','Javascript','PHP','Ruby','Python'];//Supprime le dernier élément du tableau//
languages.pop();
  return languages;
}

var stringToArray = function (socialMediaInString) {
var socialMedia = socialMediaInString.split(',');//Converti une chaine de caractère en tableau séparé par une virgule//
  return socialMedia;
}

var arrayToString = function (languages) {
var languagesInString = languages.toString(',');//Converti un tableau en chaine de caractere séparé par une virgule//
  return languagesInString;
}

var arraySort = function (socialMedia) {//Tri les éléments d'un tableau//
socialMedia.sort()
  return socialMedia;
}

var arrayInvert = function (socialMedia){//Inverse les éléments d'un tableau//
socialMedia.reverse();
  return socialMedia;
}
