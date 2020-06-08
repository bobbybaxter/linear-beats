import React from 'react';
import ABCJS from 'abcjs';

class Test2Measure extends React.Component {
  componentDidMount() {
    const { id } = this.props;
    const { notation } = this.props;
    ABCJS.renderAbc(id, notation, { responsive: 'resize' });
  }

  render() {
    const { id } = this.props;

    return (
      <div className="Test2Measure col-12">
        <div>
          <div id={id}><p></p></div>
        </div>
      </div>
    );
  }
}

export default Test2Measure;
