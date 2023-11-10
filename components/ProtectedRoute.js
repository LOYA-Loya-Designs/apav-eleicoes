import { useEffect } from "react";
import { useRouter } from "next/router";
import { auth } from "@/db/auth";

export default function ProtectedRoute({ children }) {
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (!user) {
                router.push("/");
            }
        });

        return () => unsubscribe();
    }, []);

    return children;
}