import React, { useEffect, useState } from 'react';
import { getPermutationData } from 'src/db/permutationData';
import { FourFourMeasure } from './Test1Measure';

type AbcJsStringObject = {
  id: string;
  abcjsString: string;
};

export function Test1() {
  const [abcjsStrings, setAbcJsStrings] = useState<AbcJsStringObject[]>([]);

  useEffect(() => {
    async function requestData() {
      const data = await getPermutationData();
      buildAbcjsStrings(data);
    }

    requestData();
  }, []);

  function buildAbcjsStrings(data: any) {
    const arrayOfStrings: AbcJsStringObject[] = [];
    const title = 'X: 1\nT: ';
    const notationInfo =
      '\nC:\nL: 1/16\nU: n=!style=x!\nK: clef=perc\nI:linebreak $\n%%stretchlast\nV: ALL stem=up\n';

    data.forEach((perm: any) => {
      if (perm.isUsed !== false) {
        const id = perm.permutations;
        const abcjsString = `${title}${perm.permutations}${notationInfo}|:${perm.permutations} ${perm.permutations} ${perm.permutations} ${perm.permutations}:||`;
        const measureObject = { id, abcjsString };
        arrayOfStrings.push(measureObject);
      }
    });

    setAbcJsStrings(arrayOfStrings);
  }

  const makeTest1Measures = abcjsStrings.map(measure => (
    <FourFourMeasure
      key={measure.id}
      id={measure.id}
      notation={measure.abcjsString}
    />
  ));

  return (
    <div className="Test1 mt-3 justify-content-center">
      <h1>Test1</h1>
      <div className="d-flex flex-row flex-wrap">{makeTest1Measures}</div>
    </div>
  );
}
