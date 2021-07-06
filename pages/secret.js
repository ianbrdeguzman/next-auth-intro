import { useSession } from 'next-auth/client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Secret = () => {
    const [session] = useSession();
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                'https://next-auth-intro-nkbypcsfm-ianbrdeguzman.vercel.app/api/secret'
            );
            const data = await res.json();
            setData(data);
        };
        fetchData();
    }, [session]);

    return !session ? (
        <div>
            <h1>You have to sign in to see the secret.</h1>
        </div>
    ) : (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
            }}
        >
            <h1>You are in the secret page.</h1>
            <p>{data?.message}</p>
            <button>
                <Link href='/'>
                    <a>Back</a>
                </Link>
            </button>
        </div>
    );
};

export default Secret;
