import React from 'react';
import ABCJS from 'abcjs';

class ThreeFourMeasure extends React.Component {
  componentDidMount() {
    const { id } = this.props;
    const { notation } = this.props;
    ABCJS.renderAbc(id, notation, { responsive: 'resize' });
  }

  render() {
    const { id } = this.props;

    return (
      <div className="ThreeFourMeasure col-12">
        <div>
          <div id={id}><p></p></div>
        </div>
      </div>
    );
  }
}

export default ThreeFourMeasure;
