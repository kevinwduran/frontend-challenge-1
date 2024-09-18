"use client"

import { FilterBar } from "./components/FilterBar";
import { ProductsList } from "./components/ProductsList";
import styles from "./page.module.css";

export default function Home() {
  return (
      <main className={styles.main}>
        <FilterBar />
        <ProductsList/>
      </main>  
  );
}
