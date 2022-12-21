import { add } from "./calc";

describe("calculator", () => {
    it("adds 2 numbers", () => {
        expect(add(1, 2)).toEqual(3)
    })
})

describe("matcher", () => {
    it('match numbers with format xxx-xxxx-xxxx', () => {
        expect('185-3345-3343').toMatch(/^\d{3}-\d{4}-\d{4}$/)
        expect('1853-3345-3343').not.toMatch(/^\d{3}-\d{4}-\d{4}$/)
  })
})

// array testing

const users = ["fujita", "bobatelo", "alumioso"]

describe("Array", ()=> { 
    it("object in array", () => {
        expect(users).toContainEqual("fujita")
        expect(users).toContain(users[0])
    })
})

describe("Object Check", ()=> {
    it('object in array', () => {
        const users = [
          { name: 'Juntao' },
          { name: 'Alex' }
        ]
        expect(users).toContainEqual({ name: 'Juntao' }) // PASS
        //expect(users).toContain({ name: 'Juntao' }) // FAIL
      })
})

describe("Attribute check", () => {
    it('match object', () => {
        const user = {
          name: 'Juntao',
          address: 'Xian, Shaanxi, China'
        }
        expect(user.name).toBeDefined()
        expect(user.age).not.toBeDefined()
      })
})

// Custom Checkers with jest expect helper methods
const toCheck = "nnie"
describe(` does string contains ${toCheck}`, ()=> {
    it('string contains', () => {  
        const givenName = expect.stringContaining(toCheck)  
        expect('Johnnie Fujita').toEqual(givenName)})
})


describe('array', () => {
    const users = ['Juntao', 'Abruzzi', 'Alex']
    it('array containing', () => {
      const userSet = expect.arrayContaining(['Juntao', 'Abruzzi'])
      expect(users).toEqual(userSet)
    })
  })