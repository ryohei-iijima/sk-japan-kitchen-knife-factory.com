import styles from '@/styles/components/globalNavigation.module.scss'

type Props = {
    addClass?: string;
}

export default function GlobalNavigation (Props:Props) {
    return (
        <>
            <nav className={`${styles["global-navigation"]} ${Props.addClass ? styles["pc-break"] : ''}`}>
                <ul>
                    <li><a href="https://shop.sk-japan-kitchen-knife-factory.com/" target="_blank">商品一覧</a></li>
                    <li><a href="/info/privacy/">プライバシーポリシー</a></li>
                    <li><a href="/info/payment/">お支払いについて</a></li>
                    <li><a href="/info/returnedexchange/">返品・交換・キャンセルについて</a></li>
                    <li><a href="/info/law/">特定商取引法に基づく表記</a></li>
                </ul>
            </nav>
        </>
    )
}