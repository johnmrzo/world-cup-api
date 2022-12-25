const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const hosts = {
    'qatar' : {
        'champion':'Argentina',
        'runner-up':'France',
        'third-place':'Croatia',
        'host':'Qatar'
    },
    'russia' : {
        'champion':'France',
        'runner-up':'Croatia',
        'third-place':'Belgum',
        'host':'Russia'
    },
    'brazil' : {
        'champion':'Genrmany',
        'runner-up':'Argentina',
        'third-place':'Netherlands',
        'host':'Brazil'
    },
    'southafrica' : {
        'champion':'Spain',
        'runner-up':'Netherlands',
        'third-place':'Germany',
        'host':'South Africa'
    },
    'germany' : {
        'champion':'Italy',
        'runner-up':'France',
        'third-place':'Germany',
        'host':'Germany'
    },
    'southkoreajapan' : {
        'champion':'Brazil',
        'runner-up':'Germany',
        'third-place':'Turkey',
        'host':'South Korea, Japan'
    },
    'unknown' : {
        'champion':'unknown',
        'runner-up':'unknown',
        'third-place':'unknown',
        'host':'unknown'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:host', (request, response) => {
    const host = request.params.host.toLowerCase()
    if (hosts[host]) {
        response.json(hosts[host])
    } else {
        response.json(hosts['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})