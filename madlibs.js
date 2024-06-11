const nouns = ['bird', 'sandwich', 'brick', 'couch', 'gorilla', 'car', 'airplane'];
const verbs = ['run', 'fly', 'swim', 'walk', 'crawl', 'sashay'];
const adjectives = ['wild', 'beautiful', 'crazy', 'giant', 'tiny', 'hideous'];

const getRandomNumber = num => {
    return Math.floor(Math.random() * num);
}

const getRandomNoun = () => {
    let nounIndex = getRandomNumber(7);
    return nouns[nounIndex];
}

const getRandomVerb = () => {
    let verbIndex = getRandomNumber(6);
    return verbs[verbIndex];
}

const getRandomAdjective = () => {
    let adjectiveIndex = getRandomNumber(6);
    return adjectives[adjectiveIndex];
}

const generateMadlib = () => {
    let noun = getRandomNoun();
    let verb = getRandomVerb();
    let adjective = getRandomAdjective();
    return `LOOK OUT! A ${adjective} ${noun} is about to ${verb} by!`;
}

console.log(generateMadlib());