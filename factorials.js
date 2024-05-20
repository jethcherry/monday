//Write a recursive function in JavaScript that calculates the factorial of a given non-negative integer n.
 
function calculateFactorial(n)
{
    if(n==1 || n==0)
        {
            return 1
        }
    
    else
    return n*calculateFactorial(n-1)

}

console.log(calculateFactorial(4))