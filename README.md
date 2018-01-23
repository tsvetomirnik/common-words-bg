# common-words-bg [![Build Status](https://travis-ci.org/tsvetomirnik/common-words-bg.svg?branch=master)](https://travis-ci.org/tsvetomirnik/common-words-bg)

Collection of common Bulgarian words which doesn't bring meaning to classification algorithms


## Install

```
npm install common-words-bg --save
```


## API

| Name       | Type                   | Description                                    |
|------------|------------------------|------------------------------------------------|
| words      | string[]               | Array of all common words                      |
| isCommon() | (str: string): boolean | Checks wheather a word is common               |


## Words

Contains the following grammatical types of words:
- Adverbs
- Conjunctions
- Pronouns
- Prepositions
- Auxiliary verbs


## Grammatical terminology

- `Глагол` - Verb
- `Спомагателен глагол` - Auxiliary verb
- `Местоимение` - Pronoun
- `Наречие` - Adverb
- `Предлог` - Preposition
- `Съюз` - Conjunction
- `Междуметие` - Interjection
