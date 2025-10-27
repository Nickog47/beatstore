module.exports = {
    mongoURI: process.env.MONGODB_URI,
    jwtSecret: process.env.JWT_SECRET,
    stripeSecret: process.env.STRIPE_SECRET,
    endpointSecret: process.env.STRIPE_ENDPOINT_SECRET,
    clientUrl: process.env.CLIENT_URL || 'http://localhost:3000',
    s3SecretAccessKey: process.env.S3_SECRET_KEY,
    s3AccessKeyId: process.env.S3_ACCESS_KEY,
    s3PublicBucket: process.env.S3_PUBLIC_BUCKET,
    s3PrivateBucket: process.env.S3_PRIVATE_BUCKET
}