import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const Nav = () => {
  return (  
    <nav>
      <Link href="/"> Home </Link>
      <Link href="/"> Top Voted </Link>
      <Link href="/"> New Product </Link>
    </nav>
  );
}
 
export default Nav;