/**
 * Validate user email and password
 * @exports
 * @class
 */
class Validate {
  /**
   * Checks if the input fields are empty
   * @param {object} input
   * @return {boolean} true or false
   */
  static isEmpty(input) {
    return (
      input === undefined || input === null || (typeof input === "object" && Object.keys(input).length === 0)
    || (typeof input === "string" && input.trim().length === 0));
  }

  /**
   * Checks if the email is valid
   * @param {object} input
   * @return {boolean} true or false
   */
  static email(input) {
    const email = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
    return input.match(email);
  }

  /**
   * @param {value} isLength -check length of values
   */
  static isLength(value,options) {
    let min;
    let max;
    if(typeof options==="object"){
        min=options.min || 0;
        max=options.max;
    }
    const len=value.length;
    return len>=min && (typeof max==="undefined" || len<=max)
  }
  /**
   * 
   * @param {*} value check number if is integer 
   */
  static isInteger(value){
    const number=Number(value);
    return (Number.isInteger(number));
  }
}
export default  Validate;