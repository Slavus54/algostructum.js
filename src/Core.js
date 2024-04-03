class Core {
    constructor() {

        if (Core.flag) {
            return Core.context 
        }

        Core.context = this
        Core.flag = true
    }

    bit(num = 42) {
        let result = ''

        while (num > 0) {
            let value = num % 2

            if (value !== 0) {
                num -= value
            }

            result += value
            num /= 2
        }

        result = result.split('').reverse().join('')

        return result
    }

    euclidean(a = 1, b = 2) {
        a = Math.abs(a)
        b = Math.abs(b)

        while (a && b && a !== b) {
            [a, b] = a > b ? [a - b, b] : [a, b - a]
        }
    
        return a || b
    }

    jump(arr = []) {
        let jumps = 0
        let max = 0
        let flag = false

        let i = 0
        let jump = 1
        
        while (i < arr.length && jump !== 0) {
            let index = i + 1
            
            jump = Math.floor(arr[i] / index) 
           
            if (jump === 0) {
                break   
            }

            if (max < jump) {
                max = jump
            }

            i += jump
            jumps++
        }

        flag = i + 1 >= arr.length 

        return {jumps, max, flag}
    }

    accuracy(body = '', arr = [], marker = 'x') {
        let result = 0

        for (let i = 0; i < arr.length; i++) {
            let x = arr[i]
            let y = eval(body.split(marker).join(x))
        
            let piece = y - Math.trunc(y)
            let multiplier = (y / x) - Math.trunc(y / x) 
         
            let value = piece * multiplier

            if (result < value) {
                result = value
            }
        }

        return result
    }

    fib(num = 1) {
        let result = []
        let previous = 0
        let current = 1

        for (let i = 0; i < num; i++) {
            result = [...result, current]
            
            let temp = current

            current += previous
            previous = temp
        }

        return result
    }
        
}

module.exports = Core