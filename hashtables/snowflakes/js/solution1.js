// this is not the completed solution there are bugs inside of it

function program() {
    const identicalRight = (snow1, snow2, start) => {
        for (let offset = 0; offset < 6; offset++) {
            if (snow1[offset] != snow2[(start + offset) % 6]) {
                return false;
            }
        }
        return true;
    }

    const identicalLeft = (snow1, snow2, start) => {
        let snow2_index;
        for (let offset = 0; offset < 6; offset++) {
            snow2_index = start - offset;
            if (snow2_index < 0) {
                snow2_index = snow2_index + 6;
            }
            if (snow1[offset] != snow2[snow2_index]) {
                return false;
            }
        }
        return true;
    }

    const areIdentical = (snow1, snow2) => {
        for (let start = 0; start < 6; start++) {
            if (identicalRight(snow1, snow2, start)) {
                return true;
            }
            if (identicalLeft(snow1, snow2, start)) {
                return true;
            }
        }
        return false;
    }

    console.log(areIdentical([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]));
    console.log(areIdentical([1, 2, 3, 4, 5, 6], [4, 5, 6, 1, 2, 3]));
    console.log(areIdentical([1, 2, 3, 4, 5, 6], [3, 4, 32, 2, 2, 3]));
}

program();