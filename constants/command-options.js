module.exports = [
    { name: 'compare', alias: 'x', type: Boolean , group: 'compare' },
    { name: 'application-control', alias: 'r', type: String, group: 'compare',defaultValue: ''},
    { name: 'applications-to-check', alias: 'c', type: String, defaultValue: [], multiple: true, group: 'compare'},
    { name: 'dump-application-control', alias: 'd', type: String, group: 'compare'},
    { name: 'username', alias: 'u', type: String, group: 'compare', defaultValue: ''},
    { name: 'password', alias: 'p', type: String, group: 'compare', defaultValue: ''},
    { name: 'backendless-url', alias: 'b', type: String, group: 'compare', defaultValue: 'api.backendless.com'},
    { name: 'timeout', alias: 't', type: Number, group: 'compare', defaultValue: 30000},
    { name: 'verbose', alias: 'v', type: Boolean, group: 'compare'},
    { name: 'monitor', alias: 'm', type: Boolean, group: 'compare'}
];
