const sgMail = require('@sendgrid/mail');

const { SENDGRID_API_KEY } = require('../../config');

const sendProducts = (products, mail) => {
  sgMail.setApiKey(SENDGRID_API_KEY);

  const msg = {
    to: mail,
    from: 'wrickee@gmail.com',
    subject: 'eBay products',
    html: `
    ${products.map(product => `
      <div>
        <h4> ${product.title} </h4>
        <img src="${product.image}" alt="${product.title}" />
        <p> ${product.locale} </p>
        <p> ${product.value} </p>
      </div>
    `)}
    `,
  };

  sgMail.send(msg);
};

module.exports = {
  sendProducts,
};
