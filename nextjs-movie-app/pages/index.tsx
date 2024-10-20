import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>안녕하세요. NextJs로 만든 간단 영화 앱입니다.</h1>
      <Link href="/movies" className={styles.link}>
        영화 목록 보기
      </Link>
    </div>
  );
}
