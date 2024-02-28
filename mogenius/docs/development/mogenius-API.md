---
sidebar_position: 5
---

# mogenius API

The mogenius REST API allows you to manage your services and cloudspaces from the command line. Once you retrieved your access token you can use all the core features of mogenius studio through the API.

At the moment, this covers endpoints for cloudspaces, stages, services, instances, users and logs. We're expanding this continuously with new endpoints in the upcoming days and weeks.

:::tip
**Check out our [API reference](https://api-docs.mogenius.com/) to start working with the API.**
:::

## Get started with the API

You need an account for mogenius to retrieve your access token and start using the API. If you don't have one yet you can quickly [sign up](https://studio.mogenius.com).

**Use your account credentials to perform a cURL**  
Make sure to replace `YOUR_EMAIL`and `YOUR_PASSWORD` with your own. 

```jsx title="cURL login"
curl --request POST \
     --url https://platform-user.mogenius.com/auth/login \
     --header 'accept: application/json' \
     --header 'content-type: application/json' \
     --data '
{
  "email": "your@email.com",
  "password": "yourpassword"
}
'
```
This is the response you can expect. Take the `ACCESS_TOKEN` to authorize every of your following requests against the mogenius API.

```jsx title="login response"
{"_lastVerifyToken":null,
"user":{"id":"USER_ID"},
"accessToken":"ACCESS_TOKEN",
"accessTokenExpiresAt":"TIMESTAMP",
"refreshToken":"REFRESH_TOKEN",
"refreshTokenExpiresAt":"TIMESTAMP",
"verifyTokenTimer":1}
```

You'll find a detailed overview of every endpoint that's currently available in our [API reference](https://api-docs.mogenius.com/).