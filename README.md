# SL Departures

A simple progressive web app for showing the next departures of transit stops in the Stockholm reginal transit network.

To get any real data you need to register and apply for an API key at: https://www.trafiklab.se/api

## Development

* Install npm dependencies
  * and `webpack` and `eslint` globally
* Start develeopment server: `npm start`

## Environment

* `AWS_ACCESS_KEY_ID`
* `AWS_SECRET_ACCESS_KEY`
* `AWS_REGION`
  * e.g. `eu-west-1`
* `SL_REAL`
  * API key for SL Realtidsinformation 4
* `DEV`
  * `true` when developing, otherwise false
* `API_ROOT`
  * Your back-end root
* `SL_ORIGINS`
  * `*` when developing, otherwise the URI to your site

### Deployment

Requirements:
* [aws cli](https://aws.amazon.com/cli/)
* S3 bucket
* AWS user with access to S3 and Lambda

Commands:
* npm run build
* npm run deploy-client
* npm run deploy-server

AWS Policy for the S3 bucket:
```json
{
  "Id": "Policy1487516784389",
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Stmt1487516781997",
      "Action": [
        "s3:GetObject"
      ],
      "Effect": "Allow",
      "Resource": "arn:aws:s3:::<bucket_name>/*",
      "Principal": "*"
    }
  ]
}
```
