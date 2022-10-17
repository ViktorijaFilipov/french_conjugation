const conjugationFR = require("conjugation-fr");

const tenseGroup = {
    infinitif: "infinitive",
    indicatif: "indicative",
    subjonctif: "subjunctive",
    impératif: "imperative",
    participe: "participle",
    conditionnel: "conditional",
}

const tenseName = {
    "infinitif-présent": "infinitive-present",
    "présent": "present",
    "imparfait": "imperfect",
    "futur": "future",
    "passé-simple": "simple-past",
    "passé-composé": "perfect-tense",
    "plus-que-parfait": "pluperfect",
    "passé-antérieur": "anterior-past",
    "futur-antérieur": "anterior-future",
    "subjonctif-passé": "subjunctive-past",
    "subjonctif-plus-que-parfait": "subjunctive-pluperfect",
    "impératif-présent": "imperative-present",
    "impératif-passé": "imperative-past",
    "participe-présent": "present-participle",
    "participe-passé": "past-participle",
    "passé-conditionnel": "conditional-past"
}

const tenseNameFrench = {
    "infinitive-present": "infinitif-présent",
    "present": "présent",
    "imperfect": "imparfait",
    "future": "futur",
    "simple-past": "passé-simple",
    "perfect-tense": "passé-composé",
    "pluperfect": "plus-que-parfait",
    "anterior-past": "passé-antérieur",
    "anterior-future": "futur-antérieur",
    "subjunctive-past": "subjonctif-passé",
    "subjunctive-pluperfect": "subjonctif-plus-que-parfait",
    "imperative-present": "impératif-présent",
    "imperative-past": "impératif-passé",
    "present-participle": "participe-présent",
    "past-participle": "participe-passé",
    "conditional-past": "passé-conditionnel"
}

const conjugate = (verb, tenseGroup, tenseNameFrench, tenseName, fGender) => {
    console.log(`${tenseGroup} - ${tenseNameFrench} - ${verb}`);
    console.log(conjugationFR.conjugate(verb, tenseGroup, tenseName, fGender));
}

const infinitif = (verb, fGender) => {
    // infinitif présent
    conjugate(verb, tenseGroup.infinitif, tenseNameFrench["infinitive-present"], tenseName["infinitif-présent"], fGender);
}

const indicatif = (verb, fGender) => {
    // présent
    conjugate(verb, tenseGroup.indicatif, tenseNameFrench["present"], tenseName["présent"], fGender);
    // imparfait
    conjugate(verb, tenseGroup.indicatif, tenseNameFrench["imperfect"], tenseName["imparfait"], fGender);
    // futur
    conjugate(verb, tenseGroup.indicatif, tenseNameFrench["future"], tenseName["futur"], fGender);
    // passé simple
    conjugate(verb, tenseGroup.indicatif, tenseNameFrench["simple-past"], tenseName["passé-simple"], fGender);
    // passé composé
    conjugate(verb, tenseGroup.indicatif, tenseNameFrench["perfect-tense"], tenseName["passé-composé"], fGender);
    // plus-que-parfait
    conjugate(verb, tenseGroup.indicatif, tenseNameFrench["pluperfect"], tenseName["plus-que-parfait"], fGender);
    // passé antérieur
    conjugate(verb, tenseGroup.indicatif, tenseNameFrench["anterior-past"], tenseName["passé-antérieur"], fGender);
    // futur antérieur
    conjugate(verb, tenseGroup.indicatif, tenseNameFrench["anterior-future"], tenseName["futur-antérieur"], fGender);
}

const subjonctif = (verb, fGender) => {
    // présent
    conjugate(verb, tenseGroup.subjonctif, tenseNameFrench["present"], tenseName["présent"], fGender);
    // imparfait
    conjugate(verb, tenseGroup.subjonctif, tenseNameFrench["imperfect"], tenseName["imparfait"], fGender);
    // subjonctif passé
    conjugate(verb, tenseGroup.subjonctif, tenseNameFrench["subjunctive-past"], tenseName["subjonctif-passé"], fGender);
    // subjonctif plus-que-parfait
    conjugate(verb, tenseGroup.subjonctif, tenseNameFrench["subjunctive-pluperfect"], tenseName["subjonctif-plus-que-parfait"], fGender);
}

const impératif = (verb, fGender) => {
    // impératif présent
    conjugate(verb, tenseGroup.impératif, tenseNameFrench["imperative-present"], tenseName["impératif-présent"], fGender);
    // impératif passé
    conjugate(verb, tenseGroup.impératif, tenseNameFrench["imperative-past"], tenseName["impératif-passé"], fGender);
}

const participe = (verb, fGender) => {
    // participe présent
    conjugate(verb, tenseGroup.participe, tenseNameFrench["present-participle"], tenseName["participe-présent"], fGender);
    // participe passé 
    conjugate(verb, tenseGroup.participe, tenseNameFrench["past-participle"], tenseName["participe-passé"], fGender);
}

const conditionnel = (verb, fGender) => {
    // présent
    conjugate(verb, tenseGroup.conditionnel, tenseNameFrench["present"], tenseName["présent"], fGender);
    // passé conditionnel
    conjugate(verb, tenseGroup.conditionnel, tenseNameFrench["conditional-past"], tenseName["passé-conditionnel"], fGender);
}


const verb = "écrire";

infinitif(verb);
indicatif(verb);
subjonctif(verb);
impératif(verb);
participe(verb);
conditionnel(verb);




