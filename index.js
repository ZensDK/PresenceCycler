const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

const statuses = [
  {
    type: 'WATCHING', // LISTENING, PLAYING, STREAMING, WATCHING
    name: 'zensware',
    details: 'zensware',
    state: null,
    largeImage: 'Image-Address',
    largeText: null,
    smallImage: 'Image-Address',
    smallText: 'Verified Application',
    url: 'https://twitch.tv/zensware',
    buttons: [
      {
        label: 'Zenith Utility',
        url: 'https://discord.gg/stWgVnBgHq'
      },
      {
        label: 'button-2',
        url: 'https://link.link/'
      }
    ]
  },
  {
    type: 'WATCHING', // LISTENING, PLAYING, STREAMING, WATCHING
    name: 'zensware',
    details: 'zensware',
    state: null,
    largeImage: 'Image-Address',
    largeText: null,
    smallImage: 'Image-Address',
    smallText: 'Verified Application',
    url: 'https://twitch.tv/zensware',
    buttons: [
      {
        label: 'Zenith Utility',
        url: 'https://discord.gg/stWgVnBgHq'
      },
      {
        label: 'button-2',
        url: 'https://link.link/'
      }
    ]
  },
  {
    type: 'WATCHING', // LISTENING, PLAYING, STREAMING, WATCHING
    name: 'zensware',
    details: 'zensware',
    state: null,
    largeImage: 'Image-Address',
    largeText: null,
    smallImage: 'Image-Address',
    smallText: 'Verified Application',
    url: 'https://twitch.tv/zensware',
    buttons: [
      {
        label: 'Zenith Utility',
        url: 'https://discord.gg/stWgVnBgHq'
      },
      {
        label: 'button-2',
        url: 'https://link.link/'
      }
    ]
  },
];

let statusIndex = 0;
let startTime = Date.now();

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - cycling statuses!`);

  const updatePresenceAndActivity = () => {
    const currentStatus = statuses[statusIndex];

    const r = new Discord.RichPresence()
      .setApplicationId('Application-ID') // Get your application id @ https://discord.com/developers/applications
      .setType(currentStatus.type)
      .setURL(currentStatus.url)
      .setName(currentStatus.name)
      .setDetails(currentStatus.details)
      .setState(currentStatus.state)
      .setStartTimestamp(startTime)
      .setAssetsLargeImage(currentStatus.largeImage)
      .setAssetsLargeText(currentStatus.largeText)
      .setAssetsSmallImage(currentStatus.smallImage)
      .setAssetsSmallText(currentStatus.smallText);

    for (const button of currentStatus.buttons) {
      r.addButton(button.label, button.url);
    }

    client.user.setActivity(r);

    statusIndex = (statusIndex + 1) % statuses.length;
  };

  updatePresenceAndActivity();
  setInterval(updatePresenceAndActivity, 2500);

  client.user.setPresence({ status: 'online' });
});

client.login(process.env.TOKEN);
