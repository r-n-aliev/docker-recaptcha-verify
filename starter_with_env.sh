export EXT_PORT=8080
export PORT=8000
export CAPTCHA_SITEVERIFY_URI=https://www.google.com/recaptcha/api/siteverify
export SECRET_KEY=6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe

echo "Environment variables was prepared."
docker-compose up -d
