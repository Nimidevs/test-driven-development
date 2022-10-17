import { capitalize, reverseString, analyseArray, caesarCipher } from "./functions";

test('capitalise first letter', () => {
    expect(capitalize('laundering')).toBe('Laundering');
})

test('revere strings', () => {
    expect(reverseString('toluwanimi')).toBe('iminawulot');
})

test('analyse array', () => {
    expect(analyseArray([1,2,3,4,5,6])).toEqual({
        average: 3.5,
        min: 1,
        max: 6,
        length: 6
    })
})
test('ceaser cipher', () => {
    expect(caesarCipher('attack at dawn', 5)).toBe('fyyfhp fy ifbs');
})
