export class AwsCredentials {
    constructor() {
        this.region = process.env.AWS_REGION
        this.awsKey = process.env.AWS_KEY
        this.awsSecret = process.env.AWS_SECRET
    }
}

export class ClientConfig {
    constructor() {
        this.region = process.env.AWS_REGION
        this.credentials = {
            accessKeyId: process.env.AWS_KEY,
            secretAccessKey: process.env.AWS_SECRET
        }
    }
}
