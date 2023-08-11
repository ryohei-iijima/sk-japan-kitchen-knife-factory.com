import styles from '@/styles/components/header.module.scss'
import GlobalNavigation from '@/components/globalNavigation'
import SnsList from '@/components/snsList'

const snsURL = {
    instagram: "https://www.instagram.com/skjkkf/?hl=ja",
    facebook: "https://www.facebook.com/skjkkf",
    twitter: "https://twitter.com/sk_knife?lang=ja",
}

export default function Header () {
  return (
    <>
        <header className={styles.header}>
            <div className={styles.rogo}><a href="/">SK-Japan</a></div>
            <SnsList />
            <GlobalNavigation addClass={"pc-break"} />
            <div className={`${styles["sp-break"]} ${styles["nav-menu-btn"]}`}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`${styles["sp-header"]} ${styles["sp-break"]}`}>
                <div className={styles.rogo}>
                    <a href="/"><img src="/images/mainrogo.svg" alt="SK-JAPAN-Kitchen-Knife-Factory" /></a>
                </div>
                <SnsList />
                <GlobalNavigation />
            </div>
        </header>
    </>
  )
}