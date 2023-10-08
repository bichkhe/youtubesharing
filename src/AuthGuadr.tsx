import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AUTH_TOKEN, isResponseError } from "./api/global/api";
export function AuthGuard(props: { children: React.ReactNode }) {
  const location = useLocation();
  const navigation = useNavigate();
  const isLoggedIn = localStorage.getItem(AUTH_TOKEN) != null;
  useEffect(() => {
    const NO_AUTH_PAGES = ["/auth"];
    const AUTHS_PAGES = ["/youtubesharing"];
    if (isLoggedIn) {
      if (NO_AUTH_PAGES.includes(location.pathname)) {
        navigation("/");
      }
    } else {
      if (AUTHS_PAGES.includes(location.pathname)) {
        navigation("/auth", { state: { mode: "login" } });
      }
    }
  });

  return <>{props.children}</>;
}
