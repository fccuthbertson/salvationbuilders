import {
    S3Client,
    PutObjectCommand,
    GetObjectCommand
} from '@aws-sdk/client-s3'
import {ClientConfig} from "./credentials.js";
const clientConfig = new ClientConfig()
const s3 = new S3Client(clientConfig)

export function getClient() {
    // A region and credentials can be declared explicitly. For example
    // `new S3Client({ region: 'us-east-1', credentials: {...} })` would
    //initialize the client with those settings. However, the SDK will
    // use your local configuration and credentials if those properties
    // are not defined here
    return s3
}

export async function put(key, body) {
    await s3.send(new PutObjectCommand({
        Bucket: 'salvation-builders-llc',
        Key: key,
        Body: JSON.stringify(body)
    }))
}