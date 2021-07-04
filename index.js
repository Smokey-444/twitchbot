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
        client.action('lemaxxxxxxx', `Hier der discord link @${user.username}, https://discord.gg/yQhVk6dwWn`)
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
   if(parts[0] == '!clear' || parts[0] == 't!purge') {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Du brauchst die Berechtigung, Nachrichten zu löschen!')
        if(!parts[1]) return message.channel.send('Du musst angeben, wieviele Nachrichten du löschen möchtest!')
        if(isNaN(parts[1])) return message.channel.send('Die Angabe, wieviele Nachrichten du löschen möchtest, muss eine Zahl sein!')
        if(parts[1] > 100) return message.channel.send('Du kannst nicht mehr als 100 Nachrichten löschen!')
        if(parts[1] < 2) return message.channel.send('Du kannst nicht weniger als 2 Nachricht löschen')
        message.channel.bulkDelete(parts[1])
        message.channel.send(`Ich habe erfolgreich **${parts[1]}** Nachrichten gelöscht!`).then(m => m.delete({timeout: 3000}))
    }
})

        