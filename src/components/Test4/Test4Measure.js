import ABCJS from 'abcjs';
import React from 'react';

class Test4Measure extends React.Component {
  componentDidMount() {
    const { id } = this.props;
    const { notation } = this.props;
    ABCJS.renderAbc(id, notation, { responsive: 'resize' });
  }

  render() {
    const { id } = this.props;

    return (
      <div className="Test3Measure col-12">
        <div>
          <div id={id}><p></p></div>
        </div>
      </div>
    );
  }
}

export default Test4Measure;