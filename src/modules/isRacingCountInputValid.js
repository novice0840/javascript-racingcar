import {
  NOT_INTEGER_TYPE_ERROR,
  OVER_COUNT_RANGE_ERROR,
} from "../constants/error.js";
import {
  MAXIMUM_RACE_COUNT,
  MINMUM_RACE_COUNT,
} from "../constants/constants.js";
import checkUserInputIsEmpty from "./checkUserInputIsEmpty.js";
import { $ } from "../dom/dom.js";

function isRacingCountInteger(raceCountInput) {
  if (!Number.isInteger(raceCountInput)) {
    throw new Error(NOT_INTEGER_TYPE_ERROR);
  }
  return true;
}

function isRacingCountInRange(raceCountInput) {
  if (
    raceCountInput > MAXIMUM_RACE_COUNT ||
    raceCountInput < MINMUM_RACE_COUNT
  ) {
    throw new Error(OVER_COUNT_RANGE_ERROR);
  }
  return true;
}

export default function isRacingCountInputValid(userRacingCountInput) {
  try {
    let isUserInputValid = false;
    let isUserInputEmpty = false;
    if (isRacingCountInteger(Number(userRacingCountInput))) {
      isUserInputEmpty = checkUserInputIsEmpty(userRacingCountInput);
    }
    if (!isUserInputEmpty) {
      isUserInputValid = isRacingCountInRange(userRacingCountInput);
    }
    return isUserInputValid;
  } catch (msg) {
    alert(msg.message);
    $("#race-count-input").value = "";
  }
}
