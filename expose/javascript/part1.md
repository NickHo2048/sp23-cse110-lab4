1. values added:  20
2. final result:  20
3. values added:  20
4. ReferenceError; this is because the let variable is defined only in the if block, not the function. Thus, when line 13 is run, it does not know what the result variable is because it does not have access to it. 
5. TypeError; this is because the const variable cannot be modified. Thus, in line 7, when they are trying to modify result, we get an error. 
6. ReferenceError; this is because the const variable is defined only in the if block. Thus, when line 13 is run, the code does not know what the result variable is because it does not have access to it. 