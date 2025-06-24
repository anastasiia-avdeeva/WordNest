import React from "react";
import { Outlet } from "react-router-dom";
import { SiteHeader } from "../SiteHeader/SiteHeader";
import { SiteFooter } from "../SiteFooter/SiteFooter";
import styles from "./MainLayout.module.scss";

export const MainLayout = () => {
  return (
    <>
      <SiteHeader />
      <main className={styles.main}>
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
};
