import defineRoute from '@steijnveer/file-based-router/defineRoute';

export const GET = defineRoute((req, res) => {
  res.resolve({
    status: 200,
    message: 'OK',
    data: null,
  });
});
