import Link from "next/link";
import styles from "../../styles/Movies.module.css";

const movies = [
  { id: "1", title: "아이언맨" },
  { id: "2", title: "캡틴아메리카" },
  { id: "3", title: "토르" },
];

export default function MovieList() {
  return (
    <div className={styles.container}>
      <h1>영화 목록</h1>
      <ul className={styles.movieList}>
        {movies.map((movie) => (
          <li key={movie.id} className={styles.movieItem}>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
      <Link href="/" className={styles.back}>
        ← 돌아가기
      </Link>
    </div>
  );
}
