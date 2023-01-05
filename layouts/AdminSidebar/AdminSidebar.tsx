import Link from "next/link";
import React from "react";
import styles from "./AdminSidebar.module.scss";
import { Bookings, Clients, Content, MiniShootings } from "components/UI/icons";

const AdminSidebar = (): JSX.Element => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__item}>
        <Bookings />
        <Link href="/admin/bookings">
          <a>Bookings</a>
        </Link>
      </div>
      <div className={styles.sidebar__item}>
        <Clients />
        <Link href="/admin/clients">
          <a>Clients</a>
        </Link>
      </div>
      <div className={styles.sidebar__item}>
        <Content />
        <Link href="/admin/content">
          <a>Content</a>
        </Link>
      </div>
      <div className={styles.sidebar__item}>
        <MiniShootings />
        <Link href="/admin/mini-shootings">
          <a>Mini shootings</a>
        </Link>
      </div>
    </aside>
  );
};

export default AdminSidebar;
