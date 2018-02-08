
import {Haiku} from './../js/haiku.js';

describe('haiku', function(){
it ('should test if word returns', function(){
  let word = new Haiku("dog");
  expect(word).toEqual(word);
});

it ('should test if word returns lower-case', function(){
  let word = new Haiku("DOG");
  expect(word).toEqual(word);
});

  // it ('should test how many syllabals are in a word', function() {
  //   var haiku = new Haiku(dog)
  //   expect(haiku.word).toEqual(1)
  // });
});
