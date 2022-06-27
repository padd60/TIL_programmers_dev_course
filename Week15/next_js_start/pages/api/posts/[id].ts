import { NextApiRequest, NextApiResponse } from 'next';
import data from './data.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const postId = parseInt(req.query.id as string);
  const post = data.find((item) => item.id === postId);

  if (req.method === 'GET') {
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).send({ error: 'not found', status: 404 });
    }
  } else {
    res.status(405).send({ error: 'method not allow', status: 405 });
  }
}
