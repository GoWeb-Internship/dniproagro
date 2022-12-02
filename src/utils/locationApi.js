import axios from 'axios';

export const locationApi = async () => {
  let location;
  try {
    const data = await axios('https://api.db-ip.com/v2/free/self');
    location = data.data.countryCode;
    if (location) {
      return location.toLowerCase();
    }
  } catch (error) {
    if (error) {
      return (location = 'ua');
    }
  }
};
