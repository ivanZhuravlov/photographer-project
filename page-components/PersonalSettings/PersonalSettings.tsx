import React from "react";
import cn from "classnames";
import styles from "./PersonalSettings.module.scss";
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
import { updateUser } from "store/actions/user";
import { useDispatch } from "react-redux";

const api = process.env.NEXT_PUBLIC_DOMAIN_API;

type Inputs = {
  name: string;
  email: string;
};

const PersonalSettings = (): JSX.Element => {
  const { user } = useTypedSelector((state) => state.user);
  const [isInputsChange, setIsInputsChange] = React.useState<boolean>(false);
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    defaultValues: {
      email: "",
      name: "",
    },
  });

  React.useEffect(() => {
    if (user.email && user.username) {
      reset({
        email: user.email,
        name: user.username,
      });
    }
  }, [reset, user.email, user.username]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await $api({
      method: "PATCH",
      url: `${api}/api/users/update-data`,
      data: {
        email: data.email,
        username: data.name,
        id: user.id,
      },
    })
      .then(async ({ data }) => {
        await dispatch(updateUser(data.user));
      })
      .catch(() => {
        toast.error("Something went wrong", {
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
      email: user.email,
      name: user.username,
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
      <div className={styles.personal}>
        <h2 className={cn(styles.personal__title, "body-1")}>
          Personal information
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.contact__form}
        >
          <Controller
            render={(props) => (
              <TextInput
                grey
                className={styles.personal__input}
                value={props.field.value}
                onChange={(value) => {
                  props.field.onChange(value);
                  setIsInputsChange(true);
                }}
                errors={errors.name}
                label="Enter your name"
              />
            )}
            name="name"
            control={control}
            rules={{ required: true }}
          />
          <Controller
            render={(props) => (
              <TextInput
                grey
                className={styles.personal__input}
                value={props.field.value}
                onChange={(value) => {
                  props.field.onChange(value);
                  setIsInputsChange(true);
                }}
                errors={errors.email}
                label="Enter your email"
              />
            )}
            control={control}
            name="email"
            rules={{
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, // eslint-disable-line
            }}
          />
          <Transition in={isInputsChange} timeout={animDuration}>
            {(status: TransitionStatus): JSX.Element => (
              <div
                style={{
                  ...opacityStyle,
                  ...transitionOpacity[status],
                }}
                className={styles.personal__btns}
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
