import Harvest from 'Harvest';

const CLIENT_USER_AGENT = 'HarvestBar (sl@scn.cx)';

/**
 * Creates a harvest api-client from env-variables.
 */
function createFromEnv(): Harvest {
    return new Harvest({
        subdomain: process.env.HARVEST_DOMAIN,
        userAgent: CLIENT_USER_AGENT,
        concurrency: 1,
        auth: {
            accessToken: process.env.HARVEST_ACCESS_TOKEN,
            accountId: process.env.HARVEST_ACCOUNT_ID,
        },
    });
}

export default {
    createFromEnv,
}
