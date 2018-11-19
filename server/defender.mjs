import HashTable from "hashtable";
import IpService from "./ip-service.mjs";

export default class Defender {
    constructor() {
        this.rate = 5;
        this.limit = 3;
        this.hashTable = new HashTable();
        this.addresses = [];
        this.timeout = setTimeout(() => this.clearAddresses(), this.rate * 1000);
    }

    // tslint:disable-next-line:member-access
    shouldProcess(request) {
        const ip = IpService.getIp(request);

        if (this.hashTable.has(ip)) {
            const row = this.hashTable.get(ip);
            row.count++;

            if (row.count >= this.limit) {
                return false;
            }
        } else {
            this.hashTable.put(ip, { count: 0 });
            this.addresses.push(ip);
        }

        return true;
    }

    // tslint:disable-next-line:member-access
    clearAddresses() {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.addresses.length; i++) {
            this.hashTable.remove(this.addresses[i]);
        }
        this.addresses = [];
    }

    // tslint:disable-next-line:member-access
    turnOff() {
        clearTimeout(this.timeout);
    }
}
