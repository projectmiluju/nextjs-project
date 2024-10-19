import Link from "next/link";
import styles from "../styles/Home.module.css";
const products = [
  { id: "1", name: "Laptop" },
  { id: "2", name: "Smartphone" },
  { id: "3", name: "Headphones" },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>제품 목록</h1>
      <ul className={styles.productList}>
        {products.map((product) => (
          <li key={product.id} className={styles.productItem}>
            <Link
              href={`/products/${product.id}`}
              className={styles.productLink}
            >
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
