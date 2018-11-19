export default class IpService {
    // tslint:disable-next-line:member-access
    static getIp(request) {
        const ip = request.headers["x-forwarded-for"] ||
            request.connection.remoteAddress ||
            request.socket.remoteAddress ||
            (request.connection.socket ? request.connection.socket.remoteAddress : null);

        return ip;
    }
}
