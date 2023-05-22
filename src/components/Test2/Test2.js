import React from 'react';
import { getPermutationData } from 'src/db/permutationData';

import Test2Measure from './Test2Measure';

class Test2 extends React.Component {
  state = {
    test2Beats: [],
    abcjsStrings: [],
  }

  componentDidMount() {
    this.getPermsData();
  }

  buildAbcjsStrings = () => {
    const { test2Beats } = this.state;
    const arrayOfStrings = [];
    const title = 'X: 1\nT: ';
    const notationInfo = '\nC:\nL: 1/16\nU: n=!style=x!\nK: clef=perc\nI:linebreak $\n%%stretchlast\nV: ALL stem=up\n';
    test2Beats.forEach((perm) => {
      if (perm.isUsed !== false) {
        const id = perm.permutations;
        const abcjsString = `${title}${perm.difficulty} - ${perm.permutations}${notationInfo}|:${perm.permutations} ${perm.permutations} ${perm.permutations} ${perm.permutations}:||`;
        const measureObject = { id, abcjsString };
        arrayOfStrings.push(measureObject);
      }
    });
    this.setState({ abcjsStrings: arrayOfStrings });
  }

  getPermsData = () => {
    getPermutationData()
      .then((res) => {
        this.setState({ Test2Beats: res });
        this.buildAbcjsStrings();
      })
      .catch((err) => console.error(err));
  };

  render() {
    const makeTest2Measures = this.state.abcjsStrings
      .map((measure) => (
        <Test2Measure
          key={measure.id}
          id={measure.id}
          notation={measure.abcjsString}
        />
      ));
    return (
      <div className="Test2 mt-3 justify-content-center">
        <h1>Test2</h1>
          <div className="d-flex flex-row flex-wrap">
            {makeTest2Measures}
          </div>
      </div>
    );
  }
}

export default Test2;