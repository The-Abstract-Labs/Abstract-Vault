import type { NextApiRequest, NextApiResponse } from 'next'
import { createAccount } from '../../services/eip4337'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<string>
) {
    const address = await createAccount();
    res.status(200).end(address)
}