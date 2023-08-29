import styles from '@/styles/components/snsList.module.scss'

const snsURL = {
    instagram: "https://www.instagram.com/skjkkf/?hl=ja",
    facebook: "https://www.facebook.com/skjkkf",
    twitter: "https://twitter.com/sk_knife?lang=ja",
}

type Props = {
    isSp: boolean
}

export default function SnsList (Props:Props) {
    console.log(Props.isSp === true);
    return (
        <>
            <ul className={`${styles["sns-link-list"]} ${Props.isSp === true ? styles["sp-header-sns"] : ""}`}>
                <li className={`${styles["sns-link"]}`}>
                    <a href={snsURL.instagram} target="_blank"><img src="/images/sns/instagram.svg" alt="instagramアイコン" /></a>
                </li>
                <li className={`${styles["sns-link"]}`}>
                    <a href={snsURL.facebook} target="_blank"><img src="/images/sns/facebook.svg" alt="facebookアイコン" /></a>
                </li>
                <li className={`${styles["sns-link"]}`}>
                    <a href={snsURL.twitter} target="_blank"><img src="/images/sns/twitter.svg" alt="twitterアイコン" /></a>
                </li>
            </ul>
        </>
    )
}
