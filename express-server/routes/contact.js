import * as express from 'express'
const router = express.Router();
import { put } from '../aws/s3.js'

router.post('/', async function (req, res){
        const {name, email, phone, subject, comments} = req.body
        console.log(name, email, phone, subject, comments)
        // write request to DB. Push notification to phone
    const dt = new Date()
    const year = dt.getFullYear()
    const month = dt.getMonth()
    const day = dt.getDay()
    const key = year + '-' + month + '-' + day + '_' + email
    await put(key,{
        name, email, phone, subject, comments
    })}
)
export {router}
