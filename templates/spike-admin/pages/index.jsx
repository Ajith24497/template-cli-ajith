import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function index() {
  const [pages, setPages] = useState([]);

  const fetchPagesList = async () => {
    const res = await fetch("http://localhost:8080/page");
    const data = await res.json();

    setPages(data);
  };

  useEffect(() => {
    fetchPagesList();
  }, []);

  return (
    <div className={styles.main}>
      {pages?.map((el) => (
        <Link key={el.id} href={`/${el.spike}`}>
          <div className={styles.nav_button}>{el.name}</div>
        </Link>
      ))}
    </div>
  );
}
