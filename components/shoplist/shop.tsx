import styles from '@/styles/components/shop.module.scss'
import Map from '@/components/Map'

type ShopInfo = {
  shopInfo: {
    shopName: string,
    enShopName: string,
    isEnglish: Boolean,
    openingHours: string,
    regularHoliday: string,
    postCode: string,
    address: string,
    tel: string,
    comment: string,
    mapId: string,
    mapInfo: {
      center: {
        lat: number,
        lng: number,
      },
      zoom: number
    }
  }
}

const englishElement = (isEnglish:Boolean) => {
  if (isEnglish) {
    return <div className={styles["icon-english"]}>English OK</div>
  }
  return;
}

export default function Shop(Props:ShopInfo) {
  return (
    <>
      <section className={styles.item}>
        <div className={styles.flexbox}>
          <div className={styles.detaile}>
            <h3 className={styles.name}>{Props.shopInfo.shopName}<span className={styles["em-text"]}>{Props.shopInfo.enShopName}</span></h3>
            { englishElement(Props.shopInfo.isEnglish)}
            <div className={styles.information}>
              <p><span className={`${styles.icon} ${styles["icon-time"]}`}></span>営業時間／{Props.shopInfo.openingHours}</p>
              <p><span className={`${styles.icon} ${styles["icon-schedule"]}`}></span>定休日／{Props.shopInfo.regularHoliday}</p>
              <p><span className={`${styles.icon} ${styles["icon-map"]}`}></span>住所／〒{Props.shopInfo.postCode}&nbsp;{Props.shopInfo.address}</p>
              <p><span className={`${styles.icon} ${styles["icon-tel"]}`}></span>TEL :{Props.shopInfo.tel}</p>
            </div>
            <div className={styles.comment}>{Props.shopInfo.comment}</div>
          </div>
          <div className={`${styles.map} ${styles[Props.shopInfo.mapId]}`}><Map mapInfo={Props.shopInfo.mapInfo}/></div>
        </div>
      </section>
    </>
  )
}
