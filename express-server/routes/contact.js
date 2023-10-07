import * as express from 'express'
import {sendEmail} from '../aws/ses.js'

const router = express.Router();

router.post('/', async function (req, res) {
        const {name, email, phone, subject, comments} = req.body
        console.log(name, email, phone, subject, comments)
        const emailSubject = subject + " - " + email
        try {
            await sendEmail(emailSubject, comments)
            res.send("Contact request sent. Someone will contact you shortly.")
        } catch (e) {
            console.error(e)
            res.status(500)
            res.send("We could not process your request. Please call (435)463-8769 to speak with someone directly.")
        }
    }
)
export {router}
