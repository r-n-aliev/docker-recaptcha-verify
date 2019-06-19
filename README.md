Container starts nodeJS service, ready for [verifying Google reCaptcha](https://developers.google.com/recaptcha/docs/verify) user tokens, received from frontend.

# Usage
Start container: 
`source start_with_env.sh`

By default service will be available by _POST_ on _http://{docker-machine-IP}:8080/recaptcha-verify_

Example of request body (application/json):
```
{
	"user-token":"your_token_value"
}
```

Response will look like:
```
{
    "success": true,
    "errors": []
}
```

Before **prod** using set your values for environment variables in [starter_with_env.sh](https://github.com/r-n-aliev/docker-recaptcha-verify/blob/master/starter_with_env.sh)
