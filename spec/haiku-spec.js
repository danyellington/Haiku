
import {Haiku} from './../js/haiku.js';

describe('haiku', function(){
it ('should test if word returns', function(){
  var words = new Haiku("dog");
  expect(words).toEqual(words);
});

  // it ('should test how many syllabals are in a word', function() {
  //   var haiku = new Haiku(dog)
  //   expect(haiku.word).toEqual(1)
  // });
});
