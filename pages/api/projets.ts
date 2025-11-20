import { get } from '@vercel/edge-config';
import { NextApiRequest, NextApiResponse } from 'next';

interface Blob {
    url: string,
    title: string,
    year: number,
    project: string,
    pathname: string
};

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
    try {
        const data: Blob[] = await get('blobs') as Blob[];
        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch projects', details: (error as Error).message });
    }
}