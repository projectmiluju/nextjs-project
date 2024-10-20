import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/MovieDetail.module.css";

const movies = {
  "1": { title: "아이언맨", description: "깡통로봇인간" },
  "2": { title: "캡틴아메리나", description: "얼음 속에서 깨어난 군인" },
  "3": { title: "토르", description: "신인척하는 외계인" },
};

export default function MovieDetail() {
  const router = useRouter();
  const { id } = router.query;

  const movie = movies[id as string];

  if (!movie) return <p>영화를 찾을 수 없습니다.</p>;

  return (
    <div className={styles.container}>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <Link href="/movies" className={styles.back}>
        ← 돌아가기
      </Link>
    </div>
  );
}
