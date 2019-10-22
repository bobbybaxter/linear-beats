import React from 'react';
import permutationData from '../../helpers/data/permutationData';

import FourFourMeasure from '../FourFourMeasure/FourFourMeasure';

import './FourFour.scss';

class FourFour extends React.Component {
  state = {
    fourFourBeats: [],
    abcjsStrings: [],
  }

  componentDidMount() {
    this.getPermsData();
  }

  buildAbcjsStrings = () => {
    const { fourFourBeats } = this.state;
    const arrayOfStrings = [];
    const title = 'X: 1\nT: ';
    const notationInfo = '\nC:\nL: 1/16\nU: n=!style=x!\nK: clef=perc\nI:linebreak $\n%%stretchlast\nV: ALL stem=up\n';
    fourFourBeats.forEach((perm) => {
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
        this.setState({ fourFourBeats: res });
        this.buildAbcjsStrings();
      })
      .catch((err) => console.error(err));
  };

  render() {
    const makeFourFourMeasures = this.state.abcjsStrings
      .map((measure) => (
        <FourFourMeasure
          key={measure.id}
          id={measure.id}
          notation={measure.abcjsString}
        />
      ));
    return (
      <div className="FourFour mt-3 justify-content-center">
        <h1>FourFour</h1>
          <div className="d-flex flex-row flex-wrap">
            {makeFourFourMeasures}
          </div>
      </div>
    );
  }
}

export default FourFour;
