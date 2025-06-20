// Global test setup
global.console = {
  ...console
  // Uncomment to silence console during tests
  // log: jest.fn(),
  // debug: jest.fn(),
  // info: jest.fn(),
  // warn: jest.fn(),
  // error: jest.fn(),
}

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn()
}
global.localStorage = localStorageMock

// Mock Notification API
global.Notification = jest.fn().mockImplementation((title, options) => {
  return {
    title,
    options,
    close: jest.fn()
  }
})
global.Notification.requestPermission = jest.fn(() =>
  Promise.resolve('granted')
)
global.Notification.permission = 'granted'

// Mock PWA APIs
global.navigator.serviceWorker = {
  register: jest.fn(() => Promise.resolve({})),
  ready: Promise.resolve({})
}

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
})
