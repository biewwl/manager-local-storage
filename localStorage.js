function lS(method, listOrKey, value) {
  if (method === 's') {
    if (typeof listOrKey === 'string' || typeof listOrKey === 'number') {
      if (value === undefined) {
        throw new Error('ERROR: You must provide a value!');
      } else {
        localStorage.setItem(listOrKey, JSON.stringify(value));
      }
    } else if (Array.isArray(listOrKey)) {
      throw new Error('ERROR: You must provide an object or a string!');
    } else if (Object.keys(listOrKey).length === 0) {
      throw new Error('ERROR: You must provide at least one key!');
    } else if (Object.keys(listOrKey).length === 1) {
      throw new Error(
        'ERROR: For individual cases you should only pass a string or a number and not an object!'
      );
    } else {
      const entries = Object.entries(listOrKey);
      entries.forEach(([key, value]) => {
        localStorage.setItem(key, JSON.stringify(value));
      });
    }
  }
  if (method === 'g') {
    if (typeof listOrKey === 'string' || typeof listOrKey === 'number') {
      return JSON.parse(localStorage.getItem(listOrKey));
    } else if (!Array.isArray(listOrKey)) {
      throw new Error('ERROR: listOrKey must be an array or string');
    } else if (listOrKey.length === 0) {
      throw new Error('ERROR: You must provide at least one key!');
    } else if (listOrKey.length === 1) {
      throw new Error(
        'ERROR: For individual cases you should only pass a string or a number and not an array!'
      );
    } else {
      let result = {};
      listOrKey.forEach((key) => {
        result[key] = JSON.parse(localStorage.getItem(key));
      });
      return result;
    }
  }
  if (method === 'r') {
    if (typeof listOrKey === 'string' || typeof listOrKey === 'number') {
      localStorage.removeItem(listOrKey);
    } else if (!Array.isArray(listOrKey)) {
      throw new Error('ERROR: listOrKey must be an array or string');
    } else if (listOrKey.length === 0) {
      throw new Error('ERROR: You must provide at least one key!');
    } else if (listOrKey.length === 1) {
      throw new Error(
        'ERROR: For individual cases you should only pass a string or a number and not an array!'
      );
    } else {
      listOrKey.forEach((key) => {
        localStorage.removeItem(key);
      });
    }
  }
  if (method !== 'g' && method !== 's' && method !== 'r')
    throw new Error(
      'ERROR: The chosen method does not match any pattern of this function!'
    );
}

export default lS;
