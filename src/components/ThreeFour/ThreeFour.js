import React from 'react';
import permutationData from '../../helpers/data/permutationData';

import ThreeFourMeasure from '../ThreeFourMeasure/ThreeFourMeasure';

import './ThreeFour.scss';

class ThreeFour extends React.Component {
  state = {
    ThreeFourBeats: [],
    abcjsStrings: [],
  }

  componentDidMount() {
    this.getPermsData();
  }

  buildAbcjsStrings = () => {
    const { ThreeFourBeats } = this.state;
    const arrayOfStrings = [];
    const title = 'X: 1\nT: ';
    const notationInfo = '\nC:\nL: 1/16\nU: n=!style=x!\nK: clef=perc\nI:linebreak $\n%%stretchlast\nV: ALL stem=up\n';
    ThreeFourBeats.forEach((perm) => {
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
    permutationData.getPermutationData()
      .then((res) => {
        this.setState({ ThreeFourBeats: res });
        this.buildAbcjsStrings();
      })
      .catch((err) => console.error(err));
  };

  render() {
    const makeThreeFourMeasures = this.state.abcjsStrings
      .map((measure) => (
        <ThreeFourMeasure
          key={measure.id}
          id={measure.id}
          notation={measure.abcjsString}
        />
      ));
    return (
      <div className="ThreeFour mt-3 justify-content-center">
        <h1>ThreeFour</h1>
          <div className="d-flex flex-row flex-wrap">
            {makeThreeFourMeasures}
          </div>
      </div>
    );
  }
}

export default ThreeFour;
