// Import Engine
import React from "react";

// Import Styles
import "./Delivery.css";

const DeliveryPage = () => {
  return (
    <div className="main-delivery__section" id="page-wrap">
      <div className="first-section__delivery">
        <div className="first-block__delivery block__delivery">
          <h1>Сколько стоит доставка?</h1>
          <br />
          <p>Самовывоз: бесплатно на станции метро Преображенска площадь.</p>
          <br />
          <p>Доставка почтой России: от 100 рублей.</p>
          <br />
          <p>
            Доставка курьером: 100 рублей в пределах Москвы, 150 рублей в
            пределах МКАД.
          </p>
        </div>
        <div className="second-block_delivery block__delivery">
          <h1>Сроки доставки</h1>
          <br />
          <p>Самовывоз: через два дня после подверждения заказа.</p>
          <br />
          <p>
            Доставка почтой России: В течении двух недель после подтверждения
            заказа, в зависимости от места доставки.
          </p>
          <br />
          <p>Доставка курьером: в течении недели после подверждения заказа.</p>
        </div>
      </div>
      <div className="second-section_delivery">
        <div className="third-block__delivery block__delivery">
          <h1>Контакты</h1>
          <br />
          <p>Телефон: +7 901 404 37 94</p>
          <br />
          <p>Email: vasilisk-co@gmail.com</p>
          <br />
          <p>Адрес: г. Москва, м. Преображенская Площадь</p>
        </div>
        <div className="fourth-block__delivery block__delivery">
          <h1>Карты</h1>
          {/* <MapWrapper /> */}
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;
