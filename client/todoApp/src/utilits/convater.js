import userInformation from '../constents/userInformation.js';

class Convator {
  static urlConvator(url = '') {
    return url.replace('localhost', userInformation.ipAddress);
  }
}

export default Convator;
