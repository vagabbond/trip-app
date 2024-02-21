import { RootState } from "../redux/store";

export type AsyncThunkConfig = {
 state: RootState;
 rejectValue: string;
 getState: () => RootState;
};
