import React from "react";
import Link from "next/link";
import useAuth from "../auth/context";

export default function Home() {
  const { isAuthenticated, logout } = useAuth();
  return (
    <div className="container">
      {(isAuthenticated && (
        <ul>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard">
              <a>Dashboard</a>
            </Link>
          </li>
          <li>
            <button onClick={() => logout()}>Deconnexion</button>
          </li>
          <li>Vous etes connecté</li>
        </ul>
      )) || (
        <ul>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
