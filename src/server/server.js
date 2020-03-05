import express from 'express';
import DappLib from '../lib/dapp-lib';

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FILE STORAGE: SIA  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
DappLib.onAddIpfsDocument((result) => {
        console.log(result);
});


const app = express();
app.get('/api', (req, res) => {
    res.send({
      message: 'An API for My Dapp'
    })
})

export default app;


