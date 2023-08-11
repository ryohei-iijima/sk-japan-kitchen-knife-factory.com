import styles from '@/styles/components/snsList.module.scss'

const snsURL = {
    instagram: "https://www.instagram.com/skjkkf/?hl=ja",
    facebook: "https://www.facebook.com/skjkkf",
    twitter: "https://twitter.com/sk_knife?lang=ja",
}

export default function SnsList () {
    return (
        <>
            <ul className={styles["sns-link-list"]}>
                <li className={`${styles["sns-link"]} ${styles.instagram}`}>
                    <a href={snsURL.instagram} target="_blank"><img src="/images/sns/instagram.svg" alt="instagramアイコン" /></a>
                </li>
                <li className={`${styles["sns-link"]} ${styles.facebook}`}>
                    <a href={snsURL.facebook} target="_blank"><img src="/images/sns/facebook.svg" alt="facebookアイコン" /></a>
                </li>
                <li className={`${styles["sns-link"]} ${styles.twitter}`}>
                    <a href={snsURL.twitter} target="_blank"><img src="/images/sns/twitter.svg" alt="twitterアイコン" /></a>
                </li>
            </ul>
        </>
    )
}
