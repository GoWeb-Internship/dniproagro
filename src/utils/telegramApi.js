import axios from 'axios';

const TOKEN = process.env.GATSBY_TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.GATSBY_TELEGRAM_CHAT_ID;
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

export async function sendMessage(text) {
  try {
    const data = await axios.post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text,
    });
    return data;
  } catch (error) {
    console.error('Smth wrong with sendMessage in api', error);
  }
}
