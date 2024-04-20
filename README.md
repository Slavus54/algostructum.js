##  Algostructum.js

### Description

Interesting algorithms & data structures on JavaScript.

Some of them (~ 40%) are my ideas in code. Other have been imported from great repository of Oleksii Trekhleb - 	
https://github.com/trekhleb/javascript-algorithms

Current Version - 1.0.2        
License - NSTU (Novosibirsk State Technical University)  

Author: Slavus54 (Russia)   
https://github.com/Slavus54

### Get Started

1. import {Algostructum} from 'algostructum.js'
2. const instance = new Algostructum()

### Methods

-*bit* (**num** = 42) - convert an integer to binary number.   	

-*euclidean* (**a** = 1, **b** = 2) - find GCD of numbers.         	

-*jump* (**arr** = []) - own realization of greedy Jump Algorithm with other way to calculate distance; Time complexity - *O(n)*          
returns an object {jumps, max, flag}.      	

-*accuracy* (**body** = '', **arr** = [], **marker** = 'x') - gain function with array of arguments and give away        	
maximum of accuracy finded as product of (y / x) and y variable's fraction. Time complexity - *O(n)*          		

-*fib* (**num** = 0) - returns list of Fibonacci numbers.        	

-*rainTerraces* (**arr** = []) - gains an list of non-negative ints representing terraces in an elevation map where the width of each bar is 1, and counts how much water it is able to trap after raining.         

-*isProgression* (**arr** = []) - checks if array of integers is progression and find math formulas (there are elements according them). Time complexity - *O(log n)*                   

-*binarySearch* (**arr** = [], **element** = null) - finds element of list and returns it in Divide and Conquer paradigm.         

-*indexSymmetry* (**arr** = []) - gains and checking numbers of array by addition next and subtraction prev elements from current. Time complexity - *O(n)*       

-*middleLength* (**text** = '', **accuracy** = 60) - returns length of text's middle word. Time complexity - *O(n)*       

-*pascalTriangle* (**lines** = 0) - allows to build Pascal's Triangle by maximum line.    

-*levenshteinDistance* (**first** = '', **second** = '') - compares strings and returns number of minimum symbol operations to make them equal.   

-*addDivisors* (**num** = 1) - find all divisors of positive integer value and returns list of them. Time complexity - *O(n)*             