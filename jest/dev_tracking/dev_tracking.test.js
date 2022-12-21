const dict = {
    'd': {
      status: 'Dev',
      effort: 0.5
    },
    'D': {
      status: 'Dev',
      effort: 1.0
    },
    'q': {
      status: 'QA',
      effort: 0.5
    },
    'Q': {
      status: 'QA',
      effort: 1.0
    }
}

const parse = (c) => dict[c]
const translate = (input) => {
    const items = input.split('')
    return items.reduce((accumulator, current) => {
      const { status, effort } = parse(current)
      accumulator[status] = (accumulator[status] || 0) + effort
      return accumulator
    }, {"Dev": 0, "QA": 0})
}

console.log(translate("d"))

describe("Test the tracking", () => {
    it("translates d to half a dev day", () => {
        expect(translate("d")).toEqual({'Dev': 0.5, 'QA': 0})
    })
    it('translates D to one dev day', () => {
        expect(translate('D')).toEqual({'Dev': 1.0, 'QA': 0})
    })
    it('translates dD to one dev day', () => {
        expect(translate('dD')).toEqual({'Dev': 1.5, 'QA': 0})
    })
    it("translates q to half a qa day", ()=> {
        expect(translate("q")).toEqual({"Dev": 0, "QA": 0.5})
    })
    it("translates q to half a qa day", ()=> {
        expect(translate("qQ")).toEqual({"Dev": 0, "QA": 1.5})
    })
    it("translates q to half a qa day", ()=> {
        expect(translate("dddQ")).toEqual({"Dev": 1.5, "QA": 1})
    })
})
