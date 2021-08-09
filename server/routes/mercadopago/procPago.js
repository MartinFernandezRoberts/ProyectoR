const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('pago');
});

router.post('/process_payment', (req, res) => {
  var payment_data = {
    transaction_amount: Number(req.body.transactionAmount),
    token: req.body.token,
    description: req.body.description,
    installments: Number(req.body.installments),
    payment_method_id: req.body.paymentMethodId,
    issuer_id: req.body.issuerId,
    payer: {
      email: req.body.payer.email,
      identification: {
        type: req.body.payer.identification.docType,
        number: req.body.payer.identification.docNumber,
      },
    },
  };

  mercadopago.payment
    .save(payment_data)
    .then(function (response) {
      res.status(response.status).json({
        status: response.body.status,
        message: response.body.status_detail,
        id: response.body.id,
      });
    })
    .catch(function (error) {
      res.status(error.status).send(error);
    });
});

module.exports = router;
