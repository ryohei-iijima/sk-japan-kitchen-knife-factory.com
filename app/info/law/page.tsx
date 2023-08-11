import styles from '@/styles/info/law.module.scss'

export default function Law() {
  return (
    <>
      <div className="contents">
        <div className="infoarea article-contents">
          <section>
            <h1 className="page-title">特定商取引法に基づく表記<span className="en-title">Notation based on Specified Commercial Transactions Law</span></h1>
            <div className={styles["page-type-law"]}>
              <dl>
                <dt>事業者名</dt>
                <dd>有限会社　飯島館</dd>
              </dl>
              <dl>
                <dt>販売責任者</dt>
                <dd>飯島啓一</dd>
              </dl>
              <dl>
                <dt>取り扱い店舗名</dt>
                <dd>SK Japan kitchen knife factory</dd>
              </dl>
              <dl>
                <dt>取り扱い店舗責任者</dt>
                <dd>飯島康平</dd>
              </dl>
              <dl>
                <dt>所在地</dt>
                <dd>〒377-1711 群馬県吾妻郡草津町大字草津447-8</dd>
              </dl>
              <dl>
                <dt>連絡先</dt>
                <dd>
                  お問い合わせフォーム、または下記メールアドレスよりご連絡ください。<br />
                  info@sk-japan-kitchen-knife-factory.com<br />
                  ２営業日以内にご連絡いたします。
                </dd>
              </dl>
              <dl>
                <dt>休日について</dt>
                <dd>土日、祝日がお休みとなります。<br />
                  お休みの間にいただきましたご注文、お問い合わせは翌営業日より随時お返事差し上げます。</dd>
              </dl>
              <dl>
                <dt>送料などの商品代金以外の付帯費用</dt>
                <dd>
                  <ol>
                    <li>１：消費税相当額（商品表示価格に消費税が含まれております）</li>
                    <li>２：別途送料がかかります。送料については<a href="payment.html#shipping-fee" className="inline-link">こちら</a>からご確認ください。</li>
                    <li>３：銀行振込手数料（振込手数料はお客様負担にてお願い致します）</li>
                  </ol>
                </dd>
              </dl>
              <dl>
                <dt>お支払い時期</dt>
                <dd>在庫がある商品に関しましてはご注文後７日以内にお支払いをお願いいたします。<br />
                  お支払いが確認できない場合、キャンセル扱いとさせていただきます。</dd>
              </dl>
              <dl>
                <dt>商品等の引き渡し時期</dt>
                <dd>
                  <ul>
                    <li>・在庫のある商品はご注文確認後５営業日以内に発送いたします。</li>
                  </ul>
                </dd>
              </dl>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}