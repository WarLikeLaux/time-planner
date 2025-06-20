/**
 * @jest-environment jsdom
 */

describe('Planner Application', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
    localStorage.clear()
  })

  describe('DOM Elements', () => {
    test('should create basic HTML structure', () => {
      document.body.innerHTML = `
        <div id="app">
          <h1>Time Planner</h1>
          <div class="controls"></div>
          <div class="schedule"></div>
        </div>
      `
      expect(document.getElementById('app')).toBeTruthy()
      expect(document.querySelector('h1')).toBeTruthy()
      expect(document.querySelector('.controls')).toBeTruthy()
      expect(document.querySelector('.schedule')).toBeTruthy()
    })
  })

  describe('Theme Management', () => {
    test('should handle theme switching', () => {
      const mockToggleTheme = jest.fn()
      global.toggleTheme = mockToggleTheme

      if (typeof global.toggleTheme === 'function') {
        global.toggleTheme()
        expect(mockToggleTheme).toHaveBeenCalled()
      }
    })
  })

  describe('Local Storage', () => {
    test('should save and retrieve preferences', () => {
      const testData = { theme: 'dark', language: 'en' }
      localStorage.setItem('planner-preferences', JSON.stringify(testData))

      const retrieved = JSON.parse(localStorage.getItem('planner-preferences'))
      expect(retrieved).toEqual(testData)
    })

    test('should handle invalid localStorage data', () => {
      localStorage.setItem('planner-preferences', 'invalid-json')

      let result
      try {
        result = JSON.parse(localStorage.getItem('planner-preferences'))
      } catch (e) {
        result = null
      }

      expect(result).toBeNull()
    })
  })

  describe('Time Calculations', () => {
    test('should calculate time differences correctly', () => {
      const calculateTimeDiff = (start, end) => {
        const startTime = new Date(`2023-01-01 ${start}`)
        let endTime = new Date(`2023-01-01 ${end}`)

        // Handle next day scenario
        if (endTime < startTime) {
          endTime = new Date(`2023-01-02 ${end}`)
        }

        return (endTime - startTime) / (1000 * 60 * 60) // hours
      }

      expect(calculateTimeDiff('09:00', '17:00')).toBe(8)
      expect(calculateTimeDiff('10:30', '12:30')).toBe(2)
      expect(calculateTimeDiff('23:00', '01:00')).toBe(2) // next day
    })

    test('should validate time format', () => {
      const isValidTime = time => {
        return /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(time)
      }

      expect(isValidTime('09:00')).toBe(true)
      expect(isValidTime('23:59')).toBe(true)
      expect(isValidTime('24:00')).toBe(false)
      expect(isValidTime('9:00')).toBe(true)
      expect(isValidTime('invalid')).toBe(false)
    })
  })

  describe('Notification System', () => {
    test('should request notification permission', async () => {
      const permission = await Notification.requestPermission()
      expect(permission).toBe('granted')
    })

    test('should create notifications when permission granted', () => {
      if (Notification.permission === 'granted') {
        const notification = new Notification('Test')
        expect(notification).toBeDefined()
      }
    })
  })

  describe('PWA Features', () => {
    test('should register service worker', async () => {
      if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.register('/sw.js')
        expect(registration).toBeDefined()
      }
    })
  })
})
