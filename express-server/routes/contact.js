import * as express from 'express'
const router = express.Router();

router.post('/', function (req, res){
        const {name, email, phone, subject, comments} = req.body
        console.log(name, email, phone, subject, comments)
        // write request to DB. Push notification to phone
    }
)
export {router}
