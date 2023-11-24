// ProtectedRoute.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { auth } from '@/db/auth';
import { useUser } from '../components/UserContext';

export default function ProtectedRoute({ children }) {
    const router = useRouter();
    const { setUserDoc } = useUser();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                const email = user.email;

                fetch(`/api/getUser?email=${email}`, {
                    method: 'GET',
                })
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(`Erro ao chamar a API: ${response.status}`);
                        }

                        return response.json();
                    })
                    .then((data) => {
                        console.log(data);
                        setUserDoc(data);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }

            if (!user) {
                router.push('/');
            }
        });

        return () => unsubscribe();
    }, [setUserDoc, router]);

    return children;
}
