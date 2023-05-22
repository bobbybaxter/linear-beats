import React from 'react';
import { getPermutationData } from 'src/db/permutationData';

import formatBeat from '../../helpers/formatBeat';
import util from '../../helpers/util';
import Test4Measure from './Test4Measure';

const defaultHeader = {
  // QUICK REFERENCE:
  // https://web.archive.org/web/20190214175540/http://www.stephenmerrony.co.uk/uploads/ABCquickRefv0_6.pdf

  // required fields
  referenceNumber: '1',
  title: 'Title',
  meter: '', // ex: 4/4

  // optional fields
  book: '',
  composer: '',
  discography: '',
  fileUrl: '',
  group: '',
  history: '',
  instruction: 'linebreak $\n%%stretchlast',
  noteUnitLength: '1/16',
  macro: '',
  notes: '',
  origin: '',
  parts: '', // ex: 'A', 'ABAC', '(A2B)3`
  tempo: '', // ex: 'allegro', '1/4=120'
  rhythm: '', // ex: 'R', 'reel'
  remark: '',
  source: '',
  symbolLine: '', // ex: '!pp! ** !f!'
  userDefined: 'n=!style=x!', // ex: 'T = !trill!'
  voice: 'ALL stem=up', // ex '4 clef=bass', 'perc', 'ALL stem=up'
  words: '', // lyrics
  wordsInline: false, // false = lyrics after tune
  transcriber: '', // also include copyright info here

  // required field
  key: 'clef=perc', // ex: 'G', 'G clef=perc
};

class Test4 extends React.Component {
  state = {
    test3Beats: [],
    abcjsStrings: [],
  }

  componentDidMount() {
    this.getPermsData();
  }

  buildAbcjsStrings = () => {
    const { test3Beats } = this.state;
    const arrayOfStrings = [];
    const title = 'X: 1\nT: ';
    const notationInfo = '\nC:\nL: 1/16\nU: n=!style=x!\nK: clef=perc\nI:linebreak $\n%%stretchlast\nV: ALL stem=up\n';
    test3Beats.forEach((perm) => {
      const lastBeat = formatBeat(perm);
      if (perm.isUsed === false) {
        const id = perm.permutations;
        const abcjsString = `${title}${perm.permutations} - ${lastBeat}${notationInfo}|:${perm.permutations} ${perm.permutations} ${perm.permutations} ${lastBeat}:||`;
        const measureObject = { id, abcjsString };
        arrayOfStrings.push(measureObject);
      }
    });
    this.setState({ abcjsStrings: arrayOfStrings });
  }

  getPermsData = () => {
    getPermutationData()
      .then((res) => {
        this.setState({ test3Beats: res });
        this.buildAbcjsStrings();
      })
      .catch((err) => console.error(err));
  };

  render() {
    const makeTest4Measures = this.state.abcjsStrings
      .map((measure) => (
        <Test4Measure
          key={measure.id}
          id={measure.id}
          notation={measure.abcjsString}
        />
      ));
    return (
      <div className="Test4 mt-3 justify-content-center">
        <h1>Test4</h1>
        <div className="d-flex flex-row flex-wrap">
            {util.buildHeader(defaultHeader)}
            {formatBeat({
              beat1: 'F',
              beat2: 'F',
              beat3: 'F',
              beat4: 'z1',
            })}
            {makeTest4Measures}
          </div>
      </div>
    );
  }
}

export default Test4;