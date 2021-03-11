import Harvest from 'Harvest';
import bitbar from 'bitbar';
import ClientFactory from './harvest/ClientFactory';
import { formatHours, getWeekStartAndEnd } from './date-fns';
import { ReportsTimeAPI } from './harvest/Report';

(async function main(){
    const [_0, _1, command, ...clientArgs] = process.argv;

    if(command !== 'client-share'){
        throw new Error('Unsupported Command');
    }

    const harvest = ClientFactory.createFromEnv();
    const report = new ReportsTimeAPI(harvest);

    const [from, to] = getWeekStartAndEnd();
    const clientReports = await report.clients({ from, to });

    const times = clientArgs.map(arg => {
        const [clientShort, clientName = clientShort] = arg.split('=');
        const report = clientReports.results.find(clientReport => clientReport.client_name.toLowerCase() === clientName.toLowerCase());
        return {
            clientName,
            clientShort,
            hours: report?.total_hours ?? 0
        };
    });
    const timesSorted = times.sort((a, b) => b.hours - a.hours);
    const timesSummed = times.reduce((prev, cur) => prev + cur.hours, 0);
    const timesWithShare = times.map(time => ({
        ...time,
        share: Math.round(time.hours / timesSummed * 100)
    }));

    bitbar([
        timesWithShare.map(time => `${time.clientShort} ${time.share}%`).join(' / '),
        bitbar.separator,
        `Tracked ${formatHours(timesSummed)}`,
        ...timesSorted.map(time => `${time.clientName} ${formatHours(time.hours)}`),
    ])
})();
