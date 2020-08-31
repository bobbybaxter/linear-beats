export default function formatBeat(beatObj) {
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

  if (beat3 === 'z1' && beat2 === 'z1' && beat1 === 'z1') {
    beat1 = 'z3';
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
    beat1 = 'z2';
    beat2 = '';
  }

  beatString = `${beat1}${beat2}${beat3}${beat4}`;
  return beatString;
}
