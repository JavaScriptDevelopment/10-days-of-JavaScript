function getLetter(s) {
    let letter;
    // Write your code here
    switch(s.charAt(0)){
        case 'a':
            letter = 'A';
            break;
        case 'b':
            letter = 'B';
            break;
         case 'h':
            letter = 'C';
            break;
         default:
            letter = 'D';
    }
    return letter;
}