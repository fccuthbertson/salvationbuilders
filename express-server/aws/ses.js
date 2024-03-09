import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'

const ses = new SESClient()
export async function sendEmail(subject, body) {
    const input = {
        Source: 'contact@salvationbuildersllc.com',
        Destination: {
            ToAddresses: ['troy-denman@salvationbuildersllc.com']
        },
        Message: {
            Subject: {
                Data: subject
            },
            Body: {
                Text: {
                    Data: body
                }
            }
        }
    }
    const command = new SendEmailCommand(input)
    const response = await ses.send(command)
    console.log(response)
    const resStatus = response.$metadata.httpStatusCode
    if(resStatus < 200 || resStatus > 299) throw "error sending contact email"
}