import React from 'react';
import permutationData from '../../helpers/data/permutationData';
import util from '../../helpers/util';

import Test3Measure from '../Test3Measure/Test3Measure';

import './Test3.scss';

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

class Test3 extends React.Component {
  state = {
    test3Beats: [],
    abcjsStrings: [],
  }

  componentDidMount() {
    this.getPermsData();
  }

  buildBeat(beatObj) {
    let {
      beat1, beat2, beat3, beat4,
    } = beatObj;
    let beatString = '';

    if (beat4 !== 'z1' && beat3 === 'z1' && beat2 !== 'z1' && beat1 === 'z1') {
      return beatObj.permutations;
    }

    if (beat4 === 'z1' && beat3 === 'z1' && beat2 === 'z1' && beat1 === 'z1') {
      beat1 = 'z4';
      beat2 = '';
      beat3 = '';
      beat4 = '';
    }

    if (beat4 === 'z1' && beat3 === 'z1' && beat2 === 'z1' && beat1 !== 'z1') {
      beat1 += 4;
      beat2 = '';
      beat3 = '';
      beat4 = '';
    }

    if (beat4 === 'z1' && beat3 === 'z1' && beat2 !== 'z1') {
      beat3 = 'z2';
      beat4 = '';
    }

    if (beat3 === 'z1' && beat2 === 'z1' && beat1 !== 'z1') {
      beat1 += '3';
      beat2 = '';
      beat3 = '';
    }

    if (beat4 === 'z1' && beat3 !== 'z1') {
      beat3 += '2';
      beat4 = '';
    }

    if (beat3 === 'z1' && beat2 !== 'z1') {
      beat2 += '2';
      beat3 = '';
    }

    if (beat2 === 'z1' && beat1 !== 'z1') {
      beat1 += '2';
      beat2 = '';
    }

    if (beat2 === 'z1' && beat1 === 'z1') {
      beat1 += 'z2';
      beat2 = '';
    }

    beatString = `${beat1}${beat2}${beat3}${beat4}`;
    return beatString;
  }

  buildAbcjsStrings = () => {
    const { test3Beats } = this.state;
    const arrayOfStrings = [];
    const title = 'X: 1\nT: ';
    const notationInfo = '\nC:\nL: 1/16\nU: n=!style=x!\nK: clef=perc\nI:linebreak $\n%%stretchlast\nV: ALL stem=up\n';
    test3Beats.forEach((perm) => {
      const lastBeat = this.buildBeat(perm);
      if (perm.isUsed !== false) {
        const id = perm.permutations;
        const abcjsString = `${title}${perm.permutations} - ${lastBeat}${notationInfo}|:${perm.permutations} ${perm.permutations} ${perm.permutations} ${lastBeat}:||`;
        const measureObject = { id, abcjsString };
        arrayOfStrings.push(measureObject);
      }
    });
    this.setState({ abcjsStrings: arrayOfStrings });
  }

  getPermsData = () => {
    permutationData.getPermutationData()
      .then((res) => {
        this.setState({ test3Beats: res });
        this.buildAbcjsStrings();
      })
      .catch((err) => console.error(err));
  };

  render() {
    const makeTest3Measures = this.state.abcjsStrings
      .map((measure) => (
        <Test3Measure
          key={measure.id}
          id={measure.id}
          notation={measure.abcjsString}
        />
      ));
    return (
      <div className="Test3 mt-3 justify-content-center">
        <h1>Test3</h1>
        <div className="d-flex flex-row flex-wrap">
            {util.buildHeader(defaultHeader)}
            {this.buildBeat({
              beat1: 'F',
              beat2: 'F',
              beat3: 'F',
              beat4: 'z1',
            })}
            {makeTest3Measures}
          </div>
      </div>
    );
  }
}

export default Test3;
