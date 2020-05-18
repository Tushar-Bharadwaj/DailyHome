import React, { useState, useEffect } from "react";
import { fetchBlockedAndFollowing } from "../../redux/users/userActions";
import FollowingList from "../Following/FollowingList";
import {
  fetchNewsComponents,
  follow,
  getFollowing,
  unFollow,
  userIsFollowingMetaData,
} from "../Following/FollowingServices";
import { useSelector, useDispatch } from "react-redux";
import ImageUpload from "../../components/ImageUpload";

const EditProfile = () => {
  const [update, setUpdate] = useState(0);
  const dispatch = useDispatch();
  const [language, setLanguage] = useState([]);
  const user = useSelector((state) => state.users);

  const handleSubmit = (data) => {
    //TODO: Add API Calls to Upload
    console.log(data);
  };

  useEffect(() => {
    (async () => {
      if (user.details.id !== "") {
        let languages = await fetchNewsComponents("languages");
        getFollowing(user).then((following) => {
          setLanguage(
            userIsFollowingMetaData(
              languages,
              following.languages.all_the_languages
            )
          );
          dispatch(fetchBlockedAndFollowing(user.details.id, user.userToken));
        });
      }
    })();
  }, [update, setUpdate, user.details.id]);
  return (
    <>
      <FollowingList
        title="LANGUAGE"
        data={language}
        follow={follow}
        unFollow={unFollow}
        updateHandler={setUpdate}
        user={user}
        param="languageIds"
      />
    </>
  );
};

export default EditProfile;
