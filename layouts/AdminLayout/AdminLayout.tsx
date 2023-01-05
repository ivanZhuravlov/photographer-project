import React from "react";
import { AccountLayoutProps } from "./AdminLayout.props";
import Header from "../AdminHeader/AdminHeader";
import Sidebar from "../AdminSidebar/AdminSidebar";
import { FunctionComponent } from "react";

const AdminLayout = ({ children }: AccountLayoutProps): JSX.Element => {
  return (
    <div>
      <Header />
      <div className="admin-content">
        <Sidebar />
        <div className="admin-content__children">{children}</div>
      </div>
    </div>
  );
};

export const withAdminLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AdminLayout>
        <Component {...props} />
      </AdminLayout>
    );
  };
};
