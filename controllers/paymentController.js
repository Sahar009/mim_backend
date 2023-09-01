const axios = require('axios');



const pay = (req,res) =>{
    

//     const sdk = require('api')('@fincra-api/v1.0#ri0h3cllknxr4o');
// sdk.auth('Jkl8MZRglGXk8sMmggtZEuKcxmNtAYUl');
// sdk.listBanks()
//   .then(({ data }) => console.log(data))
//   .catch(err => res.send(err)
//   );
  const sdk = require('api')('@fincra-api/v1.0#cba70d8a4llgd944b');

  sdk.auth('Jkl8MZRglGXk8sMmggtZEuKcxmNtAYUl');
  sdk.fetchTelcos()
    .then(({ data }) => console.log(data))
    .catch(err => console.error(err));


    
}
module.exports={
    pay
}