
 var pathLocation = location.pathname;

 var hostName = location.host;

 var pathSlice = pathLocation.split();

 var removeFirstBackslash = pathLocation.replace(pathLocation.charAt(0),'');

 var pathLength = pathLocation.length;
 
var removeLastbackslash = removeFirstBackslash.slice(0,pathLength-2); // to remove last backslash from path

var pathArray = removeLastbackslash.split('/');  //here our path converted to an array with removed backslashes ant first and end

var pathArrayLength = pathArray.length;



 
document.write('<ul class="breadcrumb">' + '<li><a href="' +  '/'  + '">' + 'Home'  +'</a></li>');

for (x = 0; x < pathArrayLength-1; x++) {   // i made -1 beacuse we dotn want the last folder name to show ith back slash 

	document.write( '<span>/</span> ' + '<li><a href="' + pathLocation.slice(0,pathLocation.search(pathArray[x+1]))  + '">' + pathArray[x]  +'</a></li>');

}

document.write( '<span> / </span>'+'<li class="currentpath">' + pathArray[pathArrayLength-1] + '</li>' + '</ul>');










 