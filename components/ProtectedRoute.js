import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth } from "@/db/auth";

export default function ProtectedRoute({ children }) {
    const router = useRouter();
    const [isUser, setIsUser] = useState(false)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setIsUser(true)
                console.log("sdfef")

            }
            if (!user) {
                router.push("/");
            }
        });

        return () => unsubscribe();

    }, []);

    if (isUser) {
        return children
    }
}