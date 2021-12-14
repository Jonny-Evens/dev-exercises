//Daily Challenge//

let sentence = "The movie is not that bad, I like it";
const sentenceArr = sentence.replaceAll(",", " ").split(" ");
console.log(sentenceArr);
const wordNot = sentenceArr.indexOf("not");
console.log(wordNot);
const wordBad = sentenceArr.indexOf("bad");
console.log(wordBad);
if (wordBad > wordNot) {
  const spanDelete = wordBad - wordNot + 1;
  sentenceArr.splice(wordNot, spanDelete, "good");
  console.log(sentenceArr);
  //three options to remove the extra space after 'good':
  //option 1.
  // commaIndex = sentenceArr.indexOf("");
  // sentenceArr.splice(commaIndex, 1);
  // console.log(sentenceArr);
  // const finalString = sentenceArr.join(" ");
  //option 2.
  // const finalString = sentenceArr.join(" ").replace(/\s+/g, " ");//with this option I wasn't able to repace the extra space with a comma
  //option 3. replaced the extra space with a comma
  const finalString = sentenceArr.join(" ").replace("  ", ", ");
  console.log(finalString);
} else console.log(sentence);