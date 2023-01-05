import React from "react";
import { TextButton } from "@/components/UI";
import { ArrowDownAlt, Avatar, InputFile } from "components/UI/icons";
import { Col } from "react-bootstrap";
import styles from "./AccountSettingsSidebar.module.scss";
import TransitionGroupProps from "common/interfaces/TransitionGroupProps";
import { Transition } from "react-transition-group";
import { TransitionStatus } from "react-transition-group/Transition";
import cn from "classnames";
import $api from "@/common/http";
import { logout, updateUser } from "store/actions/user";
import { useOutsideAlerter } from "hooks/useOutsideElement";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTypedSelector } from "hooks/useTypedSelector";
import { toast } from "react-toastify";

const api = process.env.NEXT_PUBLIC_DOMAIN_API;

const AccountSettingsSidebar = (): JSX.Element => {
  const { user } = useTypedSelector((state) => state.user);
  const [isSelectOpen, setIsSelectOpen] = React.useState<boolean>(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const onLogOut = async () => {
    await dispatch(logout());
    router.push("/");
  };
  const animDuration = 300;
  const opacityStyle = {
    transition: `all ${animDuration}ms ease-in-out`,
    opacity: 0,
  };
  const transitionOpacity: TransitionGroupProps = {
    entering: { opacity: 0 },
    entered: { opacity: 1, pointerEvents: "auto" },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  const closeSelect = () => {
    setIsSelectOpen(false);
  };
  const onLoadImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    if (user.id) {
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      formData.append("id", user.id.toString());
      $api({
        method: "POST",
        url: `${api}/api/users/update-avatar`,
        data: formData,
      })
        .then(async ({ data }) => {
          await dispatch(updateUser(data.user));
          clearFile(e);
        })
        .catch((err) => {
          toast.error(err.response.data.message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        });
    }
  };
  const clearFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = "";
  };

  const removeImage = () => {
    $api({
      method: "POST",
      url: `${api}/api/users/remove-avatar`,
      data: {
        id: user.id,
      },
    })
      .then(async ({ data }) => {
        await dispatch(updateUser(data.user));
      })
      .catch((err) => console.log(err));
  };

  const select = React.useRef<HTMLDivElement>(null);
  useOutsideAlerter(select, closeSelect);
  return (
    <Col xs={12} md={5} lg={4} xl={3}>
      <div className={styles.settings__sidebar}>
        <div className={styles.settings__sidebar__wrapper}>
          <h1 className={cn(styles.settings__sidebar__title, "body-1")}>
            Account settings
          </h1>
          <div className={styles.settings__sidebar__img}>
            <div className={styles["settings__sidebar__input-wrapper"]}>
              {user.image && user.image !== "default_image.png" ? (
                <img
                  src={`${api}/storage/images/users/avatars/${user.image}`}
                  alt="Avatar"
                  className={styles["settings__sidebar__img-source"]}
                />
              ) : (
                <Avatar className={styles["settings__sidebar__img-source"]} />
              )}
              <label
                htmlFor="inputFile"
                className={styles["settings__sidebar__input-label"]}
              >
                <InputFile />
              </label>
              <input
                id="inputFile"
                type="file"
                onChange={onLoadImg}
                className={styles.settings__sidebar__input}
              />
            </div>
            <TextButton onClick={removeImage} assistance>
              Remove image
            </TextButton>
          </div>
          <div className={styles.settings__sidebar__list}>
            <Link href="/account/settings/personal">
              <a
                className={cn(
                  router.asPath.includes("/account/settings/personal") &&
                    styles.settings__sidebar__list__item_active,
                  styles.settings__sidebar__list__item,
                  "body-3"
                )}
              >
                Personal information
              </a>
            </Link>
            <Link href="/account/settings/password">
              <a
                className={cn(
                  router.asPath.includes("/account/settings/password") &&
                    styles.settings__sidebar__list__item_active,
                  styles.settings__sidebar__list__item,
                  "body-3"
                )}
              >
                Change password
              </a>
            </Link>
            <Link href="/account/settings/history">
              <a
                className={cn(
                  router.asPath.includes("/account/settings/history") &&
                    styles.settings__sidebar__list__item_active,
                  styles.settings__sidebar__list__item,
                  "body-3"
                )}
              >
                Photosessions history
              </a>
            </Link>
          </div>
          <div ref={select} className={styles.settings__sidebar__list_m}>
            <h2
              onClick={() => setIsSelectOpen((state) => (state = !state))}
              className={cn(
                styles.settings__sidebar__list_m__title,
                isSelectOpen && styles.settings__sidebar__list_m__title_active
              )}
            >
              {router.asPath.includes("/account/settings/personal") &&
                "Personal information"}
              {router.asPath.includes("/account/settings/password") &&
                "Change password"}
              {router.asPath.includes("/account/settings/history") &&
                "Photosessions history"}
              <ArrowDownAlt />
            </h2>

            <Transition in={isSelectOpen} timeout={animDuration}>
              {(status: TransitionStatus): JSX.Element => (
                <div
                  style={{
                    ...opacityStyle,
                    ...transitionOpacity[status],
                  }}
                  className={styles.settings__sidebar__list_m__items}
                >
                  {!router.asPath.includes("/account/settings/personal") && (
                    <Link href="/account/settings/personal">
                      <a
                        className={cn(
                          styles.settings__sidebar__list__item,
                          "body-3"
                        )}
                      >
                        Personal information
                      </a>
                    </Link>
                  )}
                  {!router.asPath.includes("/account/settings/password") && (
                    <Link href="/account/settings/password">
                      <a
                        className={cn(
                          styles.settings__sidebar__list__item,
                          "body-3"
                        )}
                      >
                        Change password
                      </a>
                    </Link>
                  )}
                  {!router.asPath.includes("/account/settings/history") && (
                    <Link href="/account/settings/history">
                      <a
                        className={cn(
                          styles.settings__sidebar__list__item,
                          "body-3"
                        )}
                      >
                        Photosessions history
                      </a>
                    </Link>
                  )}
                  <div
                    className={cn(
                      router.asPath.includes("/account/settings/history") &&
                        styles.settings__sidebar__list__item_active,
                      styles.settings__sidebar__list__item,
                      "body-3"
                    )}
                  >
                    Log Out
                  </div>
                </div>
              )}
            </Transition>
          </div>
        </div>
        <TextButton
          onClick={onLogOut}
          className={styles.settings__sidebar__logout}
        >
          log out
        </TextButton>
      </div>
    </Col>
  );
};

export default AccountSettingsSidebar;
