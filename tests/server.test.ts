function sum (num1: number,num2:number){
    return num1+num2;
}

describe('sum test suite', () => {

    it('given 2 and2 it should return 4', () =>{
        const result = sum(2,2);
        expect(result).toStrictEqual(4)
    })
});