import styles from './carosel.module.scss'

const Carousel = () => {

    return (
        <div className={styles.carousel_container}>
            <div className={styles.slides}>
                <input type="radio" name="btn_slide" id="radio1"  />
                <input type="radio" name="btn_slide" id="radio2" />
                <input type="radio" name="btn_slide" id="radio3"  />

                <div className='slide first'>
                    <img src="https://placehold.jp/400x300.png" alt="slide 1" />
                </div>

                <div className='slide'>
                    <img src="https://placehold.jp/400x300.png" alt="slide 2" />
                </div>

                <div className='slide'>
                    <img src="https://placehold.jp/400x300.png" alt="slide 3" />
                </div>
            </div>

            <div className={styles.navigation_auto}>
                <div className={styles.auto_btn1}></div>
                <div className={styles.auto_btn3}></div>
                <div className={styles.auto_btn3}></div>
            </div>

            <div className={styles.manual_navigation}>
                <label htmlFor='radio1' className={styles.manua_btn}></label>

            </div>


        </div>

    )
}

export default Carousel