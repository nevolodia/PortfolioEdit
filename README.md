## At this time, the project is under development and not ready for use.

# EditMe Portfolio

EditPortfolio is React framework to make your own portfolio.

I use it for my personal portfolio, but you can easily fork / download && customize it to your needs (and star this
repo, buy me a coffee😊).

EditPortfolio consists of custom React components that work like HTML tags and automatic page routing.

|              Pe Blocks              |                   Result                   |
|:-----------------------------------:|:------------------------------------------:|
| ![Pe Block Example](./readme01.jpg) | ![Pe Block Result Example](./readme02.jpg) |


## GitHub Actions CD/CI.

As I use `GitHub Actions` to deploy my own portfolio to `Ubuntu Nginx` server, the project is easily configurable to
work in similar environment. You are welcome to check out the [GitHub Actions](.github/workflows/main.yml) file and
configure it to your needs.

The current deployment process is as follows:
1. Push to the `production` branch.
2. GitHub Actions build the project (with CI=false).
3. GitHub Actions deploy the project using SSH and restarts the Nginx.

Deployment uses these secrets: `HOST`, `USERNAME`, `KEY` (SSH Private Key), `SERVER_PATH` (Path to the project on the
server).


## Uses.

1. React with TypeScript.
2. Bootstrap styles (only global styles without Bootstrap component styles).

