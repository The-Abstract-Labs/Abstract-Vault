import type { NextApiRequest, NextApiResponse } from 'next'
import { UserOperation, handleOps } from '../../services/eip4337'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<string>
) {
    const transactionHash = await handleOps(req.body as UserOperation);
    res.status(200).end(transactionHash)
}