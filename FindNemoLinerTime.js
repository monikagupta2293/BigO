const nemo = ['nemo'];
const large = new Array(1000).fill('nemo');

function findnemo(array)
{
  let t0 = process.uptime();
  for(let i =0; i< array.length; i++)
  {
    if('nemo'== array[i])
    {
      console.log("Found nemo!");
    }
  }
  let t1 = process.uptime();
  console.log(" time taken "+ (t1-t0) + " milliseconds")
}

findnemo(large); //o(n)