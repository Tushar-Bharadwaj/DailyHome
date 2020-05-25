import getAxios from "../../util/axios-helper";

export const addToNavigation = async (user, param, id, setUpdate) => {
  const Axios = getAxios(user.userToken);
  try {
    await Axios.post(`/user_profile/navigation/${param}/${id}`)
      .then((response) => {
        setUpdate((update) => update + 1);
      })
      .catch((error) => {
        console.log("Error has occured");
      });
  } catch (e) {
    console.log(e);
  }
};

export const removeFromNavigation = async (user, param, id, setUpdate) => {
  const Axios = getAxios(user.userToken);
  try {
    await Axios.delete(`/user_profile/navigation/${param}/${id}`)
      .then((response) => {
        setUpdate((update) => update + 1);
      })
      .catch((error) => {
        console.log("Error has occured");
      });
  } catch (e) {
    console.log(e);
  }
};

export const createUserNavigation = (originalList, followingList) => {
  const mapSet = [];
  if (followingList)
    followingList.forEach((item) => {
      mapSet[item.injestionId] = true;
    });
  return originalList.map((item) => {
    const isDefiend = mapSet[item.injestionId] !== undefined;
    return {
      id: item.id,
      injestionId: item.injestionId,
      name: item.name,
      isDefined: isDefiend,
    };
  });
};

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
