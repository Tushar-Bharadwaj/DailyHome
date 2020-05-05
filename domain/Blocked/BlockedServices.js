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

export const block = async (user, param, id, setUpdate) => {
  console.log("Inside Block");
  const Axios = getAxios(user.userToken);
  try {
    await Axios.post(`/user_profile/blocked/`, {
      userId: user.details.id,
      [param]: [id],
    })
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

export const unBlock = async (user, param, id, setUpdate) => {
  console.log("Inside unBlock");
  const Axios = getAxios(user.userToken);
  try {
    await Axios.delete(`/user_profile/blocked`, {
      data: {
        userId: user.details.id,
        [param]: [id],
      },
    })
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

export const getBlocked = async (user) => {
  const Axios = getAxios(user.userToken);
  let data = [];
  try {
    await Axios.get(`/home_profile/blocked/${user.details.id}`)
      .then((response) => {
        data = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (e) {
    console.log(e);
  }
  return data;
};

export const userIsBlockedMetaData = (originalList, blockedList) => {
  const mapSet = [];
  blockedList.forEach((item) => {
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
