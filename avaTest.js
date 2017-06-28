   
import test from 'ava';
/***Nick name with firstname and lastname */ 

function potential(nname, fname){
    let bool= false;
    let j =0;
    let count = 0;
    let matchName=[];
    for(let j =0 ; j<=nname.length;j++)
    {
        for(let i=0; i<fname.length; i++){
            if(fname[i] === nname[j]){      
             matchName.push(nname[j]);
            }
        }
    }
    let uniq='';
    let str = matchName.join('');
    for (let x=0; x < str.length; x++){

         if(uniq.indexOf(str.charAt(x))==-1)
            {
                uniq += str[x]; 
                                  
            }
    }
        if(uniq == nname)
        {
             bool=true;
        }else{
            bool=false;
        }
 return bool;
  
}

test('Basic examples', function (t) { 
t.deepEqual(potential('Lusa','Luke segar'),true);
t.deepEqual(potential('Mater','Martin luther'), true);
t.deepEqual(potential('Lz','Luke segar'), false);
     
});

   
    /* Desending order number like  largest to smallest.
    *
    */
 
    function funcs(numbers){
        let nums=[];
    for(let i=0;i<numbers.length;i++){
        nums.push(numbers[i]);
    }
     nums.sort(function(no, desc){
         return desc-no;
        });
    
        return nums.join("");
    } 

     //let numbers= funcs('759342');

    test('Basic examples', function (t) { 
    t.deepEqual(funcs('258412371'), '875432211');
    t.deepEqual(funcs('12043'), '43210');
    t.deepEqual(funcs('163393'), '963331');
 
    t.deepEqual(funcs(''), '');
    t.deepEqual(funcs('719042583'), '987543210');
 });   


 /* Write a function that accepts one parameter: a sequence (string).
  Return the length of the longest continuous string of x's.  **/ 
 
  
   function sequence(words){
       let array=[];
       let max=0;
       let count=0;
       for(let i=0; i<words.length; i++){
           if(words[i]=== 'x'){
                max++;
                count++;
           }else{
               if(max > 0)
               {
                   array.push(max);
                   max=0;
               }
               count++;
           }
           if(count=== words.length && max>0){
               array.push(max);
           }
       }

        let maxcount=0;
       for(let i=0;i<array.length; i++){
           if(array[i]>maxcount)
           {
               maxcount=array[i];
           }
       }
    
       return maxcount; 
     }
     //console.log(sequence('xxxxx'));
    test('Basic examples', function (t) { 
    t.deepEqual(sequence('axxtyxxxy'), 3);
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


/** subway */
let peeps = [5, 8, 4, 9, 1];
let rent = [30, 14, 80, 61, 1];
function subway(peeps, rent){
    let max=0;
    let revenue=[];
    let index=0;
    for(let i=0;i<peeps.length; i++){
        let cal=0;
        cal =peeps[i]* 10;
        revenue.push(cal);
    }
    let profit=[];
    for(let j=0; j<revenue.length; j++){
     let total=0;
     total=revenue[j]- rent[j];
     profit.push(total);
    }  
    for(let a=0; a<profit.length; a++)
    {
       if(profit[a]>max) {
           max=profit[a];
           index=a;
       }
    }
    // console.log(index);
    return index;
   
}
//console.log(subway(peeps,rent));
test('Basic examples', function (t) { 
    t.deepEqual(subway([5, 8, 4, 9, 1],[30, 14, 80, 61, 1]), 1);
    t.deepEqual(subway([6, 8, 5, 7, 2],[10, 50, 80, 61, 10]), 0);
    t.deepEqual(subway([5, 3, 4, 6, 5],[30, 20, 40, 50, 5]), 4);
 }); 