import type { Request, Response } from '@steijnveer/file-based-router';

export const GET = (req: Request, res: Response) => {
  res.resolve({
    status: 200,
    message: 'OK',
    data: null,
  });
};
