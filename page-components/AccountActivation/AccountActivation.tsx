import { RegularButton, TextInput } from "@/components/UI";
import React from "react";
import { Container } from "react-bootstrap";
import styles from "./AccountActivation.module.scss";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import cn from "classnames";
import axios from "axios";
import { useRouter } from "next/router";
import { login } from "store/actions/user";
import { useDispatch } from "react-redux";

const api = process.env.NEXT_PUBLIC_DOMAIN_API;

type Inputs = {
  name: string;
  phone: string;
  password: string;
};

const AccountActivation = (): JSX.Element => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<Inputs> = async (inputs) => {
    let email = "";
    await axios
      .request({
        url: `${api}/api/users/activate`,
        method: "PATCH",
        data: {
          username: inputs.name,
          phone: inputs.phone,
          password: inputs.password,
          code: router.query.code,
        },
      })
      .then(({ data }) => {
        email = data.user.email;

        dispatch(login(email, inputs.password));
      });

    router.push("/account/albums");
  };
  return (
    <section className={styles.activation}>
      <Container>
        <h1 className={cn(styles.activation__title, "body-1")}>
          Activation account
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.activation__form}
        >
          <Controller
            render={(props) => (
              <TextInput
                grey
                className={styles.activation__form__input}
                value={props.field.value}
                onChange={props.field.onChange}
                errors={errors.name}
                label="Enter your name"
              />
            )}
            name="name"
            control={control}
            rules={{ required: true }}
            defaultValue=""
          />
          <Controller
            render={(props) => (
              <TextInput
                grey
                className={styles.activation__form__input}
                value={props.field.value}
                onChange={props.field.onChange}
                errors={errors.phone}
                type="number"
                label="Enter your number"
              />
            )}
            name="phone"
            control={control}
            rules={{ required: true }}
            defaultValue=""
          />
          <Controller
            render={(props) => (
              <TextInput
                grey
                className={styles.activation__form__input}
                value={props.field.value}
                onChange={props.field.onChange}
                errors={errors.password}
                type="password"
                label="Enter your password"
              />
            )}
            name="password"
            control={control}
            rules={{ required: true, minLength: 6 }}
            defaultValue=""
          />
          <RegularButton
            className={styles.activation__form__btn}
            type="submit"
            white
            monochrome
          >
            Activate
          </RegularButton>
        </form>
      </Container>
    </section>
  );
};

export default AccountActivation;
