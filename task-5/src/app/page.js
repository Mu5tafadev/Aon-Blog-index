import { Container } from "@/app/components/container/container";
import { Header } from "@/app/components/container/header/header";
import styles from './page.module.css'

export default function Home() {
  return (

    <main className={styles.home}>
      <Header />
      <div className={styles.cover}>
        <div className={styles.overlay}>
          <Container>
            <div className={styles.title}>
              <h1>Simple Blog.</h1>
              <p>A blog created by Aon 2023</p>
            </div>
          </Container>
        </div>
      </div>
      <Container></Container>
    </main>

  );
}
