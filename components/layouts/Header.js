import React from "react";
import styled from "@emotion/styled";
import Search from "../ui/Search";
import Nav from "./Nav";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <p>P</p>
          <Search />
          <Nav />
        </div>
          <p>Hello Adrian</p>
          <button type="button">Log Out</button>
          <Link href="/"> Login </Link>
          <Link href="/">Sign Up</Link>
      </div>
    </header>
  );
};

export default Header;
