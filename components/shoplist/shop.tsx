import styles from '@/styles/components/shoplist.module.scss'

export default function Shoplist() {
  return (
    <>
      <section className="item">
        <div className="flexbox">
          <div className="detaile">
            <h3 className="name">刃物屋 越乃一刀 本舗 かっぱ橋本通り店<span className="em-text">The Knife Shop
              Koshinoitto Honpo Kappabashi-Hondori Shop</span></h3>
            <div className="icon-english">English OK</div>
            <div className="information">
              <p><span className="icon icon-time"></span>営業時間／9:00〜18:00(19:00閉店の場合も有)</p>
              <p><span className="icon icon-schedule"></span>定休日／なし</p>
              <p><span className="icon icon-map"></span>住所／〒111-0035　 東京都台東区西浅草２丁目２２−７ 高知尾ビル 1階
              </p>
              <p><span className="icon icon-tel"></span>TEL :03-5830-3808</p>
            </div>
            <div className="comment">かっぱ橋の中心街にある包丁ショップです。<br />
              英語、中国語など海外のお客様にも対応可能です。<br />
              刃物の町、燕三条を中心に全国の刃物産地の包丁を職人様からご家庭の包丁まで取り揃えています。<br />
              止水の包丁も展示販売しております。<br />
              オーダーも可能ですのでお気軽にお申し付けください。</div>
          </div>
          <div className="map koshinoitto"></div>
        </div>
      </section>
    </>
  )
}
