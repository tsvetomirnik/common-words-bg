import test from 'ava';
import commonBG from './index.js';

test('common words array', t => {

    t.is(
        commonBG.words.length > 0,
        true,
        'has length'
    );

});

test('isCommon funtion', t => {

    t.is(
        commonBG.isCommon('клавиатура'),
        false,
        'returns false when called with non common word'
    );

    t.is(
        commonBG.isCommon('но'),
        true,
        'returns true when called with a common word'
    );

    t.is(
        commonBG.isCommon(commonBG.words[0]),
        true,
        'works when called with first common word'
    );

    t.is(
        commonBG.isCommon(commonBG.words[commonBG.words.length - 1]),
        true,
        'works when called with last common word'
    );

    t.is(
        commonBG.isCommon('Защото'),
        true,
        'returns true when called with common word containing capital letters'
    );

});
