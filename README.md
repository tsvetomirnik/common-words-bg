# common-words-bg [![Build Status](https://travis-ci.org/tsvetomirnik/common-words-bg.svg?branch=master)](https://travis-ci.org/tsvetomirnik/common-words-bg)

Collection of common Bulgarian words which doesn't bring meaning to classification algorithms


## Install

```
npm install common-words-bg --save
```


## Usage

```js
const commonBG = require('common-words-bg');

const sentense = 'Недоумявам защо дамата прие с такова подозрение моя подарък.';
const sentenseWords = sentense.split(' ');
const filteredWords = sentenseWords.filter(word => !commonBG.isCommon(word));

// sentenseWords: [ 'Недоумявам', 'защо', 'дамата', 'прие', 'с', 'такова', 'подозрение', 'моя', 'подарък.' ]
// filteredWords: [ 'Недоумявам', 'дамата', 'прие', 'подозрение', 'подарък.' ]
```

**Result:** Недоумявам ~~защо~~ дамата прие ~~с такова~~ подозрение ~~моя~~ подарък.


## API

| Name       | Type                   | Description                                    |
|------------|------------------------|------------------------------------------------|
| words      | string[]               | Array of all common words                      |
| isCommon() | (str: string): boolean | Checks wheather a word is common               |


## Words

Contains the following grammatical types of words:
- Particles
- Adverbs
- Conjunctions
- Interjections
- Pronouns
- Prepositions
- Auxiliary verbs
- Polite words
- Numerical words
- Numerical adjectives


## Grammatical terminology

- `Verb` - Глагол
- `Auxiliary verb` - Спомагателен глагол
- `Pronoun` - Местоимение
- `Particle` - Частица
- `Adverb` - Наречие
- `Preposition` - Предлог
- `Conjunction` - Съюз
- `Interjection` - Междуметие


## License

[MIT](./license)