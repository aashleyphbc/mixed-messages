const nouns = ['bird', 'sandwich', 'brick', 'couch', 'gorilla', 'car', 'airplane', 'dog', 'chicken', 'computer'];
const verbs = ['run', 'fly', 'swim', 'walk', 'crawl', 'sashay', 'creep', 'wander'];
const adjectives = ['wild', 'beautiful', 'crazy', 'giant', 'tiny', 'hideous', 'angry', 'horrible', 'elite', 'oversized', 'orange', 'incoherent', 'unusual'];
const vowels = ['a', 'e', 'i', 'o', 'u'];

const getRandomNumber = num => {
    return Math.floor(Math.random() * num);
}

const getRandomNoun = () => {
    let nounIndex = getRandomNumber(nouns.length);
    return nouns[nounIndex];
}

const getRandomVerb = () => {
    let verbIndex = getRandomNumber(verbs.length);
    return verbs[verbIndex];
}

const getRandomAdjective = () => {
    let adjectiveIndex = getRandomNumber(adjectives.length);
    return adjectives[adjectiveIndex];
}

const generateMadlib = () => {
    let noun = getRandomNoun();
    let verb = getRandomVerb();
    let adjective = getRandomAdjective();
    if (vowels.includes(adjective[0])) {
        return `LOOK OUT! An ${adjective} ${noun} is about to ${verb} by!`;
    } else {
        return `LOOK OUT! A ${adjective} ${noun} is about to ${verb} by!`;
    }
}

console.log(generateMadlib());