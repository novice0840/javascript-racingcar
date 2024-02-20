import { ERROR_MESSAGES, CAR } from "../constant/constant.js";

class Validation {
  static #isDuplicate(carNames) {
    if (carNames.length === new Set(carNames).size) {
      return;
    }
    throw new Error(ERROR_MESSAGES.DUPLICATE);
  }

  static #isRange(carName) {
    if (CAR.MIN_LENGTH <= carName.length && carName.length <= CAR.MAX_LENGTH) {
      return;
    }
    throw new Error(ERROR_MESSAGES.NAME_RANGE);
  }

  static #checkRange(carNames) {
    carNames.forEach((carName) => {
      Validation.#isRange(carName);
    });
  }

  static #isNaturalNumber(tryNumber) {
    if (Number.isInteger(tryNumber)) return;
    throw new Error(ERROR_MESSAGES.NATURAL_NUMBER);
  }

  static validateCarNames(carNames) {
    Validation.#isDuplicate(carNames);
    Validation.#checkRange(carNames);
  }

  static validateTryNumber(tryNumber) {
    Validation.#isNaturalNumber(tryNumber);
  }
}

export default Validation;