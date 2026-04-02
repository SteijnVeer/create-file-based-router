import type { Request, Response } from 'express';

export const GET = (req: Request, res: Response) => {
  res.resolve({
    status: 200,
    message: 'OK',
    data: null,
  });
};
