function compress(hash) {
  let arrayHash = [...hash]
  let binaryArray = arrayHash.map(x => {
    let fixedVal;
    let numericVal = x.charCodeAt(0);
    if (numericVal <= 57) {
      fixedVal = numericVal - 48;
    }
    else if (numericVal <= 90) {
      fixedVal = numericVal - 55;
    }
    else {
      fixedVal = numericVal - 61;
    }

    let binaryVal = fixedVal.toString(2);
    while (binaryVal.length != 6) {
      binaryVal = '0' + binaryVal;
    }

    return binaryVal;
  })

  let binaryString = binaryArray.join("");

  let fourBitsArray = [];

  for (let i = 0; i < binaryString.length; i += 4) {
    let fourBits = [binaryString[i], binaryString[i + 1], binaryString[i + 2], binaryString[i + 3]]
    fourBitsArray.push(fourBits.join(""));
  }

  let hexArray = fourBitsArray.map(x => parseInt(x, 2).toString(16));

  return hexArray.join("");
}

function decompress(hexHash) {
  let binaryArray = [...hexHash].map(x => {
    let binaryVal = (parseInt(x, 16)).toString(2)
    while (binaryVal.length != 4) {
      binaryVal = '0' + binaryVal;
    }
    return binaryVal;
  });

  let binaryString = binaryArray.join("");
  let sixBitsArray = [];

  for (let i = 0; i < binaryString.length; i += 6) {
    let sixBits = [binaryString[i], binaryString[i + 1], binaryString[i + 2],
    binaryString[i + 3], binaryString[i + 4], binaryString[i + 5]]
    sixBitsArray.push(sixBits.join(""));
  }

  let fixedArray = sixBitsArray.map(x => parseInt(x, 2));

  let numericHash = fixedArray.map(x => {
    let numericVal;
    if (x <= 9) {
      numericVal = x + 48;
    }
    else if (x <= 35) {
      numericVal = x + 55;
    }
    else {
      numericVal = x + 61;
    }
    return numericVal;
  })

  return numericHash.map(x => String.fromCharCode(x)).join("");

}

module.exports = {
  compress,
  decompress
};
