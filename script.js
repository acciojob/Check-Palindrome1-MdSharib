// complete the given function

function palindrome(str){
  let cropStr = "";
  for(let i=0; i<str.length; i++){
	  if(str[i] === ' '){
		  continue;
	  }
	 cropStr += str[i];
  }
  let j= cropStr.length-1;
  let i = 0;
  while(i<j){
    if(cropStr[i] !== cropStr[j]){
      return false;
    }
    j--;
    i++;
  }
	return true;
	
}
module.exports = palindrome
