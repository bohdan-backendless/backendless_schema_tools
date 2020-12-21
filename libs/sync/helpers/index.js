'use strict'

const request = require('axios')

const ask = require('../../../utils/ask')


const bulkUpdateUrl = (baseUrl, appId, apiKey, table, where) =>
    `${baseUrl}/${appId}/${apiKey}/data/bulk/${table}?where=${where}`

const userCache = {}

module.exports = {
    bulkUpdate: async (api, app, table, where, data) => {
        const path = bulkUpdateUrl(api.serverBaseURL, app.id, app.secretKey, table, where)

        return request.put(path, data)
    },

    cleanup: (api, apps) => Promise.all(
        apps.slice(1).map(app => userCache[app.id] && api.deleteRecord(app.id, 'Users', userCache[app.id]))),

    prompt(q) {
        return ask(`${q} (y/n)`).then(answer => answer === 'y')
    }
}