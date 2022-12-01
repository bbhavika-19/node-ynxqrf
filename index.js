const names = [ 'google', 'amazon', 'facebook' ]
for (var input = 1; input <= 100; input++) {
  if (input%3==0 & input%5==0) {
    console.log(`${names[1]}`)
  }
  else if(input%3==0)
  {
    console.log(`${names[0]}`)
  }
  else if(input%5==0)
  {
    console.log(`${names[2]}`)
  }
  else
  {
    console.log(input);
  }
 }

