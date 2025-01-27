import type { ReduxAction } from "ee/constants/ReduxActionConstants";
import { ReflowReduxActionTypes } from "ee/constants/ReduxActionConstants";
import type { ReflowedSpaceMap } from "reflow/reflowTypes";

export const reflowMoveAction = (
  payload: ReflowedSpaceMap,
): ReduxAction<ReflowedSpaceMap> => {
  return {
    type: ReflowReduxActionTypes.REFLOW_MOVE,
    payload: payload,
  };
};

export const stopReflowAction = () => {
  return {
    type: ReflowReduxActionTypes.STOP_REFLOW,
  };
};
