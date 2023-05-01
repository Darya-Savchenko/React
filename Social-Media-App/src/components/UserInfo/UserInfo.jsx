import React, { useEffect } from "react";
import styles from "./UserInfo.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faNetworkWired, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../store/user";
import { Loader } from "../Loader";

export const UserInfo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(fetchUser(id));
  }, [id]);

  if (!user) return <Loader />;

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <FontAwesomeIcon icon={faUser} className={styles.icon} />
        <div className={styles.infoContainer}>
          <div className={styles.info}>{user.name}</div>
          <div className={styles.category}>Name</div>
        </div>
      </div>
      <div className={styles.item}>
        <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
        <div className={styles.infoContainer}>
          <div className={styles.info}>{user.email}</div>
          <div className={styles.category}>Email</div>
        </div>
      </div>
      <div className={styles.item}>
        <FontAwesomeIcon icon={faPhone} className={styles.icon} />
        <div className={styles.infoContainer}>
          <div className={styles.info}>{user.phone}</div>
          <div className={styles.category}>Mobile</div>
        </div>
      </div>
      <div className={styles.item}>
        <FontAwesomeIcon icon={faNetworkWired} className={styles.icon} />
        <div className={styles.infoContainer}>
          <div className={styles.info}>{user.website}</div>
          <div className={styles.category}>Website</div>
        </div>
      </div>
    </div>
  );
};
