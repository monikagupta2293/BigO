const nemo = ['nemo'];

function findnemo(array)
{
  for(let i =0; i< array.length; i++)
  {
    if('nemo'== array[i])
    {
      console.log("Found nemo!");
    }
  }
}

findnemo(nemo);