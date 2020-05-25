import getAxios from "../../util/axios-helper";

export const fetchNewsComponents = async (name) => {
  const Axios = getAxios();
  let data = [];
  try {
    await Axios.get(`/injestion/user_profile/newsComponents/${name}`)
      .then((response) => {
        data = response.data[`all_the_${name}`];
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (e) {
    console.log(e);
  }
  return data;
};
