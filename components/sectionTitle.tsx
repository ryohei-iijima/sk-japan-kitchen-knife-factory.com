import styles from '@/styles/components/secrionTitle.module.scss'

type Props = {
    title: string
}

export default function SectionTitle (Props:Props) {
    return(
        <>
            <div className={`${styles["section-title"]}`}>{Props.title}</div>
        </>
    )
}