# Harvest Bitbar Plugin
Displays data from harvest in your [bitbar/xbar](https://xbarapp.com/)

## Usage
1. Create a new [Personal Access Token](https://id.getharvest.com/developers)
2. Clone the plugin into your plugin-folder and install dependencies
    ```bash
    cd "$(defaults read com.matryer.BitBar pluginsDirectory)"
    git clone git@github.com:screeny05/harvest-bitbar.git
    cd harvest-bitbar
    npm install
    npm run build
    ```
3. Use one of the available commands to display data from harvest

## Commands
### client-share
Show the share of time between different clients.

#### Usage
Create a file like harvest-client-share.15m.sh in the plugin-folder of bitbar/xbar

```bash
#!/bin/bash
cd "$(defaults read com.matryer.BitBar pluginsDirectory)"
export HARVEST_ACCESS_TOKEN=[...]
export HARVEST_ACCOUNT_ID=[...]
export HARVEST_DOMAIN=[...]
node harvest-bar client-share "FOO=Foo Furniture Ltd." "BAR=United Bar Assoc."
```

You can provide any number of clients. To display a short name, use the `Short=Actual Name` notation. It's optional.
