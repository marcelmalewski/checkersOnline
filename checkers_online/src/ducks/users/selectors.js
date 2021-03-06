export const getYourData = (state) => state.users.yourData;
export const getIsNicknameTaken = (state) => state.users.isNicknameTaken;
export const getIsNicknameWrong = (state) => state.users.isNicknameWrong;
export const getIsPaswordWrong = (state) => state.users.isPaswordWrong;
export const getAreAllUsersInStore = (state) => state.users.areAllUsersInStore;
export const getAllUsers = (state) => state.users.users;
export const getDoYouHaveTooManyRooms = (state) =>
  state.users.doYouHaveTooManyRooms;
export const getYouAreInGame = (state) => state.users.yourData.youAreInGame;
export const getUserNameById = (state, userId) =>
  state.users.users.find((el) => el._id === userId);
