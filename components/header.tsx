"use client"
import styles from '@/styles/components/header.module.scss'
import GlobalNavigation from '@/components/globalNavigation'
import SnsList from '@/components/snsList'
import { useEffect } from 'react'

const snsURL = {
    instagram: "https://www.instagram.com/skjkkf/?hl=ja",
    facebook: "https://www.facebook.com/skjkkf",
    twitter: "https://twitter.com/sk_knife?lang=ja",
}

export default function Header () {
    useEffect(() => {
        const navMenuButton = document.querySelector('.js-nav-menu-btn');
        const spHeader = document.querySelector('.js-sp-header');
        const toggleNavMenuButtonClass = () => {
            if(navMenuButton?.classList.contains('active')) {
                navMenuButton.classList.remove('active');
            } else {
                navMenuButton?.classList.add('active');
            }
        }
        const openSPMenu = () => {
            toggleNavMenuButtonClass();
            if(spHeader?.classList.contains(`${styles.active}`)) {
                spHeader.classList.remove(`${styles.active}`);
                spHeader.classList.add(`${styles.hide}`);
            } else {
                spHeader?.classList.add(`${styles.active}`);
                spHeader?.classList.remove(`${styles.hide}`);
            }
        }
        navMenuButton?.addEventListener('click', openSPMenu)
    }, [])
  return (
    <>
        <header className={styles.header}>
            <div className={styles.rogo}><a href="/">SK-Japan</a></div>
            <SnsList isSp={false} />
            <GlobalNavigation addClass={"pc-break"} />
            <div className={`${styles["sp-break"]} ${styles["nav-menu-btn"]} js-nav-menu-btn`}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`${styles["sp-header"]} ${styles["sp-break"]} js-sp-header`}>
                <div className={styles.rogo}>
                    <a href="/"><img src="/images/mainrogo.svg" alt="SK-JAPAN-Kitchen-Knife-Factory" /></a>
                </div>
                <SnsList isSp={true} />
                <GlobalNavigation />
            </div>
        </header>
    </>
  )
}