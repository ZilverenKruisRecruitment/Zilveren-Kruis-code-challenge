const validateBsn = (bsn) => {
    let splitBsn = Array.from(String(bsn), Number);
    let bsnLength = splitBsn.length;
    let bsnSum = 0;
    let multiplicator = 9;

    for (let i = 0; i < bsnLength; i++) {
        if (i === bsnLength - 1) {
            bsnSum = bsnSum + (-1 * splitBsn[i])
        } else {
            bsnSum = bsnSum + (multiplicator * splitBsn[i])
            multiplicator--;
        }
    }

    bsnSum = bsnSum / 11;

    // Ik zag dat het ook via het Number object kan, maar IE ondersteund dit niet.
    return bsnSum % 1 === 0;
}

module.exports = {
    validateBsn
}