const tmi = require('tmi.js')

const options = {
    options: {
        debug: true
    },
    connection: {
        cluster: 'aws',
        reconnect: true,
    },
    identity: {
        username: 'lemaxxxxxxxbot',
        password: 'oauth:jsjuxjbqfa4xqhyi3d89g5beatetw6'
    },
    channels: ['lemaxxxxxxx']
}

const client = new tmi.client(options);

client.connect();

client.on('connected', (address, port) => {
    console.log('Verbindungsaufbau Erfolgreich')
})

client.on('chat', (channel, user, message, self) => {
    if(message === '!help' || message === '!Help' || message === '!hilfe' || message === '!Hilfe') {
        client.action('lemaxxxxxxx', 'Hi')
    }
    if(message === '!hi' || message === '!hey' || message === 'hi' || message === 'hey') {
        client.action('lemaxxxxxxx', `Heyy, @${user.username}`)
    }
    if(message === '!dc' || message === '!Dc' || message === 'dc' || message === 'dc') {
        client.action('lemaxxxxxxx', `Hier der discord limk, https://discord.gg/yQhVk6dwWn}`)
    }
    // Kannst auch noch andere Befehle hinzufügen :D
})

client.on('subscription', (channel, username, method, message, userstate) => {
    console.log('subscription', { channel, username, method, message, userstate })
    client.say('lemaxxxxxxx', `Danke @${username}, dass du gerade gesubbt hast!`)
})

client.on('resub', (channel, username, _months, message, userstate, methods) => {
    console.log('resub', { channel, username, _months, message, userstate, methods })
    let streakmonths = userstate['msg-param-streak-months'];
    let cumulativeMonths = userstate['msg-param-cumulative-months']
    let sharedStreak = userstate['msg-param-should-share-streak']
    if(sharedStreak) {
        client.say('lemaxxxxxxx', `Danke, dass du durchgängig für ${streakmonths} konstante Monate gesubbt hast! @${username}`)
    } else {
        client.say('lemaxxxxxxx', `Danke dass du resubst, warst jz insgesamt ${cumulativeMonths} Monate Sub :D @${username}`)
    }
})