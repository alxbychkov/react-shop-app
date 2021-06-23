import styles from './Header.module.scss'

function Header() {
    return (
        <header className={styles.header}>
        <div className={styles.logo}>
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div className={styles.logo__text}>
            <p className={styles.logo__text__title}>REACT SNEAKERS</p>
            <p className={styles.logo__text__subtitle}>Магазин лучших кроссовок</p>
          </div>
        </div>
        <div className={styles.user}>
          <div className={styles.user__basket}>
            <div className={styles.basket__icon}></div>
            <div>1250 руб.</div>
          </div>
          <div className={styles.favorite__icon}></div>
          <div className={styles.login__icon}></div>
        </div>
      </header>
    )
}

export default Header