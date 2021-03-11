import Harvest from 'harvest';

export class ReportsTimeAPI {
    baseUrl = '/v2/reports/time';
    constructor(private harvest: Harvest){}

    public async clients(data: any): Promise<any> {
        return await this.harvest.request<any>('GET', `${this.baseUrl}/clients`, data);
    }

    public async projects(data: any): Promise<any> {
        return await this.harvest.request<any>('GET', `${this.baseUrl}/projects`, data);
    }
}
