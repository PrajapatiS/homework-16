    
/***Nick name with firstname and lastname */


function potential(nname, fname){

    if(nname.length<fname.length){
        if(fname.toLowerCase().match(nname)){
            return true;
        }else 
        {
            return false;
        }
    }
}
//console.log(potential('uke','Luke Segar'));
 test('Basic examples', function (t) { 
    t.deepEqual(potential('mart','Martin Luther'),'mart');
    t.deepEqual(potential('luth','Martin Luther'), 'luth');
    t.deepEqual(potential('uther','Martin Luther'), 'uther');
 
 });   
    
    /* Desending order number like  largest to smallest.
    *
    */
  import test from 'ava';

    function funcs(numbers){
        let nums=[];
    for(let i=0;i<numbers.length;i++){
        nums.push(numbers[i]);
    }
     nums.sort(function(no, desc){
         return desc-no;
        });
     nums.forEach(function(no){
         console.log(no);
        });
        return nums;
    } 

     //let numbers= funcs('759342');

    test('Basic examples', function (t) { 
    t.deepEqual(funcs('258412371'), 876543211);
    t.deepEqual(funcs('12043'), 43210);
    t.deepEqual(funcs('163393'), 963331);
 
    t.deepEqual(funcs(''), 0);
    t.deepEqual(funcs('719042583'), 9876543210);
 });   


 /* Write a function that accepts one parameter: a sequence (string).
  Return the length of the longest continuous string of x's.  **/ 

  let max=0;
   function sequence(words){
       let array=[];
       for(let i=0; i<words.length; i++){
           if(words[i]=== 'x'){
                max++;
           }else{
               if(max > 0)
               {
                   array.push(max);
                   max=0;
               }
           }
       }
       let maxcount=0;
       array.forEach(function(a)
       {
           if(a>maxcount)
           {
               maxcount=a;
           }
       });
       return maxcount; 
     }
     //console.log(sequence('axxtyxxxxxy'));
    test('Basic examples', function (t) { 
    t.deepEqual(sequence('axxtyxxx'), 3);
    t.deepEqual(sequence('xxcvbxxxxasx'), 4);
    t.deepEqual(sequence('xxxxxghxxkl'), 5);
    t.deepEqual(sequence('xxxghkl'), 3);
  
 });   

 /** Write a function that accepts one parameter: a set of funcs (array). 
  * Return the numbers from 1-100 that return true for each of the functions in the array.

 */

function bnumbers(ops) { 
 
    let arrays = [];

    for (let num = 1; num <= 100; num++) {
        let bool = true; 

        for (let j = 0; j < ops.length; j++) {
            let success = ops[j](num);
            
            if (!success) {
                bool = false;
            }
        }

        if (bool) {
            arrays.push(num);
        }
    }

    return arrays;
}
//console.log(bnumbers(90));
test('bnumbers', function (t) {
    let funcs = [
        function big(x) { return x > 80; },
        function odd(x) { return x % 2 === 1; },
    ];

    t.deepEqual(bnumbers(funcs), [81, 83, 85, 87, 89, 91, 93, 95, 97, 99]);
});