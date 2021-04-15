import Head from 'next/head'
import WhiteBG from '../comps/WhiteBG';
import CircleImg from '../comps/circleimg';
import ImgCarousel from '../comps/imgcarousel';
import NavPage from '../comps/navigationpage';
import styled from 'styled-components';

export default function Home() {
  return <div>
    <WhiteBG></WhiteBG>
    <CircleImg></CircleImg>
    <ImgCarousel></ImgCarousel>
    <NavPage></NavPage>
  </div>
}
