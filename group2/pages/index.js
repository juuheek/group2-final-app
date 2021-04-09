import Head from 'next/head'
// import styles from '../styles/global.css'
import Button from '../comps/button';
import Nav from '../comps/nav';
import Back from '../comps/back';
import styled from 'styled-components';

export default function Home() {
  return (
    <div>
      <Button/>
      <Nav />
      <Back />
    </div>


  )
}
