import React from "react";
import cn from "classnames";
import styles from "./HistorySettings.module.scss";
import { HistoryTable } from "@/components/UI";
import { Col } from "react-bootstrap";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.min.css";
// import { RegularButton, TextButton, TextInput } from "@/components/UI";
// import { useTypedSelector } from "hooks/useTypedSelector";
import { FieldItem } from "@/components/UI/tables/HistoryTable/HistoryTable.props";
import $api from "@/common/http";
import { dayMonthYear } from "common/filters/date.filter";
// import { Transition } from "react-transition-group";
// import { TransitionStatus } from "react-transition-group/Transition";
// import TransitionGroupProps from "common/interfaces/TransitionGroupProps";
// import { useRouter } from "next/router";

const api = process.env.NEXT_PUBLIC_DOMAIN_API;

const columns = [
  {
    field: "status",
    statusField: true,
  },
  {
    field: "name",
  },
  {
    field: "ordering_date",
  },
  {
    field: "package_id",
    package: true,
  },
];
const HistorySettings = (): JSX.Element => {
  //   const { user } = useTypedSelector((state) => state.user);
  //   const router = useRouter();
  //   const animDuration = 300;
  //   const opacityStyle = {
  //     transition: `all ${animDuration}ms ease-in-out`,
  //     opacity: 0,
  //   };
  //   const transitionOpacity: TransitionGroupProps = {
  //     entering: { opacity: 0 },
  //     entered: { opacity: 1, pointerEvents: "auto" },
  //     exiting: { opacity: 0 },
  //     exited: { opacity: 0 },
  //   };
  const [fields, setFields] = React.useState<FieldItem[]>([]);

  React.useEffect(() => {
    $api
      .request({
        url: `${api}/api/sessions`,
        method: "GET",
      })
      .then(({ data }) => {
        const filteredFields = data.map((field: FieldItem) => {
          return {
            ...field,
            ordering_date: dayMonthYear(field.ordering_date),
            package_id: `${field.package.name} package`,
          };
        });

        setFields(filteredFields);
      });
  }, []);
  return (
    <Col xs={12} md={{ span: 7, offset: 0 }} xl={{ span: 7, offset: 1 }}>
      <div className={styles.history}>
        <h2 className={cn(styles.history__title, "body-1")}>
          Photosessions history
        </h2>
        <HistoryTable columns={columns} fields={fields} />
      </div>
    </Col>
  );
};

export default HistorySettings;
