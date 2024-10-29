// test/library.test.js
import { expect } from 'chai';
import { Library } from '../dist/library.js'; 
import { Book } from '../dist/models.js'; 

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    clear() {
      store = {};
    },
    removeItem(key) {
      delete store[key];
    },
  };
})();

describe('Library', () => {
  let library;

  beforeEach(() => {
    global.localStorage = localStorageMock;
    library = new Library('testBooks');
  });

  afterEach(() => {
    localStorageMock.clear();
  });

  // Ваші тести...
});
