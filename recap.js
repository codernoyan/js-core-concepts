var myName = 'Noyan';

// Array
var friends = ['amina', 'jamina', 'lamina', 'samina', 'kamina', 'zebina'];

// find the last element from an array
var lastElement = friends[friends.length - 1];
console.log(lastElement)

//change an elements value of an array
friends[3] = 'sokina';
console.log(friends);

// find an elements index using element value
var whereIsMyFriend = friends.indexOf('jamina');
console.log(whereIsMyFriend);

// while loop
var i = 0;
while (i <= 10) {
    // console.log(i);
    i++;
}

// for loop
for (var i = 0; i <= 10; i++){
    console.log(i);
}