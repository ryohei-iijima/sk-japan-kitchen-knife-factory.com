import styles from '@/styles/info/returnedexchange.module.scss'

export default function Rturnedexchange() {
  return (
    <>
      <div className="contents">
        <div className="infoarea article-contents">
          <section className={styles["page-type-returnedexchange"]}>
            <h1 className="page-title">返品・交換・キャンセルにつきまして<span className="en-title">About returned goods exchange</span></h1>
            <dl>
              <dt>【返品・交換について】</dt>
              <dd>
                <p>以下の場合には返品、交換が可能です。</p>
                <ul>
                  <li>・不良品やご注文内容と異なる場合</li>
                  <li>・未使用で、商品到着後14日以内の場合</li>
                </ul>
              </dd>
              <dd>
                <p>以下の場合は返品、交換ができません。</p>
                <ul>
                  <li>・商品到着後14日を超えてしまっている</li>
                  <li>・ご使用になられた商品（不良があった場合を除く）</li>
                  <li>・お客様の使用により汚損、故意による破損の場合</li>
                </ul>
              </dd>
            </dl>
            <dl>
              <dt>【キャンセルについて】</dt>
              <dd>
                <p>商品発送前のみお受けいたします。</p>
                <p>すでにお受けとり、お支払いが済んでいる商品につきましては、返品扱いとさせていただき、返送の際の送料が発生致します。</p>
              </dd>
            </dl>
            <dl>
              <dt>【返品時の返送料につきまして】</dt>
              <dd>
                <ul>
                  <li>・お客様都合による返品につきましては送料をご負担ください。</li>
                  <li>・誤発送、商品不良の返品につきましては着払いにてお送りください。</li>
                </ul>
              </dd>
            </dl>
          </section>
        </div>
      </div>
    </>
  )
}