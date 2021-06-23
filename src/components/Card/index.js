import styles from './Card.module.scss'

function Card(props) {
    const onClickBtn = () => {
        console.log(props)
    }
    return (
        <div className={styles.card__item}>
            <div className={styles.card__item__image}>
                <div className={styles.card__item__btn__favorite}></div>
                <img width={133} height={112} src={props.image} alt={props.name} />
            </div>
            <div className={styles.card__item__title}>
                {props.name}
            </div>
            <div className={styles.card__item__bottom}>
                <div>
                    <p className={styles.price__name}>Цена:</p>
                    <div className={styles.price__value}>{props.price} руб.</div>
                </div>
                <div className={styles.card__item__btn} onClick={onClickBtn}></div>
            </div>
        </div>
    )
}

export default Card