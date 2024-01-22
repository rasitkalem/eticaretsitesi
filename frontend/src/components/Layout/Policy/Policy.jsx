import "./Policy.css";

const Policy = () => {
  return (
    <section className="policy">
      <div className="container">
        <ul className="policy-list">
          <li className="policy-item">
            <i className="bi bi-truck"></i>
            <div className="policy-texts">
              <strong>ÜCRETSİZ TESLİMAT</strong>
              <span></span>
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-headset"></i>
            <div className="policy-texts">
              <strong>DESTEK 24/7</strong>
              <span>Aktif 24 Saat</span>
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-arrow-clockwise"></i>
            <div className="policy-texts">
              <strong> 30 Gün içinde iade</strong>
              <span></span>
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-credit-card"></i>
            <div className="policy-texts">
              <strong> Ödeme Yöntemleri</strong>
              <span>Güvenli Ödeme</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Policy;
