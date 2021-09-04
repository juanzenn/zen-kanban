import Head from 'next/head';
import styled from 'styled-components';

const Main = styled.main``;

export default function Home() {
  return (
    <Main>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Hello world</h1>
    </Main>
  );
}
