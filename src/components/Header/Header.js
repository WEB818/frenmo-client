import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1 className="title-header">
        <Link to="/"> Frenmo </Link>
      </h1>
    </header>
  );
}
