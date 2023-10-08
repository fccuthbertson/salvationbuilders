export class ClientConfig {
    constructor() {
        this.region = process.env.AWS_REGION
        this.credentials = {
            accessKeyId: process.env.AWS_ACESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
        }
    }
}
