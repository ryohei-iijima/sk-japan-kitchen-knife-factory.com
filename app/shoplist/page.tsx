import SectionTitle from '@/components/sectionTitle'
import Shop from '@/components/shoplist/shop'
import styles from '@/styles/shoplist/shoplist.module.scss'

const shopInfoTokyo = {
  shopName: "刃物屋 越乃一刀 本舗 かっぱ橋本通り店",
  enShopName: "The Knife Shop Koshinoitto Honpo Kappabashi-Hondori Shop",
  isEnglish: true,
  openingHours: "9:00〜18:00(19:00閉店の場合も有)",
  regularHoliday: "なし",
  postCode: "111-0035",
  address: "東京都台東区西浅草２丁目２２−７ 高知尾ビル 1階",
  tel: "03-5830-3808",
  web:"",
  comment: `かっぱ橋の中心街にある包丁ショップです。
  英語、中国語など海外のお客様にも対応可能です。
  刃物の町、燕三条を中心に全国の刃物産地の包丁を職人様からご家庭の包丁まで取り揃えています。
  止水の包丁も展示販売しております。
  オーダーも可能ですのでお気軽にお申し付けください。`,
  mapId: "koshinoitto",
  mapInfo: {
    center: {
      lat: 35.714363,
      lng: 139.789324,
    },
    zoom: 16
  }
}

const shopInfoAichi = {
  shopName: "三浦刃物店",
  enShopName: "MIURA KNIVES-NAGOYA-JAPAN",
  isEnglish: true,
  openingHours: "10:00~19:00",
  regularHoliday: "なし",
  postCode: "460-0011",
  address: "愛知県名古屋市中区大須3-39-36大須外科ビル2階",
  tel: "052-242-2495",
  web: "https://miuraknives.jp/",
  comment: `愛知県名古屋市の大須にある包丁のセレクトショップです。
  全国の刃物産地から取り寄せた包丁を取り扱っています。
  プロの料理人様にも満足いただけるショップになります。
  包丁のみならず鋼材の知識も豊富な店長がご希望に沿った包丁を提案してくれます。
  止水のフルカスタムオーダーも承れます。
  是非お立ち寄りください。`,
  mapId: "miura",
  mapInfo: {
    center: {
      lat: 35.157873,
      lng: 136.901533
    },
    zoom: 16
  }
}

const shopInfoTokyoMad = {
  shopName: "Matrix-AIDA",
  enShopName: "マトリックス・アイダ",
  isEnglish: false,
  openingHours: "10:00am～6:00pm",
  regularHoliday: "不定休",
  postCode: "175-0094",
  address: "東京都板橋区成増2-26-18-101",
  tel: "03-3939-0052",
  web:"https://matrix-aida.com",
  comment: `数多くの刃物好きが集まる、ナイフショップの老舗です。
  豊富な知識と経験から詳しくお話をしていただけます。
  また、実際に手にとって包丁を見ていただけます。
  とても人当たりが良い方がご対応してくださいますので、お気軽にお立ち寄りください。`,
  mapId: "matrix",
  mapInfo: {
    center: {
      lat: 35.778314,
      lng: 139.629728,
    },
    zoom: 16
  }
}

const shopInfoTokyoGunma = {
  shopName: "草津温泉　飯島館",
  enShopName: "Iijimakan",
  isEnglish: false,
  openingHours: "10:00am～4:00pm",
  regularHoliday: "土曜日・日曜日",
  postCode: "377-1711",
  address: "群馬県吾妻郡草津町大字草津447-8",
  tel: "0279-88-3457",
  web:"https://iijimakan.com",
  comment: `草津温泉の温泉旅館内にてご対応いたします。
  サンプル品のみご覧いただくことができます。
  その場で受注、後日発送となります。
  また、お越しいただく際はご予約が必要となります。
  詳しくはお問い合わせください。`,
  mapId: "iijimakan",
  mapInfo: {
    center: {
      lat: 36.6216619,
      lng: 138.59657689999995,
    },
    zoom: 16
  }
}


export default function Shoplist() {
  return (
    <>
      <div className="contents">
        <article className="article-contents">
          <h1 className="page-title">取扱店舗一覧<span className="en-title">List of shops</span></h1>
          <div className="page-type-shop-list">
            <SectionTitle title="取り扱い包丁店舗一覧" />
            <section className={`${styles["area"]}`}>
              <h2 className={`${styles["area-name"]}`}>東京<span className={`${styles["em-text"]}`}>Tokyo</span></h2>
              <Shop shopInfo={shopInfoTokyo} />
            </section>
            <section className={`${styles["area"]}`}>
              <h2 className={`${styles["area-name"]}`}>愛知<span className={`${styles["em-text"]}`}>Aichi</span></h2>
              <Shop shopInfo={shopInfoAichi} />
            </section>
          </div>
          <div className="page-type-shop-list">
            <SectionTitle title="取り扱い店舗一覧" />
            <section className={`${styles["area"]}`}>
              <h2 className={`${styles["area-name"]}`}>東京<span className={`${styles["em-text"]}`}>Tokyo</span></h2>
              <Shop shopInfo={shopInfoTokyoMad} />
            </section>
            <section className={`${styles["area"]}`}>
              <h2 className={`${styles["area-name"]}`}>群馬<span className={`${styles["em-text"]}`}>Gunma</span></h2>
              <Shop shopInfo={shopInfoTokyoGunma} />
            </section>
          </div>
        </article>
      </div>
    </>
  )
}