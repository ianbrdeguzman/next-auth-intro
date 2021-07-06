import { signIn, signOut, useSession } from 'next-auth/client';
import Link from 'next/link';

export default function Home() {
    const [session] = useSession();

    return !session ? (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
            }}
        >
            <h1>You are signed out.</h1>
            <button onClick={signIn}>Sign In</button>
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
            <h1>You are signed in.</h1>
            <p>{session.user.name}</p>
            <p>{session.user.email}</p>
            <img src={session.user.image} alt='avatar' />
            <div>
                <button>
                    <Link href='/secret'>
                        <a>Secret Page</a>
                    </Link>
                </button>
                <button onClick={signOut}>Sign Out</button>
            </div>
        </div>
    );
}
