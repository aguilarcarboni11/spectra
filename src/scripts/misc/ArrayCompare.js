function ArrayCompare(a,b) {
    if (a.length !== b.length) {
        return false;
    } else {
        let result = false
        a.forEach((element, index) => {
            if (element !== b[index]) {
                return false
            } else {
                result = true;
            }
        })
        return result;
    }
}  

export default ArrayCompare