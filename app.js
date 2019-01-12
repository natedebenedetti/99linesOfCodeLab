var friends = ["Matt", "Brooks", "Dustin", "Jordan", "Chip"];


getFriend(friends);


function getFriend() { //function that lists each name in the friends array and for each name sings the song in decending order starting at 99.
    for (f = 0; f < friends.length; f++) {
        console.log(friends[f]);
        for (l = 99; l <= 99 && l >= 1; --l) {
            var li = l -1;
            var name = friends[f];
            if (li >= 1) {
                console.log(l + " lines of code in the file, " + l + " lines of code; " + name + " strikes one out, clears it all out, " + li + " lines of code in the file");
            } else {
               console.log(l + " line of code in the file, 1 line of code; " + name + " strikes one out, clears it all out, no more lines of code in the file");
            }
        }

    }
}




