let count = 0;

function cc(card) {

    switch(card) {

        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;    
            break;
        
        default:
            count--;
            
    }

    if (count > 0) {
        return count + " Bet";

    } else {
        return count + " Hold";
    }
}
console.log(cc(2) + " " + cc(3) + " " + cc(7) + " " + cc('K') + " " + cc('A'));
