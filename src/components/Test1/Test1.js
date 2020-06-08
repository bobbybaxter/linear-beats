import React from 'react';
import permutationData from '../../helpers/data/permutationData';

import Test1Measure from '../Test1Measure/Test1Measure';

import './Test1.scss';

class Test1 extends React.Component {
  state = {
    test1Beats: [],
    abcjsStrings: [],
  }

  componentDidMount() {
    this.getPermsData();
  }

  buildAbcjsStrings = () => {
    const { test1Beats } = this.state;
    const arrayOfStrings = [];
    const title = 'X: 1\nT: ';
    const notationInfo = '\nC:\nL: 1/16\nU: n=!style=x!\nK: clef=perc\nI:linebreak $\n%%stretchlast\nV: ALL stem=up\n';
    test1Beats.forEach((perm) => {
      if (perm.isUsed !== false) {
        const id = perm.permutations;
        const abcjsString = `${title}${perm.permutations}${notationInfo}|:${perm.permutations} ${perm.permutations} ${perm.permutations} ${perm.permutations}:||`;
        const measureObject = { id, abcjsString };
        arrayOfStrings.push(measureObject);
      }
    });
    this.setState({ abcjsStrings: arrayOfStrings });
  }

  getPermsData = () => {
    permutationData.getPermutationData()
      .then((res) => {
        this.setState({ test1Beats: res });
        this.buildAbcjsStrings();
      })
      .catch((err) => console.error(err));
  };

  render() {
    const makeTest1Measures = this.state.abcjsStrings
      .map((measure) => (
        <Test1Measure
          key={measure.id}
          id={measure.id}
          notation={measure.abcjsString}
        />
      ));
    return (
      <div className="Test1 mt-3 justify-content-center">
        <h1>Test1</h1>
          <div className="d-flex flex-row flex-wrap">
            {makeTest1Measures}
          </div>
      </div>
    );
  }
}

export default Test1;
