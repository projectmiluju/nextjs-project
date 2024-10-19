import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import styles from "../../styles/Product.module.css";

const products = [
  { id: "1", name: "Laptop", description: "A high-performance laptop" },
  { id: "2", name: "Smartphone", description: "A latest model smartphone" },
  { id: "3", name: "Headphones", description: "Noise-cancelling headphones" },
];

export default function ProductDetail({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{product.name}</h1>
      <p className={styles.description}>{product.description}</p>
      <Link href="/" className={styles.backLink}>
        홈으로 돌아가기
      </Link>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = products.map((product) => ({
    params: { id: product.id },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: { product },
  };
};
