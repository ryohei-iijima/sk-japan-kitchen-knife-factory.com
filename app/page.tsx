import styles from '@/styles/top/top.module.scss'
import Slider from '@/components/slider'

export default function Home() {
  return (
    <>
      <div className={styles.topcontent}>
        <div className={styles.maincontent}>
          <div className={styles.mainrogo}>
            <img src="/images/mainrogo.svg" alt="SK-JAPAN-Kitchen-Knife-Factory" />
          </div>
          <div className={styles.eyecatching}>
            <span className={styles.eyecatchingtext}>実用性と芸術性の融合</span><span className={styles.en}>- Fusion of practicality and artistry -</span>
          </div>
          <div className={styles.linkbtnlist}>
            <div className={styles.contactbtn}>
              <a href="https://shop.sk-japan-kitchen-knife-factory.com/" target="_blank">商品一覧</a>
            </div>
            <div className={styles.contactbtn}>
              <a href="/shoplist/">取扱店舗一覧</a>
            </div>
            <div className={`${styles.contactbtn} ${styles.contact}`}>
              <a href="https://thebase.in/inquiry/skjapankkf" target="_blank">お問合せ</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bgArea}>
        <Slider />
      </div>
    </>
  )
}
