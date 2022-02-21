import React from 'react';
import { Global, css } from '@emotion/react';
import Head from 'next/head';
import Header from './Header';
const Layout = (props) => {
  return ( 
    <>
    <Global
      styles={css`
        :root{
          --gray: #3d3d3d;
          --gray-light: #6f6f6f;
          --orange: #da552f;
        }
        html{
          font-size: 62.5%;
          box-sizing:border-box;
        }
        *,*:before,*:after{
          box-sizing:inherit;
        }
        body{
          font-family:'PT Sans', serif;
          font-size:1.6rem; 
          line-height:1.5;
          }
          h1,h2,h3{
            margin: 0 0 2rem 0;
            line-height:1.5;

          }
          h1,h2{
            font-family:'Roboto Slab', serif;
            font-weight:700;
          }
          h3{
            font-family:'PT Sans', serif;
            font-weight:700;
          }
        ul{
          text-decoration:none;
          margin:0;
          padding:0;
        }
        a{
          text-decoration:none;
        }
      `}
    />
    <Head>
      <title>Product Hunt - Clone site with Nextjs</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
     
 
    </Head>
      <Header />
      <main>
          {props.children}
      </main>
    </>
   );
}
 
export default Layout;