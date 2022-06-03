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
curl --location --request POST 'http://api.mogenius.com/auth/login' \
--header 'Authorization: Basic RFItTkY0TFI1clkyd0V3TlFZV1BfOkVXTE9lY0lmT0U1aFFOQV9hM04xRg==' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'email=YOUR_EMAIL' \
--data-urlencode 'password=YOUR_PASSOWRD' \
--data-urlencode 'grant_type=password' \
--data-urlencode 'Device=mogenius_api'
```
This is the response you can expect. Take the `accessToken` to authorize every of your following requests against the mogenius API.

```jsx title="login response JSON"
curl --location --request POST 'http://api.mogenius.com/auth/login' \
--header 'Authorization: Basic RFItTkY0TFI1clkyd0V3TlFZV1BfOkVXTE9lY0lmT0U1aFFOQV9hM04xRg==' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'email=YOUR_EMAIL' \
--data-urlencode 'password=YOUR_PASSOWRD' \
--data-urlencode 'grant_type=password' \
--data-urlencode 'Device=mogenius_api'
```

You'll find a detailed overview of every endpoint that's currently available in our [API reference](https://api-docs.mogenius.com/).