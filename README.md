# beatstore

A marketplace to sell your beats.

## Development

Make sure to add `dev.js` to `/server/config/` with your MongoDB URI, AWS Tokens, Stripe Tokens, and JWT secret:

```javascript
module.exports = {
    mongoURI: '',
    jwtSecret: '',
    stripeSecret: '',
    endpointSecret: '',
    clientUrl: 'http://localhost:3000',
    s3SecretAccessKey: '',
    s3AccessKeyId: '',
    s3PublicBucket: '',
    s3PrivateBucket: ''
}
```

Also, create a file called `StripeClient.js` in `/client/src/components/utils/` with the following contents:
```
module.exports = {
    stripePublicKey: 'YOUR PUBLIC KEY FROM STRIPE HERE'
}
```

|Property|Description|
|---|---|
|mongoURI|MongoDB URI|
|jwtSecret|JWT Secret|
|stripeSecret|Stripe Secret Key|
|endpointSecret|Stripe Webhook Endpoint Secret|
|clientUrl|Frontend URL (e.g., http://localhost:3000 for dev, your production URL for prod)|
|s3SecretAccessKey|AWS Secret Key (S3 permissions)|
|s3AccessKeyId|AWS Access Key ID (S3 permissions)|
|s3PublicBucket|S3 bucket name for public files|
|s3PrivateBucket|S3 bucket name for private (pay for download) files|


## Production

Add the same properties as above to your environment variables:
- `MONGODB_URI`
- `JWT_SECRET`
- `STRIPE_SECRET`
- `STRIPE_ENDPOINT_SECRET`
- `CLIENT_URL` (your production frontend URL)
- `S3_SECRET_KEY`
- `S3_ACCESS_KEY`
- `S3_PUBLIC_BUCKET`
- `S3_PRIVATE_BUCKET`

## Acknowledgments

* [John Ahn's MERN Boilerplate](https://github.com/jaewonhimnae/boilerplate-mern-stack)
