import Head from "next/head";
import styles from "../styles/Home.module.css";
import Router from "next/router";
import useTheme from "../hooks/useTheme";
import { useState } from "react";
import { Button } from "../components";

export default function Home() {
  const { themes, setTheme, currentTheme } = useTheme();
  
  const handleInput = (e) => {
    e.preventDefault();
    const id = currentTheme.id;
    const fixedName = "Acie"; 

    if (id == 0) Router.push(fixedName);
    else Router.push(`/${fixedName}/${id}`);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create a Birthday Wish</title>
        <meta name="description" content="An app to generate birthday wishes :)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.main}>
          <h1 className={styles.title}>
            Create a <span className={styles.span}>Birthday</span> Wish
          </h1>
        </div>

        {/* Theme Color  */}
        <div className={styles.themeWrapper}>
          <form
            className={styles.theme}
            id="theme-input"
            onChange={(e) => setTheme(e.target.id)}
          >
            {themes.map((item) => (
              <input
                key={item.id}
                type="radio"
                className={item.name}
                id={item.id}
                name="theme"
                value={item.color}
                defaultChecked={currentTheme.id === item.id}
              />
            ))}
          </form>
        </div>

        <div>
          <form className={styles.form} onSubmit={handleInput}>
            <input
              id="input"
              name="go"
              className={styles.input}
              placeholder="Enter name of the person"
              value="Acie" // Always display "Acie" in the input
              readOnly // Prevent user from changing the value
            />
            <Button className={styles.button} type="submit" text="Go!" />
          </form>
        </div>
      </main>
    </div>
  );
}
