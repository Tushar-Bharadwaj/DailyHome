import getAxios from "../../util/axios-helper";
import { useDispatch } from "react-redux";
import { fetchBlockedAndFollowing } from "../../redux/users/userActions";

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

export const follow = async (user, param, id, setUpdate) => {
  const Axios = getAxios(user.userToken);
  try {
    await Axios.post(`/user_profile/following/`, {
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

export const unFollow = async (user, param, id, setUpdate) => {
  const Axios = getAxios(user.userToken);
  try {
    await Axios.delete(`/user_profile/following`, {
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

export const getFollowing = async (user) => {
  let data = [];
  return new Promise((resolve, reject) => {
    const Axios = getAxios(user.userToken);
    Axios.get(`/home_profile/following/${user.details.id}`)
      .then((response) => {
        data = response.data;
        return resolve(data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

export const userIsFollowingMetaData = (originalList, followingList) => {
  const mapSet = [];
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
