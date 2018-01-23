'use-strict';

// Наречия

// показателни
const indicativeAdverbs = ['сега', 'тогава', 'така', 'иначе', 'тук', 'тука', 'там', 'толкова', 'затова', 'насам', 'натам'];

// въпросителни
const questionableAdverbs = ['кога', 'как', 'къде', 'колко', 'защо', 'накъде', 'закъде', 'откъде'];

// относителни
const relativeAdverbs = ['когато', 'както', 'където', 'колкото', 'защото', 'закъдето', 'откъдето', 'накъдето'];

// неопределени
const notDistinctiveAdverbs = ['някога', 'някак', 'някъде', 'няколко', 'нанякъде'];

// отрицателни
const negativeAdverbs = ['никога', 'никак', 'никъде', 'николко', 'наникъде'];

// обобщителни
const summarizingАdverbs = ['всякога', 'всякак', 'всякъде', 'всяколко', 'навсякъде'];

const adverbs = [].concat(
    indicativeAdverbs,
    questionableAdverbs,
    relativeAdverbs,
    notDistinctiveAdverbs,
    negativeAdverbs,
    summarizingАdverbs
);

// Съюзи

// съчинителни
const computationalConjunctions = ['и', 'а', 'та', 'па', 'пък', 'ама', 'ами', 'ала', 'но', 'обаче', 'камо', 'ли', 'или', 'дали', 'ту', 'хем'];

// подчинителни
const subordinateConjunctions = ['че', 'за', 'да', 'без', 'който', 'какъвто', 'чийто', 'когато', 'докато', 'щом', 'където', 'както', 'като', 'защото', 'понеже', 'затова', 'ако', 'колкото', 'освен', 'само', 'така', 'макар', 'въпреки'];

const conjunctions = [].concat(
    computationalConjunctions,
    subordinateConjunctions
);

// Местоимения

// лични
const personalPropouns = [
    'аз', 'ти', 'той', 'тя', 'то', 'ние', 'ний', 'вие', 'вий', 'те', // именителен
    'мен', 'мене', 'ме', 'теб', 'тебе', 'те', 'него', 'го', 'нас', 'ни', 'вас', 'ви', 'тях', 'ги', // винителен
    'мене', 'ми', 'тебе', 'ти', 'нему', 'му', 'ней', 'ѝ', 'нему', 'му', 'нам', 'ни', 'вам', 'ви', 'им' // дателен
];

// притежателни
const possessivePronouns = [
    'мой', 'твой', 'негов', 'неин', 'негов', 'наш', 'ваш', 'техен', // м.р. неопр.
    'моят', 'моя', 'твоят', 'твоя', 'неговият', 'неговия', 'нейният', 'нейния', 'неговият', 'неговия', 'нашият', 'нашия', 'вашият', 'вашия', 'техният', 'техния', // м.р. определено
    'моя', 'твоя', 'негова', 'нейна', 'негова', 'наша', 'ваша', 'тяхна', // ж.р. неопр.
    'моята', 'твоята', 'неговата', 'нейната', 'неговата', 'нашата', 'вашата', 'тяхната', // ж.р. определено
    'мое', 'твое', 'негово', 'нейно', 'негово', 'наше', 'ваше', 'тяхно', // ср.р. неопр.
    'моето', 'твоето', 'неговото', 'нейното', 'неговото', 'нашето', 'вашето', 'тяхното',  // ср.р. определено
    'мои', 'твои', 'негови', 'нейни', 'негови', 'наши', 'ваши', 'техни', // мн.ч. неопр.
    'моите', 'твоите', 'неговите', 'нейните', 'неговите', 'нашите', 'вашите', 'техните', // мн.ч. определено
];

// възвратни
const reversePronouns = ['себе', 'се', 'свой', 'своят', 'своя', 'своята', 'свое', 'своето', 'свои', 'своите', 'си'];

// показателни
const indicativePronouns = [
    'този', 'тоя', 'озни', 'оня', 'такъв', 'онакъв', // м.р.
    'тази', 'тая', 'онази', 'оная', 'такава', 'онакава', // ж.р.
    'това', 'туй', 'онова', 'онуй', 'такова', 'онакова', // ср.р.
    'тези', 'тия', 'онези', 'ония', 'такива', 'онакива', // мн.ч.
];

// въпросителни
const questionablePronouns = [
    'който', 'когото', 'комуто', 'чийто', 'какъвто', // м.р.
    'която', 'която', 'комуто', 'тиято', 'каквато', // ж.р.
    'което', 'което', 'комуто', 'чуето', 'каквото', // ср.р.
    'които', 'които', 'комуто', 'чиито', 'каквито', // мн.ч.
    'колкото'
];

// неопределени
const notDistinctivePronouns = [
    'някой', 'нечий', 'някакъв', // м.р.
    'някоя', 'нечия', 'някаква', // ж.р.
    'някое', 'нещо', 'нечие', 'някакво', // ср.р.
    'някои', 'нечии', 'някакви', // мн.ч.
    'няколко'
];

// отрицателни
const negativePronouns = [
    'никой', 'нищо', 'никого', 'никому', 'ничий', 'никакъв', // м.р.
    'никоя', 'ничия', 'никаква', // ж.р.
    'никое', 'ничие', 'никакво', // ср.р.
    'никои', 'ничии', 'никакви', // мн.ч.
    'николко'
];

// обобщителни
const summarizingPronouns = [
    'всеки', 'всякакъв', 'всичкият', // м.р.
    'всяка', 'всякаква', 'всичката', // ж.р.
    'всяко', 'всякакво', 'всичко', 'всичкото', // ср.р.
    'всички', 'всякакви', 'всички', 'всичките' // мн.ч.
];

const pronouns = [].concat(
    personalPropouns,
    possessivePronouns,
    reversePronouns,
    indicativePronouns,
    questionablePronouns,
    notDistinctivePronouns,
    negativePronouns,
    summarizingPronouns
);

// Предлози
const prepositions = ['в', 'на', 'от', 'до', 'с', 'за', 'над', 'под', 'пред', 'зад', 'към', 'през', 'край', 'върху', 'срещу', 'между', 'във'];

// Спомагателни глаголи
const auxiliaryVerbs = [
    'съм', 'си', 'е', 'сме', 'сте', 'са',
    'бях', 'бе', 'беше', 'бяхме', 'бяхте', 'бяха',
    'бих', 'биха', 'бихме', 'бихте',
    'би', 'бил', 'била', 'било', 'били',
    'ще', 'щях', 'щеше', 'щяха', 'щяхме', 'щяхте', 'щял', 'щяла', 'щяло', 'щели'
];

let allCommon = [].concat(
    adverbs,
    conjunctions,
    pronouns,
    prepositions,
    auxiliaryVerbs
);

// Remove duplicates
allCommon = allCommon.filter((word, pos) => allCommon.indexOf(word) === pos);

module.exports = allCommon;