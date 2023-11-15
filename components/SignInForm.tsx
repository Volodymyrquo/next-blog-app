'use client';

import { useRouter } from 'next/navigation';
import type { MouseEventHandler } from 'react';
import { signIn } from 'next-auth/react';
export const SignInForm = () => {
    const router = useRouter();
    const handleSubmit: MouseEventHandler<HTMLFormElement> = async event => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const res = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false,
        });
        if (res && !res.error) {
            router.push('/profile');
        } else {
            console.log(res);
        }
    };

    return (
        <form onClick={handleSubmit} className="login-form">
            <input type="email" name="email" required />
            <input type="password" name="password" required />
            <button type="submit">Sign In</button>
        </form>
    );
};
