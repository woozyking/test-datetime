const { DateTime, IANAZone } = require('luxon')
const moment = require('moment-timezone')

const TIMESTAMPS = require('./ts')
const ZONE = 'America/Toronto'


const benchLuxon = async () => {
  const format = 'yyyy-MM-dd HH:mm:ss.SSS'
  console.time('luxon')
  for (const r of TIMESTAMPS) {
    DateTime.fromString(r, format, { zone: ZONE }).toUTC()
  }
  console.timeEnd('luxon')
}

const benchLuxonZoneCached = async () => {
  const format = 'yyyy-MM-dd HH:mm:ss.SSS'
  const zone = new IANAZone(ZONE)
  console.time('luxon zone cached')
  for (const r of TIMESTAMPS) {
    DateTime.fromString(r, format, { zone }).toUTC()
  }
  console.timeEnd('luxon zone cached')
}

const benchMomentTZ = async () => {
  const format = 'YYYY-MM-DD HH:mm:ss.SSS'
  console.time('moment-timezone')
  for (const r of TIMESTAMPS) {
    moment.tz(r, format, ZONE).utc()
  }
  console.timeEnd('moment-timezone')
}

module.exports.luxon = (event, context, callback) => {
  benchLuxon().then(callback).catch(callback)
}

module.exports.luxonCacheIANA = (event, context, callback) => {
  benchLuxonZoneCached().then(callback).catch(callback)
}

module.exports.momenttz = (event, context, callback) => {
  benchMomentTZ().then(callback).catch(callback)
}


if (require.main === module) {
  console.log(`Test sample size: ${TIMESTAMPS.length} timezone-less timestamps`)
  benchLuxon()
  benchLuxonZoneCached()
  benchMomentTZ()
}
