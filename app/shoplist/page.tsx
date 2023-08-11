import styles from '@/styles/components/shoplist.module.scss'

export default function Shoplist() {
  return (
    <>
      <div className="contents">
        <article className="article-contents">
          <h1 className="page-title">取扱店舗一覧<span className="en-title">List of shops</span></h1>
          <div className="page-type-shop-list">
            <div className="section-title">取り扱い包丁店舗一覧</div>
            <section className="area">
              <h2 className="area-name">東京<span className="em-text">Tokyo</span></h2>
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
            </section>
            <section className="area">
              <h2 className="area-name">愛知<span className="em-text">Aichi</span></h2>
              <section className="item">
                <div className="flexbox">
                  <div className="detaile">
                    <h3 className="name">三浦刃物店<span className="em-text">MIURA KNIVES-NAGOYA-JAPAN</span></h3>
                    <div className="icon-english">English OK</div>
                    <div className="information">
                      <p><span className="icon icon-time"></span>営業時間／10:00~19:00</p>
                      <p><span className="icon icon-schedule"></span>定休日／なし</p>
                      <p><span className="icon icon-map"></span>住所／〒460-0011　 愛知県名古屋市中区大須3-39-36大須外科ビル2階
                      </p>
                      <p><span className="icon icon-tel"></span>TEL :052-242-2495</p>
                      <p><span className="icon icon-link"></span>Webサイト :<a href="https://miuraknives.jp/"
                        target="_blank">https://miuraknives.jp/</a></p>
                    </div>
                    <div className="comment">愛知県名古屋市の大須にある包丁のセレクトショップです。<br />
                      全国の刃物産地から取り寄せた包丁を取り扱っています。<br />
                      プロの料理人様にも満足いただけるショップになります。<br />
                      包丁のみならず鋼材の知識も豊富な店長がご希望に沿った包丁を提案してくれます。<br />
                      止水のフルカスタムオーダーも承れます。<br />
                      是非お立ち寄りください。
                    </div>
                  </div>
                  <div className="map miura"></div>
                </div>
              </section>
            </section>
          </div>
          <div className="page-type-shop-list">
            <div className="section-title">取り扱い店舗一覧</div>
            <section className="area">
              <h2 className="area-name">東京<span className="em-text">Tokyo</span></h2>
              <section className="item">
                <div className="flexbox">
                  <div className="detaile">
                    <h3 className="name">Matrix-AIDA<span className="em-text">マトリックス・アイダ</span></h3>
                    <div className="information">
                      <p><span className="icon icon-time"></span>営業時間／10:00am～6:00pm</p>
                      <p><span className="icon icon-schedule"></span>定休日／不定休</p>
                      <p><span className="icon icon-map"></span>住所／〒175-0094　 東京都板橋区成増2-26-18-101</p>
                      <p><span className="icon icon-tel"></span>TEL :03-3939-0052</p>
                      <p><span className="icon icon-link"></span>Webサイト :<a
                        href="https://matrix-aida.com/"
                        target="_blank">https://matrix-aida.com/</a></p>
                    </div>
                    <div className="comment">数多くの刃物好きが集まる、ナイフショップの老舗です。<br />
                      豊富な知識と経験から詳しくお話をしていただけます。<br />
                      また、実際に手にとって包丁を見ていただけます。<br />
                      とても人当たりが良い方がご対応してくださいますので、お気軽にお立ち寄りください。</div>
                  </div>
                  <div className="map matrix"></div>
                </div>
              </section>
            </section>
            <section className="area">
              <h2 className="area-name">群馬<span className="em-text">Gunma</span></h2>
              <section className="item">
                <div className="flexbox">
                  <div className="detaile">
                    <h3 className="name">草津温泉　飯島館<span className="em-text">Iijimakan</span></h3>
                    <div className="information">
                      <p><span className="icon icon-time"></span>営業時間／10:00am～4:00pm</p>
                      <p><span className="icon icon-schedule"></span>定休日／土曜日・日曜日</p>
                      <p><span className="icon icon-map"></span>住所／〒377-1711　 群馬県吾妻郡草津町大字草津447-8</p>
                      <p><span className="icon icon-tel"></span>TEL :0279-88-3457</p>
                      <p><span className="icon icon-link"></span>Webサイト :<a href="https://iijimakan.com/"
                        target="_blank">https://iijimakan.com/</a></p>
                    </div>
                    <div className="comment">草津温泉の温泉旅館内にてご対応いたします。<br />
                      サンプル品のみご覧いただくことができます。<br />
                      その場で受注、後日発送となります。<br />
                      また、お越しいただく際はご予約が必要となります。<br />
                      詳しくはお問い合わせください。</div>
                  </div>
                  <div className="map iijimakan"></div>
                </div>
              </section>
            </section>
          </div>
        </article>
      </div>
    </>
  )
}