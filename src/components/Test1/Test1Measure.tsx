import ABCJS from 'abcjs';
import React, { useEffect } from 'react';

export function FourFourMeasure({ id, notation }: { id: any; notation: any }) {
  useEffect(() => {
    ABCJS.renderAbc(id, notation, { responsive: 'resize' });
  }, []);

  return (
    <div className="FourFourMeasure col-12">
      <div>
        <div id={id}>
          <p></p>
        </div>
      </div>
    </div>
  );
}
