import PusherServer from 'pusher';
import PusherClient from 'pusher-js';

export const pusherServer = new PusherServer({
    appId: "1586509",
    key: "6298bc328c7d55ca9e9b",
    secret: "d17546493b77d0abe893",
    cluster: 'eu'
})

export const pusherClient = new PusherClient(
    process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
    {
      cluster: 'eu',
    }
  )