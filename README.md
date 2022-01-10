# argocd-node-argocd-notifications-bot
the node js server of a bot for argocd-notificaitons. It should take syncstatuses of argocd and comment back on issues.

# opf-argocd-notifications

> A GitHub App built with [Probot](https://github.com/probot/probot) that A Probot app

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t opf-argocd-notifications .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> opf-argocd-notifications
```

## Contributing

If you have suggestions for how opf-argocd-notifications could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2022 Gregory-Pereira <grpereir@redhat.com>
