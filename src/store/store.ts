export const store = {
  getState: () => ({
    auth: {
      accessToken: localStorage.getItem('accessToken') || '',
    },
  }),
};
