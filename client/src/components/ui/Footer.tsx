import React from 'react';

export default function Footer(): JSX.Element {
  const styleWrapper = {
    marginTop: '30px',
    width: '100%',
    height: '330px',
    background: '#000000c9',
    padding: '20px 50px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 1)',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
  };
  const styleContainer = {
    display: 'flex',
    justifyContent: 'space-between',
  };
  const styleUrls = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '40px',
    marginTop: '40px',
    borderTop: '2px solid #000000c9',
  };
  const styleMoscowDiv = {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
  };

  const styleDiv = {
    width: '280px',
    height: '170px',
    // background: '#000000c9',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: '20px', // правильное написание
  };

  const styleP = {
    margin: '0',
    color: 'white',
    fontSize: '15px',
  };
  const stylePbot = {
    margin: '1px',
    color: 'white',
    fontSize: '12px',
    opacity: '0.7',
  };
  const styleH3 = {
    margin: '0',
    padding: '13px',
    color: '#2e749f',
    fontSize: '16px',
    width: '100%',
    // textAlign: 'center',
    // borderBottom: '2px solid #656565',
  };
  const styleHref = {
    margin: '0',
    padding: '13px',
    color: '#2e749f',
    fontSize: '16px',
    width: '100%',
    textAlign: 'center',
    textDecoration: 'none',
  };
  const styleImg = {
    width: '26px',
    height: '26px',
    borderRadius: '50%',
    marginTop: '6px',
  };
  const styleIMGcontainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
  };
  return (
    <div style={styleWrapper}>
      <div style={styleContainer}>
        <div style={styleDiv}>
          <h3 style={styleH3}>О компании:</h3>
          <p style={styleP}>text</p>
        </div>

        <div style={styleDiv}>
          <h3 style={styleH3}>Контакты:</h3>
          <p style={styleP}>
            Акции Карта сайта Политика конфиденциальности КОНТАКТЫ +7 (495) 762-53-93
            info@pereezd-ideal.ru г. Москва, ул. Золоторожский вал 11, стр. 21
          </p>
        </div>
        <div style={styleDiv}>
          <h3 style={styleH3}>Наши соцсети:</h3>
          <div style={{ padding: '50px', display: 'flex', flexDirection: 'row' }}>
            <a style={{ marginRight: '30px'}}>
              <img style={styleImg} src="/icon/free-icon-instagram-739244.png" alt="Instagram" />
            </a>
            <a style={{ marginRight: '30px' }}>
              <img style={styleImg} src="/icon/free-icon-whatsapp-1384023.png" alt="WhatsApp" />
            </a>
            <a style={{ marginRight: '30px' }}>
              <img style={styleImg} src="/icon/free-icon-youtube-1077046.png" alt="WhatsApp" />
            </a>
            <a style={{ marginRight: '30px' }}>
              <img style={styleImg} src="/icon/free-icon-vk-1236871.png" alt="WhatsApp" />
            </a>
            <a>
              <img style={styleImg} src="/icon/free-icon-telegram-2111812.png" alt="Telegram" />
            </a>
          </div>
        </div>
      </div>
      <div style={styleUrls}>
        <a href="#" style={styleHref}>
          Ссылка 1
        </a>
        <a href="#" style={styleHref}>
          Ссылка 2
        </a>
        <a href="#" style={styleHref}>
          Ссылка 3
        </a>
        <a href="#" style={styleHref}>
          Ссылка 4
        </a>
      </div>
      <div style={styleMoscowDiv}>
        <p style={stylePbot}>Москва 2024</p>
        {/* <p style={stylePbot}>ул. Орджанакидзы 11 ст.1</p> */}
      </div>
    </div>
  );
}
