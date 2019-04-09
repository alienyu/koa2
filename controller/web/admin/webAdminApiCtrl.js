const path = require('path')
const fs = require('fs')

async function webAdminApiCtrl(url) {
    let data = await readWebAdminMockData(url);
    return JSON.parse(data)
}

function readWebAdminMockData(filePath) {
    return new Promise((resolve, reject) => {
        let viewUrl = path.join(process.cwd(), `/mockData/web${filePath}.json`)
        fs.readFile(viewUrl, "utf8", (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

module.exports = webAdminApiCtrl;