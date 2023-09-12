const express = require('express');
const router = express.Router()
const protect = require('../middleware/Authmiddleware');
const { pay } = require('../controllers/paymentController');
// const sdk = require('api')('@fincra-api/v1.0#fbrqr43ellnt4rih');
const axios = require('axios');
router.get("/bank", (req,res) =>{
   
    try {
        const options = {
            method: 'GET',
            url: 'https://sandboxapi.fincra.com/core/banks?currency=NGN&country=NG',
            headers: {accept: 'application/json', 'api-key': 'Jkl8MZRglGXk8sMmggtZEuKcxmNtAYUl'}
          };
          
          axios
            .request(options)
            .then(function (response) {
              res.send(response.data);
            })
            .catch(function (error) {
              res.send(error);
            });
        
    } catch (error) {
        res.send(error)
        
    }

    
});

router.post('/send', async (req, res) => {
    try {
      const options = {
        method: 'POST',
        url: 'https://sandboxapi.fincra.com/disbursements/payouts',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          'api-key': 'Jkl8MZRglGXk8sMmggtZEuKcxmNtAYUl'
        },
        data: {
            business: '63da200cb234c4e0b992e200',
            sourceCurrency: 'NGN',
            destinationCurrency: 'NGN',
            amount: '900',
            description: 'Payment',
            customerReference: 'Hai',
            beneficiary: {
              lastName: 'Doe',
              email: 'test@fincra.com',
              type: 'individual',
              accountHolderName: 'john doe',
              accountNumber: req.body.accountNumber,
              country: 'NG',
              bankCode: '044',
              sortCode: '9090',
              registrationNumber: 'A909'
          },
          paymentDestination: req.body.paymentDestination
        }
      };
  
      const response = await axios.request(options);
  
      // Handle the successful response here
      console.log(response.data);
      res.status(200).json(response.data); // Send a success response to the client
    } catch (error) {
      // Handle the error response here
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' }); // Send an error response to the client
    }
  });


  //airtime 
  router.get('/airtime',(req,res) =>{
    const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://billing-staging.bytestacks.io/api/v1/telcos',
  headers: {
    accept: 'application/json',
    'secret-key': 'Jkl8MZRglGXk8sMmggtZEuKcxmNtAYUl',
    'api-key': 'Jkl8MZRglGXk8sMmggtZEuKcxmNtAYUl'
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
  })

router.get('/balance',(req, res) =>{
    

    const options = {
      method: 'GET',
      url: 'https://sandboxapi.fincra.com/wallets/64f1a777838af8706f211ccd',
      headers: {accept: 'application/json', 'api-key': 'Jkl8MZRglGXk8sMmggtZEuKcxmNtAYUl'}
    };
    
    axios
      .request(options)
      .then(function (response) {
        res.send(response.data);
      })
      .catch(function (error) {
        res.send(error);
      });
})



module.exports = router