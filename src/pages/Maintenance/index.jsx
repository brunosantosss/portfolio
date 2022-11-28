// Import of Styles
import style from './index.module.css'

export const Maintenance = () => {
    return (
        <section>
            <div className={style.maintenance_container}>
                <h1>Maintenance</h1>
                <p>Oops... my portfolio is under maintenance, but look at this cat playing with the crochet ball, isn't it very cute?</p>
            </div>
            <div className={style.cat_container}>
                <img src="../../src/assets/cat.svg" alt="Beautiful Cat by Storyset"/>
            </div>
        </section>
    )
}