import { NextApiRequest, NextApiResponse } from 'next';

declare module next {
	export type NextAPIHandler = (req: NextApiResponse, res: NextApiResponse) => void;
}
