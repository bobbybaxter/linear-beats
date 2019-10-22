import Combinatorics from 'js-combinatorics';

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const permutate = (array, arrayToPushTo) => {
  Combinatorics.permutation(array, 4).toArray()
    .map((x) => {
      const a = JSON.stringify(arrayToPushTo);
      const b = JSON.stringify(x);
      if (a.indexOf(b) === -1) {
        arrayToPushTo.push({ permutations: x });
      }
      return x;
    });
};

export default { permutate, printToDom };
