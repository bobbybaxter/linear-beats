import { permutation } from 'js-combinatorics';

const abbreviateHeader = headerTitle =>
  ({
    referenceNumber: 'X: ',
    title: 'T: ',
    meter: 'M: ',
    book: 'B: ',
    composer: 'C: ',
    discography: 'D: ',
    fileUrl: 'F: ',
    group: 'G: ',
    history: 'H: ',
    instruction: 'I: ',
    noteUnitLength: 'L: ',
    macro: 'm: ',
    notes: 'N: ',
    origin: 'O: ',
    parts: 'P: ',
    tempo: 'Q; ',
    rhythm: 'R: ',
    remark: 'r: ',
    source: 'S: ',
    symbolLine: 's: ',
    userDefined: 'U: ',
    voice: 'V: ',
    words: 'W: ',
    wordsInline: 'w: ',
    transcriber: 'Z: ',
    key: 'K: ',
  }[headerTitle]);

const buildHeader = headerObject => {
  const headerObj = headerObject;
  let headerString = '';

  // removes wordsInline if there aren't any words
  if (headerObj.words === '') {
    delete headerObj.wordsInline;
  }

  // loops through headerObj to build headerString
  for (const propName in headerObj) {
    if (headerObj[propName] === '') {
      // removes any blank properties
      delete headerObj[propName];
    } else {
      // converts the header to it's abbreviate and appies the value
      headerString += `${abbreviateHeader(propName)}${headerObj[propName]} \n`;
    }
  }
  return headerString;
};

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const permutate = (array, arrayToPushTo) => {
  permutation(array, 4)
    .toArray()
    .map(x => {
      const a = JSON.stringify(arrayToPushTo);
      const b = JSON.stringify(x);
      if (a.indexOf(b) === -1) {
        arrayToPushTo.push({ permutations: x });
      }
      return x;
    });
};

const exports = {
  abbreviateHeader,
  buildHeader,
  permutate,
  printToDom,
};

export default exports;