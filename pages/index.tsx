import Head from 'next/head';
import { GetServerSideProps } from 'next';
import requests from '../utils/Request';
import Headers from '../components/Header';
import Nav from '../components/Nav';
import Results from '../components/Results';

type homePageType = {
  results: [];
};

export default function Home({ results }: homePageType) {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Headers />
      <Nav />
      <Results results={results} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const req: any = requests;
  const genre = `${context.query.genre}` as const;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      req[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
};
