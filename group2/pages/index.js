import Head from 'next/head'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>

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
// import styles from '../styles/global.css'
import Button from '../comps/Quesbutton';
import Nav from '../comps/nav';
import Back from '../comps/back';
import styled from 'styled-components';

const HomeCont = styled.div`

`;

// import styles from '../styles/global.css'
import styled from 'styled-components';
import NavyButton from '../comps/NavyButton'
import Whitebg from '../comps/JuheeWhitebg'
import Greybg from '../comps/JuheeGreybg'
import CauseCard from '../comps/JuheeCauseCard'

const JuheeComps = styled.div`
  
    background-color:#E8ECF0;
    padding:20px;
   
  
`;
export default function Home() {
  return (
    <JuheeComps >
    

     <NavyButton text="Let's get started" bgcolor="transparent" color="#26325B" border="1px #26325B solid" />
      <NavyButton text="Agree and Continue"bgcolor="transparent" color="#26325B" border="1px #26325B solid" /> 
      <NavyButton text="See All " bgcolor="transparent" color="#26325B" border="1px #26325B solid" />
      <NavyButton text="Get Help" bgcolor="transparent" color="#26325B" border="1px #26325B solid" />
      <NavyButton text="Self Diagnose" bgcolor="transparent" color="#26325B" border="1px #26325B solid" />
      <NavyButton text="Next" />
      <NavyButton text="Get Help" />
      <NavyButton text="Get Information" />
      <Whitebg />
      <Whitebg bold ="Bulimia Nervosa" text="a psychological and severe life-threatening eating disorder described by the ingestion of an abnormally large amount of food in short time period, followed by an attempt to avoid gaining weight by purging what was consumed."/>
      <Whitebg bold ="Binge Eating Disorder (BED)" text="commonly known by compulsive overeating or consuming abnormal amounts of food while feeling unable to stop and a loss of control. Binge eating episodes are typically classified as occurring on average a minimum of twice per week for a duration of six months." height="300"/>
      <Whitebg bold ="Orthorexia" text="a common co-occurring eating disorder. It is characterized by a fixation or desire to eat only “healthy” foods, or to avoid entire food groups. Every person suffering with orthorexia has their own food preferences; foods they will eat and foods that they won’t. Orthorexics feel isolated from or superior to people who may consume a food they they themselves reject." height="371"/>
      <Whitebg bold ="Excessive Exercise" text="Exercise and nutrition are foundational to good health, but extreme behaviors can be a red flag indicating unhealthy behaviors. Examples of this include excessive exercise, weight obsessions, bulimia, anorexia and binge eating disorders."/>
   
      <Greybg/>
      <CauseCard/>
    

        
    </JuheeComps>




export default function Home() {
  return (
    <div>
      <Button></Button>
      <Nav></Nav>
      <Back> </Back>

    </div>


  )
}
