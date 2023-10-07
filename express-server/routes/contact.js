import * as express from 'express'
import {sendEmail} from '../aws/ses.js'

const router = express.Router();

router.post('/', async function (req, res) {
        const {name, email, phone, subject, comments} = req.body
        console.log(name, email, phone, subject, comments)
        // const dateTime = new Date().toISOString()
        // const key = email + "/" + dateTime
        // await put(key, {
        //     name, email, phone, subject, comments
        // })
        const emailSubject = subject + " - " + email
        await sendEmail(emailSubject, comments)
        res.send("Request Sent. Someone will contact you shortly.")
    }
)
export {router}
