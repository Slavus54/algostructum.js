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

    rainTerraces(arr = []) {
        let amount = 0

        for (let i = 0; i < arr.length; i++) {
            let left = 0

            for (let leftIdx = i - 1; leftIdx >= 0; leftIdx--) {
                left = Math.max(left, arr[leftIdx])
            }

            let right = 0

            for (let rightIdx = i + 1; rightIdx < arr.length; rightIdx++) {
                right = Math.max(right, arr[rightIdx])
            }

            let boundary = Math.min(left, right)

            if (boundary > arr[i]) {
                amount += Math.abs(boundary - arr[i])
            }
        }
    
        return amount
    }
        
    isProgression(arr = []) {
        let flag = true
        let repeat = false
        let schemas = []

        let i = 1
        let j = 0

        while (i < arr.length && flag) {
            let prev = arr[i - 1]
            let current = arr[i]

            let diff = Math.abs(prev - current)
            let schema 
                    
            if (repeat) {
                schema = schemas[j]
            } else {
                schema = `${prev > current ? '-' : '+'}${diff}` 

                let idx = schemas.indexOf(schema)
    
                if (idx === -1) {
                    schemas = [...schemas, schema]
                } else if (idx === 0) {
                    j = idx
                    repeat = true
                }
            } 
   
            flag = eval(prev + schema) === current
            i++

            if (repeat) {
                j = j === schemas.length - 1 ? 0 : j + 1
            }
        }

        return {flag, schemas}
    }

    binarySearch(arr = [], element = null) {
        let start = 0
        let end = arr.length - 1 

        while (start <= end) {
            let middle = Math.floor((start + end) / 2)

            if (arr[middle] === element) {
                return middle
            } else if (arr[middle] < element) {
                start = middle + 1
            } else {
                end = middle - 1
            }
        }

        return -1
    }

    indexSymmetry(arr = []) {
        let result = 0
        let value = 0

        for (let i = 1; i < arr.length - 1; i++) {
            let prev = arr[i - 1]
            let current = i === 1 ? arr[i] : value
            let next = arr[i + 1]

            value = current - prev + next
        }

        result = Math.abs(arr[arr.length - 1] - value)

        return result
    }

    middleLength(text = '', accuracy = 60) {
        const full_length = text.length

        let result = 0
        let sum = 0
        let counter = 0
        let length = Math.floor(accuracy * full_length * 1e-2)
      
        for (let i = 0; i < length; i++) {
            let current = text[i]
        
            if (current === ' ') {
                counter++
            } else {
                sum++
            }
        }

        result = Math.floor(sum / counter)

        return result
    }

    pascalTriangle(lines = 0) {
        let result = [1]
        let max = lines + 1
    
        for (let i = 1; i < max; i++) {
            result[i] = (result[i - 1] * (lines - i + 1)) / i
        }

        return result
    }

    levenshteinDistance(first = '', second = '') {
        let matrix = new Array(second.length + 1).fill(null).map(() => new Array(first.length + 1).fill(null))

        for (let i = 0; i <= first.length; i++) {
            matrix[0][i] = i
        }

        for (let i = 0; i <= second.length; i++) {
            matrix[i][0] = i
        }

        for (let j = 1; j <= second.length; j++) {
            for (let i = 1; i <= first.length; i++) {
                const indicator = Number(first[i - 1] !== second[j - 1])

                matrix[j][i] = Math.min(
                    matrix[j][i - 1] + 1,
                    matrix[j - 1][i] + 1,
                    matrix[j - 1][i - 1] + indicator
                )
            }
        }

        return matrix[second.length][first.length]
    }

    addDivisors(num = 1) {
        let result = []
        let middle = Math.floor(num / 2)
        let step = num % 5 === 0 ? 5 : 1
        let i = 0

        if (num < 1) {
            return num
        }

        while (i <= middle) {
            let value = num % i

            if (value === 0) {
                result = [...result, i]
            }

            i += step
        }

        return result
    }

    rhombus(num = 5) {
        const length = num * 2 - 1
        let nodes = new Array(length).fill(null)

        for (let i = 0; i < num; i++) {
            const index = i + 1

            let node = new Array(index).fill(null).map((_, idx) => index**(idx + 1))
            
            if (index !== num) {
                nodes[length - index] = node
            }

            nodes[i] = node
        }

        return nodes
    }

    qsort(arr = []) {
        if (arr.length > 1) {
            let pivot = arr[Math.floor(Math.random() * arr.length)]
            let less = arr.filter(el => el < pivot)
            let greater = arr.filter(el => el > pivot)

            return [...this.qsort(less), pivot, ...this.qsort(greater)]
        }

        return arr
    }

    recursiveStaircase(num = 1) {
        if (num < 0) {
            return 0
        } else if (num < 3) {
            return num
        }

        return this.recursiveStaircase(num - 1) + this.recursiveStaircase(num - 2)
    }

    growth(num = 1, multiplier = 1) {
        if (multiplier === 1) {
            return num
        }

        num *= multiplier
        multiplier--

        return this.growth(num, multiplier)
    }
    
    insertionSort(arr = []) {
        for (let i = 1; i < arr.length; i++) {
            let current = arr[i]
            let j = i - 1

            while (j >= 0 && arr[j] > current) {
                arr[j + 1] = arr[j]
                j--
            }

            arr[j + 1] = current
        }

        return arr
    }
    
    boxFilling(arr = []) {
        let steps = Math.floor(arr.length / 3)
        let amount = 0

        for (let i = 1; i <= steps; i++) {
            let index = i * 3 - 1
            let prevIdx = (i - 1) * 3 - 1
            let height = Math.min(arr[index], arr[index - 2])
            let base = arr[index - 1]
            let square = base**2 * height

            if (prevIdx > 0) {
                let isPrevTall = arr[index - 2] === height && arr[prevIdx] > height
                
                if (isPrevTall) {
                    square = base**2 * Math.min(arr[index], arr[prevIdx])
                }                                
            } 
            
            amount += square            
        }

        return amount
    }
}   

module.exports = Core