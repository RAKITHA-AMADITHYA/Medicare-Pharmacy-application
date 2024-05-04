const TTL_HOURS = 24; //time to live(expiry date)
const SECONDS_PER_HOUR = 3600;
const MILISECONDS_PER_SECONDS = 1000;
const EXPIRESIN = SECONDS_PER_HOUR * MILISECONDS_PER_SECONDS * TTL_HOURS; //expire time in miliseconds

const getExpiry = () => {
  const today = new Date();
  const expiry = new Date(today.getTime() + EXPIRESIN);
  return expiry;
};

const isExpired = (expiryDate) => {
  const expDate = new Date(expiryDate);
  const today = new Date();

  if (today > expDate) {
    return true;
  } else {
    return false;
  }
};

export { getExpiry, isExpired };
