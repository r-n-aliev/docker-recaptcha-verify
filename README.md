Container starts nodeJS service, ready for [verifying Google reCaptcha](https://developers.google.com/recaptcha/docs/verify) user tokens, received from frontend.

# Usage
Start container: 
`source start_with_env.sh`

By default service will be available on _http://{docker-machine-IP}:8080/recaptcha-verify_

Before **prod** using set your values for environment variables in [starter_with_env.sh](https://github.com/r-n-aliev/docker-recaptcha-verify/blob/master/starter_with_env.sh)
