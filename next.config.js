const REPO_NAME = ''

const urlPrefix = process.env.NODE_ENV === 'production'
    ? '/' + REPO_NAME
    : ''

module.exports = {
  reactStrictMode: true,
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
}
