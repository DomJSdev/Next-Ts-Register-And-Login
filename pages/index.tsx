import type {NextPage} from 'next';
import {useEffect} from 'react';
import * as axios from 'axios';
import Headers from '../components/Headers';

const Home: NextPage = () => {
  return (
    <>
    <Headers></Headers>
    <div>
      <h1>Startseite</h1>
    </div>
    </>
  );
};

export default Home;
