import { createAction, props } from "@ngrx/store";
import constants from "../../constants";

export const sendGithubRequestBySearch = createAction(
  constants.SEND_GITHUB_REQUEST_BU_SEARCH,
  props<{ payload: string }>()
);

export const sendGithubRequestByCurrentRepositoryUrl = createAction(
  constants.SEND_GITHUB_REQUEST_BY_CURRENT_REPOSITORY_URL,
  props<{ payload: string }>()
);
