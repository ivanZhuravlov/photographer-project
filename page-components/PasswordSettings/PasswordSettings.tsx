import React from "react";
import cn from "classnames";
import styles from "./PasswordSettings.module.scss";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { RegularButton, TextButton, TextInput } from "@/components/UI";
import { useTypedSelector } from "hooks/useTypedSelector";
import $api from "@/common/http";
import { Transition } from "react-transition-group";
import { TransitionStatus } from "react-transition-group/Transition";
import TransitionGroupProps from "common/interfaces/TransitionGroupProps";
import { Col } from "react-bootstrap";

const api = process.env.NEXT_PUBLIC_DOMAIN_API;

type Inputs = {
  currentPassword: string;
  newPassword: string;
  repeatNewPassword: string;
};

const PersonalSettings = (): JSX.Element => {
  const { user } = useTypedSelector((state) => state.user);
  const [isInputsChange, setIsInputsChange] = React.useState<boolean>(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await $api({
      method: "PATCH",
      url: `${api}/api/users/update-password`,
      data: {
        ["current-password"]: data.currentPassword,
        ["new-password"]: data.newPassword,
        ["new-password-repeat"]: data.repeatNewPassword,
        id: user.id,
      },
    })
      .then(({ data }) => {
        toast.success(data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        reset({
          currentPassword: "",
          newPassword: "",
          repeatNewPassword: "",
        });
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
  };
  const discardChanges = () => {
    reset({
      currentPassword: "",
      newPassword: "",
      repeatNewPassword: "",
    });
    setIsInputsChange(false);
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
  return (
    <Col xs={12} md={{ span: 7, offset: 0 }} xl={{ span: 5, offset: 1 }}>
      <div className={styles.password}>
        <h2 className={cn(styles.password__title, "body-1")}>
          Change password
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.password__form}
        >
          <Controller
            render={(props) => (
              <TextInput
                grey
                className={styles.password__input}
                type="password"
                value={props.field.value}
                onChange={(value) => {
                  props.field.onChange(value);
                  setIsInputsChange(true);
                }}
                errors={errors.currentPassword}
                label="Current password"
              />
            )}
            name="currentPassword"
            control={control}
            defaultValue=""
            rules={{ required: true, minLength: 6 }}
          />
          <Controller
            render={(props) => (
              <TextInput
                grey
                className={styles.password__input}
                type="password"
                value={props.field.value}
                onChange={(value) => {
                  props.field.onChange(value);
                  setIsInputsChange(true);
                }}
                errors={errors.newPassword}
                label="New password"
              />
            )}
            control={control}
            name="newPassword"
            defaultValue=""
            rules={{
              required: true,
              minLength: 6,
            }}
          />
          <Controller
            render={(props) => (
              <TextInput
                grey
                className={styles.password__input}
                type="password"
                value={props.field.value}
                onChange={(value) => {
                  props.field.onChange(value);
                  setIsInputsChange(true);
                }}
                errors={errors.repeatNewPassword}
                label="Repeat new password"
              />
            )}
            control={control}
            name="repeatNewPassword"
            defaultValue=""
            rules={{
              required: true,
              minLength: 6,
            }}
          />
          <Transition in={isInputsChange} timeout={animDuration}>
            {(status: TransitionStatus): JSX.Element => (
              <div
                style={{
                  ...opacityStyle,
                  ...transitionOpacity[status],
                }}
                className={styles.password__btns}
              >
                <RegularButton type="submit" monochrome white>
                  Save
                </RegularButton>
                <TextButton primary type="button" onClick={discardChanges}>
                  Discard changes
                </TextButton>
              </div>
            )}
          </Transition>
        </form>
      </div>
    </Col>
  );
};

export default PersonalSettings;
