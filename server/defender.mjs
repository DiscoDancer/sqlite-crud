import Buckets from "buckets-js";
import IpService from "./ip-service.mjs";

export default class Defender {
    constructor() {
        this.rate = 5;
        this.limit = 3;
        this.hashTable = Buckets.Dictionary();
        this.interval = setInterval(() => this.clearAddresses(), this.rate * 1000);
    }

    // tslint:disable-next-line:member-access
    shouldProcess(request) {
        const ip = IpService.getIp(request);

        if (this.hashTable.containsKey(ip)) {
            const row = this.hashTable.get(ip);
            row.count++;

            if (row.count >= this.limit) {
                return false;
            }
        } else {
            this.hashTable.set(ip, { count: 0 });
        }

        return true;
    }

    // tslint:disable-next-line:member-access
    clearAddresses() {
        this.hashTable.clear();
    }

    // tslint:disable-next-line:member-access
    turnOff() {
        clearInterval(this.interval);
    }
}
