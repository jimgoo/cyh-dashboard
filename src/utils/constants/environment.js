const DEVELOPMENT_BASE_URL = "https://dev-api.chooseketamine.com"
const PRODUCTION_BASE_URL = "https://api.chooseketamine.com"

export const BASE_URL = process.env.NEXT_PUBLIC_ENVIRONMENT === WEBSITE_ENVIRONMENT.DEVELOPMENT
    ? DEVELOPMENT_BASE_URL :
    process.env.NEXT_PUBLIC_ENVIRONMENT === WEBSITE_ENVIRONMENT.PRODUCTION ? PRODUCTION_BASE_URL : ""
