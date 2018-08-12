<!DOCTYPE html>
<html>
<head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/sugar/2.0.4/sugar.min.js"></script>
</head>
<body>
<script>
function uniteUnique(arr1,arr2,arr3) {

  return Sugar.Array.union(arr1,arr2,arr3);

}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // should return [1, 3, 2, 5, 4].
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]])); //should return [1, 3, 2, [5], [4]].
console.log(uniteUnique([1, 2, 3], [5, 2, 1])); //should return [1, 2, 3, 5].
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); //should return [1, 2, 3, 5, 4, 6, 7, 8].
</script>
</body>
</html>
