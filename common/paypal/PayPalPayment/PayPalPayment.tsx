import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import axios from "axios";
import { UserProps } from "common/interfaces/UserProps";
import { SessionItem } from "common/interfaces/SessionsProps";
import { LocationItem } from "common/interfaces/LocationsProps";
import { useTypedSelector } from "hooks/useTypedSelector";

const api = process.env.NEXT_PUBLIC_DOMAIN_API;

declare global {
  interface Window {
    paypal: any;
  }
}

export interface PaypalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  chosenSession?: SessionItem | null;
  chosenMiniphotoshoot?: LocationItem;
  clientEmail: string;
}

const PayPalPayment = ({
  chosenSession,
  clientEmail,
  chosenMiniphotoshoot,
}: PaypalProps): JSX.Element | null => {
  const router = useRouter();
  const paypal = React.useRef<HTMLDivElement>(null);
  const { user: UserState } = useTypedSelector((state) => state.user);

  React.useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                amount: {
                  currency_code: "USD",
                  value: chosenSession?.price || chosenMiniphotoshoot?.price,
                },
              },
            ],
            application_context: {
              shipping_preference: "NO_SHIPPING",
            },
          });
        },
        onApprove: async (data: any, actions: any) => {
          const order = await actions.order.capture();
          const package_id = chosenSession?.id;
          let user: UserProps = {};

          if (!UserState.id) {
            await axios
              .request({
                url: `${api}/api/users/register`,
                method: "POST",
                data: {
                  email: clientEmail,
                },
              })
              .then(({ data }) => {
                user = data.user;
              });
          }
          if (chosenSession) {
            await axios.request({
              url: `${api}/api/sessions`,
              method: "POST",
              data: {
                package_id,
                user_id: UserState.id ? UserState.id : user.id,
              },
            });
          } else if (chosenMiniphotoshoot) {
            await axios.request({
              url: `${api}/api/mini-sessions`,
              method: "POST",
              data: {
                time: "19:40",
                location_id: chosenMiniphotoshoot.id,
                user_id: UserState ? UserState.id : user.id,
              },
            });
          }
          if (!UserState.id) {
            router.push("success-payment-message");
          } else {
            router.push("account/settings/personal");
            // router.push("account/albums");
          }
        },
        onError: (err: any) => {
          toast.error("Something went wrong", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        },
      })
      .render(paypal.current);
  }, []);
  return (
    <>
      <div ref={paypal}></div>
    </>
  );
};

export default PayPalPayment;
