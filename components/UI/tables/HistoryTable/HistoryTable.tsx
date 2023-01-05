import React from "react";
import { ColumnItem, FieldItem, HistoryTableProps } from "./HistoryTable.props";
import styles from "./HistoryTable.module.scss";
import cn from "classnames";
// import { OpenDetails } from "components/UI/icons";

const HistoryTable = ({ fields, columns }: HistoryTableProps): JSX.Element => {
  const trRow = (col: ColumnItem, el: FieldItem) => {
    if (col.statusField) {
      return (
        <span
          className={cn(
            styles.table__status,
            el.status === "new"
              ? styles.table__status_active
              : styles.table__status_expired
          )}
        >
          {el.status === "new" ? "Active" : "Expired"}
        </span>
      );
    } else if (col.package) {
      return <span className={styles.table__package}>{el.package_id}</span>;
    } else {
      return <span>{el[col.field]}</span>;
    }
  };

  // const openDetails = () => {
  //   console.log("test");
  // };

  return (
    <>
      {fields.length ? (
        <>
          <table className={styles.table}>
            <tbody>
              {fields.map((el, elIndex) => (
                <tr
                  className={cn(
                    styles.table__tr,
                    el.status !== "new" && styles.table__tr_expired
                  )}
                  key={elIndex}
                >
                  {columns.map((col, index) => (
                    <td className={cn(styles.table__td, "body-3")} key={index}>
                      {trRow(col, el)}
                    </td>
                  ))}
                  {/* {el.status === "new" && (
                  <td>
                    <OpenDetails onClick={openDetails} />
                  </td>
                )} */}
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.table__blocks}>
            {fields.map((el, index) => (
              <div key={index} className={styles.table__blocks__item}>
                <div className={styles.table__blocks__item__header}>
                  <div
                    className={cn(
                      styles.table__blocks__item__status,
                      el.status === "new"
                        ? styles.table__blocks__item__status_active
                        : styles.table__blocks__item__status_expired
                    )}
                  >
                    {el.status === "new" ? "Active" : "Expired"}
                  </div>
                  {/* <div></div> */}
                </div>
                <div className={styles.table__blocks__item__info}>
                  <h3
                    className={cn(styles.table__blocks__item__title, "body-3")}
                  >
                    {el.title}
                  </h3>
                  <span
                    className={cn(styles.table__blocks__item__date, "body-3")}
                  >
                    {el.ordering_date}
                  </span>
                  <span
                    className={cn(
                      styles.table__blocks__item__package,
                      "body-3"
                    )}
                  >
                    {el.package_id}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <span className="body-3">No data</span>
      )}
    </>
  );
};

export default HistoryTable;
