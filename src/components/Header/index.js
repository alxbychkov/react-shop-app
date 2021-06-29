import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <header className={styles.header}>
        <Link to="/">
          <div className={styles.logo}>
            <img width={40} height={40} src="/img/logo.png" alt="logo" />
            <div className={styles.logo__text}>
              <p className={styles.logo__text__title}>REACT SNEAKERS</p>
              <p className={styles.logo__text__subtitle}>Магазин лучших кроссовок</p>
            </div>
          </div>
        </Link>
        <div className={styles.user}>
          <div className={styles.user__basket} onClick={props.onClickCart}>
            <div className={styles.basket__icon}></div>
            {
              props.total !== 0 && <div>{props.total} руб.</div>
            }
          </div>
          <Link to="/favorites"><div className={styles.favorite__icon}></div></Link>
          <Link to="/orders"><div className={styles.login__icon}></div></Link>
        </div>
      </header>
    )
}

export default Header