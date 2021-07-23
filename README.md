# Twilio Verify with Retry Logic

This demo of the [Twilio Verify API](https://www.twilio.com/docs/verify/api) includes best practices for SMS verification retry logic with Voice fallback and landline detection.

## Pre-requisites

* A Verify Service. [Create one in the Twilio Console](https://www.twilio.com/console/verify/services)

## Clone or download the project

```shell
git clone git@github.com:robinske/verify-retry.git && cd verify-retry
```

### Environment variables

This project requires some environment variables to be set. To keep your tokens and secrets secure, make sure to not commit the `.env` file in git. Create a `.env` file and set the following values:

| Variable             | Meaning                                                           | Required |
| :------------------- | :---------------------------------------------------------------- | :------- |
| `ACCOUNT_SID`        | Find in the [console](https://www.twilio.com/console)             | Yes      |
| `AUTH_TOKEN`         | Find in the [console](https://www.twilio.com/console)             | Yes      |
| `VERIFY_SERVICE_SID` | Create one [here](https://www.twilio.com/console/verify/services) | Yes      |


Start the server:

```
npm start
```

Open the web page at https://localhost:3000/index.html and enter your phone number to test

ℹ️ Check the developer console and terminal for any errors, make sure you've set your environment variables.
