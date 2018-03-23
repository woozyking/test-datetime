const { DateTime } = require('luxon')
const moment = require('moment-timezone')
const zone = 'America/Toronto'
const TIMESTAMPS = ["2018-03-23 21:21:24.099","2018-03-23 21:21:24.117","2018-03-23 21:21:24.118","2018-03-23 21:21:24.118","2018-03-23 21:21:24.118","2018-03-23 21:21:24.118","2018-03-23 21:21:24.118","2018-03-23 21:21:24.118","2018-03-23 21:21:24.118","2018-03-23 21:21:24.118","2018-03-23 21:21:24.118","2018-03-23 21:21:24.118","2018-03-23 21:21:24.119","2018-03-23 21:21:24.119","2018-03-23 21:21:24.119","2018-03-23 21:21:24.120","2018-03-23 21:21:24.120","2018-03-23 21:21:24.121","2018-03-23 21:21:24.121","2018-03-23 21:21:24.123","2018-03-23 21:21:24.127","2018-03-23 21:21:24.129","2018-03-23 21:21:24.129","2018-03-23 21:21:24.129","2018-03-23 21:21:24.129","2018-03-23 21:21:24.130","2018-03-23 21:21:24.130","2018-03-23 21:21:24.130","2018-03-23 21:21:24.130","2018-03-23 21:21:24.130","2018-03-23 21:21:24.130","2018-03-23 21:21:24.132","2018-03-23 21:21:24.132","2018-03-23 21:21:24.132","2018-03-23 21:21:24.132","2018-03-23 21:21:24.132","2018-03-23 21:21:24.132","2018-03-23 21:21:24.132","2018-03-23 21:21:24.132","2018-03-23 21:21:24.133","2018-03-23 21:21:24.133","2018-03-23 21:21:24.133","2018-03-23 21:21:24.133","2018-03-23 21:21:24.133","2018-03-23 21:21:24.133","2018-03-23 21:21:24.133","2018-03-23 21:21:24.133","2018-03-23 21:21:24.133","2018-03-23 21:21:24.133","2018-03-23 21:21:24.133","2018-03-23 21:21:24.133","2018-03-23 21:21:24.133","2018-03-23 21:21:24.133","2018-03-23 21:21:24.134","2018-03-23 21:21:24.134","2018-03-23 21:21:24.134","2018-03-23 21:21:24.134","2018-03-23 21:21:24.135","2018-03-23 21:21:24.135","2018-03-23 21:21:24.135","2018-03-23 21:21:24.135","2018-03-23 21:21:24.141","2018-03-23 21:21:24.141","2018-03-23 21:21:24.141","2018-03-23 21:21:24.141","2018-03-23 21:21:24.141","2018-03-23 21:21:24.142","2018-03-23 21:21:24.143","2018-03-23 21:21:24.143","2018-03-23 21:21:24.144","2018-03-23 21:21:24.144","2018-03-23 21:21:24.144","2018-03-23 21:21:24.144","2018-03-23 21:21:24.144","2018-03-23 21:21:24.144","2018-03-23 21:21:24.144","2018-03-23 21:21:24.144","2018-03-23 21:21:24.144","2018-03-23 21:21:24.144","2018-03-23 21:21:24.144","2018-03-23 21:21:24.144","2018-03-23 21:21:24.144","2018-03-23 21:21:24.144","2018-03-23 21:21:24.145","2018-03-23 21:21:24.145","2018-03-23 21:21:24.145","2018-03-23 21:21:24.145","2018-03-23 21:21:24.145","2018-03-23 21:21:24.145","2018-03-23 21:21:24.145","2018-03-23 21:21:24.145","2018-03-23 21:21:24.145","2018-03-23 21:21:24.145","2018-03-23 21:21:24.145","2018-03-23 21:21:24.145","2018-03-23 21:21:24.145","2018-03-23 21:21:24.145","2018-03-23 21:21:24.145","2018-03-23 21:21:24.145","2018-03-23 21:21:24.145","2018-03-23 21:21:24.145","2018-03-23 21:21:24.145","2018-03-23 21:21:24.145","2018-03-23 21:21:24.145","2018-03-23 21:21:24.145","2018-03-23 21:21:24.146","2018-03-23 21:21:24.147","2018-03-23 21:21:24.147","2018-03-23 21:21:24.147","2018-03-23 21:21:24.147","2018-03-23 21:21:24.147","2018-03-23 21:21:24.147","2018-03-23 21:21:24.147","2018-03-23 21:21:24.147","2018-03-23 21:21:24.147","2018-03-23 21:21:24.147","2018-03-23 21:21:24.147","2018-03-23 21:21:24.147","2018-03-23 21:21:24.147","2018-03-23 21:21:24.147","2018-03-23 21:21:24.147","2018-03-23 21:21:24.147","2018-03-23 21:21:24.147","2018-03-23 21:21:24.147","2018-03-23 21:21:24.147","2018-03-23 21:21:24.147","2018-03-23 21:21:24.147","2018-03-23 21:21:24.148","2018-03-23 21:21:24.148","2018-03-23 21:21:24.148","2018-03-23 21:21:24.148","2018-03-23 21:21:24.149","2018-03-23 21:21:24.153","2018-03-23 21:21:24.153","2018-03-23 21:21:24.153","2018-03-23 21:21:24.153","2018-03-23 21:21:24.154","2018-03-23 21:21:24.154","2018-03-23 21:21:24.154","2018-03-23 21:21:24.154","2018-03-23 21:21:24.154","2018-03-23 21:21:24.154","2018-03-23 21:21:24.154","2018-03-23 21:21:24.154","2018-03-23 21:21:24.154","2018-03-23 21:21:24.154","2018-03-23 21:21:24.154","2018-03-23 21:21:24.154","2018-03-23 21:21:24.154","2018-03-23 21:21:24.154","2018-03-23 21:21:24.154","2018-03-23 21:21:24.154","2018-03-23 21:21:24.154","2018-03-23 21:21:24.154","2018-03-23 21:21:24.155","2018-03-23 21:21:24.155","2018-03-23 21:21:24.155","2018-03-23 21:21:24.155","2018-03-23 21:21:24.155","2018-03-23 21:21:24.155","2018-03-23 21:21:24.155","2018-03-23 21:21:24.155","2018-03-23 21:21:24.155","2018-03-23 21:21:24.155","2018-03-23 21:21:24.155","2018-03-23 21:21:24.155","2018-03-23 21:21:24.155","2018-03-23 21:21:24.155","2018-03-23 21:21:24.155","2018-03-23 21:21:24.155","2018-03-23 21:21:24.155","2018-03-23 21:21:24.155","2018-03-23 21:21:24.155","2018-03-23 21:21:24.155","2018-03-23 21:21:24.156","2018-03-23 21:21:24.156","2018-03-23 21:21:24.156","2018-03-23 21:21:24.156","2018-03-23 21:21:24.156","2018-03-23 21:21:24.156","2018-03-23 21:21:24.156","2018-03-23 21:21:24.156","2018-03-23 21:21:24.156","2018-03-23 21:21:24.156","2018-03-23 21:21:24.156","2018-03-23 21:21:24.156","2018-03-23 21:21:24.156","2018-03-23 21:21:24.156","2018-03-23 21:21:24.156","2018-03-23 21:21:24.156","2018-03-23 21:21:24.156","2018-03-23 21:21:24.156","2018-03-23 21:21:24.156","2018-03-23 21:21:24.156","2018-03-23 21:21:24.156","2018-03-23 21:21:24.156","2018-03-23 21:21:24.156","2018-03-23 21:21:24.157","2018-03-23 21:21:24.157","2018-03-23 21:21:24.157","2018-03-23 21:21:24.157","2018-03-23 21:21:24.157","2018-03-23 21:21:24.157","2018-03-23 21:21:24.157","2018-03-23 21:21:24.157","2018-03-23 21:21:24.157","2018-03-23 21:21:24.157","2018-03-23 21:21:24.157","2018-03-23 21:21:24.157","2018-03-23 21:21:24.157","2018-03-23 21:21:24.158","2018-03-23 21:21:24.158","2018-03-23 21:21:24.158","2018-03-23 21:21:24.158","2018-03-23 21:21:24.158","2018-03-23 21:21:24.158","2018-03-23 21:21:24.158","2018-03-23 21:21:24.158","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.160","2018-03-23 21:21:24.161","2018-03-23 21:21:24.161","2018-03-23 21:21:24.161","2018-03-23 21:21:24.161","2018-03-23 21:21:24.161","2018-03-23 21:21:24.161","2018-03-23 21:21:24.161","2018-03-23 21:21:24.161","2018-03-23 21:21:24.161","2018-03-23 21:21:24.162","2018-03-23 21:21:24.162","2018-03-23 21:21:24.162","2018-03-23 21:21:24.162","2018-03-23 21:21:24.162","2018-03-23 21:21:24.162","2018-03-23 21:21:24.162","2018-03-23 21:21:24.162","2018-03-23 21:21:24.162","2018-03-23 21:21:24.162","2018-03-23 21:21:24.162","2018-03-23 21:21:24.162","2018-03-23 21:21:24.162","2018-03-23 21:21:24.162","2018-03-23 21:21:24.162","2018-03-23 21:21:24.162","2018-03-23 21:21:24.162","2018-03-23 21:21:24.162","2018-03-23 21:21:24.162","2018-03-23 21:21:24.162","2018-03-23 21:21:24.162","2018-03-23 21:21:24.162","2018-03-23 21:21:24.162","2018-03-23 21:21:24.162","2018-03-23 21:21:24.162","2018-03-23 21:21:24.162","2018-03-23 21:21:24.162","2018-03-23 21:21:24.162","2018-03-23 21:21:24.162","2018-03-23 21:21:24.163","2018-03-23 21:21:24.163","2018-03-23 21:21:24.163","2018-03-23 21:21:24.163","2018-03-23 21:21:24.163","2018-03-23 21:21:24.163","2018-03-23 21:21:24.163","2018-03-23 21:21:24.163","2018-03-23 21:21:24.163","2018-03-23 21:21:24.163","2018-03-23 21:21:24.163","2018-03-23 21:21:24.163","2018-03-23 21:21:24.163","2018-03-23 21:21:24.163","2018-03-23 21:21:24.163","2018-03-23 21:21:24.163","2018-03-23 21:21:24.163","2018-03-23 21:21:24.163","2018-03-23 21:21:24.163","2018-03-23 21:21:24.163","2018-03-23 21:21:24.163","2018-03-23 21:21:24.163","2018-03-23 21:21:24.163","2018-03-23 21:21:24.163","2018-03-23 21:21:24.163","2018-03-23 21:21:24.163","2018-03-23 21:21:24.163","2018-03-23 21:21:24.163","2018-03-23 21:21:24.163","2018-03-23 21:21:24.163","2018-03-23 21:21:24.163","2018-03-23 21:21:24.163","2018-03-23 21:21:24.163","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.164","2018-03-23 21:21:24.165","2018-03-23 21:21:24.165","2018-03-23 21:21:24.165","2018-03-23 21:21:24.165","2018-03-23 21:21:24.165","2018-03-23 21:21:24.165","2018-03-23 21:21:24.165","2018-03-23 21:21:24.166","2018-03-23 21:21:24.166","2018-03-23 21:21:24.166","2018-03-23 21:21:24.166","2018-03-23 21:21:24.166","2018-03-23 21:21:24.166","2018-03-23 21:21:24.166","2018-03-23 21:21:24.166","2018-03-23 21:21:24.166","2018-03-23 21:21:24.166","2018-03-23 21:21:24.166","2018-03-23 21:21:24.166","2018-03-23 21:21:24.166","2018-03-23 21:21:24.166","2018-03-23 21:21:24.166","2018-03-23 21:21:24.167","2018-03-23 21:21:24.167","2018-03-23 21:21:24.167","2018-03-23 21:21:24.167","2018-03-23 21:21:24.167","2018-03-23 21:21:24.167","2018-03-23 21:21:24.167","2018-03-23 21:21:24.167","2018-03-23 21:21:24.167","2018-03-23 21:21:24.167","2018-03-23 21:21:24.167","2018-03-23 21:21:24.167","2018-03-23 21:21:24.167","2018-03-23 21:21:24.167","2018-03-23 21:21:24.167","2018-03-23 21:21:24.167","2018-03-23 21:21:24.167","2018-03-23 21:21:24.167","2018-03-23 21:21:24.167","2018-03-23 21:21:24.167","2018-03-23 21:21:24.167","2018-03-23 21:21:24.167","2018-03-23 21:21:24.167","2018-03-23 21:21:24.168","2018-03-23 21:21:24.168","2018-03-23 21:21:24.168","2018-03-23 21:21:24.168","2018-03-23 21:21:24.168","2018-03-23 21:21:24.168","2018-03-23 21:21:24.168","2018-03-23 21:21:24.168","2018-03-23 21:21:24.168","2018-03-23 21:21:24.168","2018-03-23 21:21:24.168","2018-03-23 21:21:24.168","2018-03-23 21:21:24.168","2018-03-23 21:21:24.168","2018-03-23 21:21:24.168","2018-03-23 21:21:24.168","2018-03-23 21:21:24.168","2018-03-23 21:21:24.168","2018-03-23 21:21:24.168","2018-03-23 21:21:24.168","2018-03-23 21:21:24.168","2018-03-23 21:21:24.168","2018-03-23 21:21:24.168","2018-03-23 21:21:24.168","2018-03-23 21:21:24.168","2018-03-23 21:21:24.168","2018-03-23 21:21:24.168","2018-03-23 21:21:24.168","2018-03-23 21:21:24.169","2018-03-23 21:21:24.169","2018-03-23 21:21:24.169","2018-03-23 21:21:24.169","2018-03-23 21:21:24.169","2018-03-23 21:21:24.169","2018-03-23 21:21:24.169","2018-03-23 21:21:24.169","2018-03-23 21:21:24.169","2018-03-23 21:21:24.169","2018-03-23 21:21:24.169","2018-03-23 21:21:24.169","2018-03-23 21:21:24.169","2018-03-23 21:21:24.169","2018-03-23 21:21:24.169","2018-03-23 21:21:24.169","2018-03-23 21:21:24.169","2018-03-23 21:21:24.169","2018-03-23 21:21:24.169","2018-03-23 21:21:24.169","2018-03-23 21:21:24.169","2018-03-23 21:21:24.169","2018-03-23 21:21:24.169","2018-03-23 21:21:24.170","2018-03-23 21:21:24.170","2018-03-23 21:21:24.170","2018-03-23 21:21:24.170","2018-03-23 21:21:24.170","2018-03-23 21:21:24.170","2018-03-23 21:21:24.170","2018-03-23 21:21:24.170","2018-03-23 21:21:24.170","2018-03-23 21:21:24.170","2018-03-23 21:21:24.170","2018-03-23 21:21:24.170","2018-03-23 21:21:24.170","2018-03-23 21:21:24.170","2018-03-23 21:21:24.170","2018-03-23 21:21:24.170","2018-03-23 21:21:24.170","2018-03-23 21:21:24.170","2018-03-23 21:21:24.170","2018-03-23 21:21:24.170","2018-03-23 21:21:24.170","2018-03-23 21:21:24.170","2018-03-23 21:21:24.170","2018-03-23 21:21:24.170","2018-03-23 21:21:24.170","2018-03-23 21:21:24.170","2018-03-23 21:21:24.170","2018-03-23 21:21:24.170","2018-03-23 21:21:24.171","2018-03-23 21:21:24.171","2018-03-23 21:21:24.171","2018-03-23 21:21:24.171","2018-03-23 21:21:24.171","2018-03-23 21:21:24.171","2018-03-23 21:21:24.171","2018-03-23 21:21:24.171","2018-03-23 21:21:24.171","2018-03-23 21:21:24.171","2018-03-23 21:21:24.171","2018-03-23 21:21:24.171","2018-03-23 21:21:24.171","2018-03-23 21:21:24.171","2018-03-23 21:21:24.171","2018-03-23 21:21:24.171","2018-03-23 21:21:24.171","2018-03-23 21:21:24.171","2018-03-23 21:21:24.171","2018-03-23 21:21:24.171","2018-03-23 21:21:24.171","2018-03-23 21:21:24.171","2018-03-23 21:21:24.171","2018-03-23 21:21:24.171","2018-03-23 21:21:24.171","2018-03-23 21:21:24.171","2018-03-23 21:21:24.171","2018-03-23 21:21:24.171","2018-03-23 21:21:24.171","2018-03-23 21:21:24.171","2018-03-23 21:21:24.171","2018-03-23 21:21:24.171","2018-03-23 21:21:24.171","2018-03-23 21:21:24.171","2018-03-23 21:21:24.171","2018-03-23 21:21:24.171","2018-03-23 21:21:24.171","2018-03-23 21:21:24.171","2018-03-23 21:21:24.171","2018-03-23 21:21:24.172","2018-03-23 21:21:24.172","2018-03-23 21:21:24.172","2018-03-23 21:21:24.172","2018-03-23 21:21:24.172","2018-03-23 21:21:24.172","2018-03-23 21:21:24.172","2018-03-23 21:21:24.172","2018-03-23 21:21:24.172","2018-03-23 21:21:24.172","2018-03-23 21:21:24.172","2018-03-23 21:21:24.172","2018-03-23 21:21:24.172","2018-03-23 21:21:24.172","2018-03-23 21:21:24.172","2018-03-23 21:21:24.172","2018-03-23 21:21:24.172","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.173","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.174","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.175","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.176","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.177","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.178","2018-03-23 21:21:24.179","2018-03-23 21:21:24.179","2018-03-23 21:21:24.179","2018-03-23 21:21:24.179","2018-03-23 21:21:24.179","2018-03-23 21:21:24.179","2018-03-23 21:21:24.179","2018-03-23 21:21:24.179","2018-03-23 21:21:24.179","2018-03-23 21:21:24.179","2018-03-23 21:21:24.179","2018-03-23 21:21:24.179","2018-03-23 21:21:24.179","2018-03-23 21:21:24.179","2018-03-23 21:21:24.179","2018-03-23 21:21:24.179","2018-03-23 21:21:24.179","2018-03-23 21:21:24.179","2018-03-23 21:21:24.179","2018-03-23 21:21:24.179","2018-03-23 21:21:24.179","2018-03-23 21:21:24.179","2018-03-23 21:21:24.179","2018-03-23 21:21:24.179","2018-03-23 21:21:24.179","2018-03-23 21:21:24.179","2018-03-23 21:21:24.179","2018-03-23 21:21:24.179","2018-03-23 21:21:24.179","2018-03-23 21:21:24.179","2018-03-23 21:21:24.179","2018-03-23 21:21:24.179","2018-03-23 21:21:24.179","2018-03-23 21:21:24.179","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.180","2018-03-23 21:21:24.181","2018-03-23 21:21:24.181","2018-03-23 21:21:24.181","2018-03-23 21:21:24.181","2018-03-23 21:21:24.181","2018-03-23 21:21:24.181","2018-03-23 21:21:24.181","2018-03-23 21:21:24.181","2018-03-23 21:21:24.181","2018-03-23 21:21:24.181","2018-03-23 21:21:24.181","2018-03-23 21:21:24.181","2018-03-23 21:21:24.181"]


const luxon = module.exports.luxon = (event, context, callback) => {
  const format = 'yyyy-MM-dd HH:mm:ss.SSS'
  console.time('LuxonParse')
  for (const r of TIMESTAMPS) {
    DateTime.fromString(r, format, { zone }).toUTC()
  }
  console.timeEnd('LuxonParse')
  if (callback) {
    return callback(null)
  }
}


const momenttz = module.exports.momenttz = (event, context, callback) => {
  const format = 'YYYY-MM-DD HH:mm:ss.SSS'
  console.time('MomentParse')
  for (const r of TIMESTAMPS) {
    moment.tz(r, format, zone).utc()
  }
  console.timeEnd('MomentParse')
  if (callback) {
    return callback(null)
  }
}


if (require.main === module) {
  luxon()
  momenttz()
}