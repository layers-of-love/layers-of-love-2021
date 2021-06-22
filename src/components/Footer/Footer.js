import React from 'react';
// styles
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.container}>
      <p>Layers of Love is a collaborative project by <a href='' className={styles.link}>Khadija Aziz</a> and <a href='' className={styles.link}>Laura Kay Keeling</a>, 2021.</p>
      <p>Website is developed by <a href='' className={styles.link}>Areeba Aziz</a> and <a href='' className={styles.link}>Sheeza Aziz</a>. This website is partially funded by <a href='' className={styles.link}>Robert McLauqlin Gallery</a>.</p>
    </div>
  )
}
