
class Assert {

   equal(actual, expected) {
    if (actual !== expected) {
        console.error('Expected:', expected, '\nActual:', actual);
        return false;
    }
    return true
  }
}
const assert = new Assert();    
export default assert;