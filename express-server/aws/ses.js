import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'
import {ClientConfig} from "./credentials.js";

const clientConfig = new ClientConfig()
const ses = new SESClient(clientConfig)

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
}