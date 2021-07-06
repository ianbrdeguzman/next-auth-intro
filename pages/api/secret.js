import { getSession } from 'next-auth/client';

export default async (req, res) => {
    const session = await getSession({ req });

    if (session) {
        res.status(200).json({ message: 'This is a secret api route.' });
    } else {
        res.status(200).json({
            error: 'You are not signed in.',
        });
    }
};
