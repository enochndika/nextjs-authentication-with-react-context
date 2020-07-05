import React, { useEffect } from "react";
import useAuth from "./context";
import { useRouter } from "next/router";
import { canAccessDashboard } from "../utils/canAccessDashboard";

export function AdminRoute(Component) {
  return () => {
    const { user, isAuthenticated, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (isAuthenticated && !loading && canAccessDashboard(user))
        router.push("/");
    }, [loading, isAuthenticated]);

    return <Component {...arguments} />;
  };
}
