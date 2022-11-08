import React from 'react';
import * as sty from '../styles/global';
import { Bio } from '../components/bio';
import { Blocks } from '../components/blocks';
import { Footer } from '../components/footer';

export function Head() {
  return (
    <>
      <meta charSet="utf-8" />
      <html lang="en" />
      <title>Home - Magicgh</title>
      <meta name="description" content="Description" />
    </>
  )
}

export default function Home() {

    return (
        <sty.background>
          <sty.wrapper>
            <Bio/>
            <Blocks />
            <Footer />
          </sty.wrapper>
        </sty.background>
    );
}
