import axios from 'axios';

const getPermutationData = () => new Promise((resolve, reject) => {
  axios.get('https://api.sheety.co/faade918-a0e9-42c2-87eb-e2231b39c28c')
    .then((res) => {
      const allPerms = res.data;
      // console.error(allPerms);
      resolve(allPerms);
    })
    .catch((err) => reject(err));
});

export default { getPermutationData };
