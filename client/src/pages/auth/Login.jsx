import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { login } from "@/services/auth";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/features/authSlice";
import Loading from "@/components/layout/Loading";

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [error, setError] = useState();
    const dispatch = useDispatch();
    const { isLoading } = useSelector((state) => state.auth);

    const onSubmit = async (data) => {
        dispatch(setLoading(true));
        try {
            const response = await login(data);
            console.log(response);

            if (response) {
                dispatch(setUser(response.data));
            }
        } catch (error) {
            console.log(error);

            setError(error.message);
        } finally {
            dispatch(setLoading(false));
        }
    };

    if (isLoading) return <Loading />;

    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
                <div className="absolute bottom-20 right-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            </div>

            <div
                className="
                    w-full
                    max-w-md
                    rounded-3xl
                    border
                    bg-card/70
                    p-8
                    shadow-xl
                    backdrop-blur-xl
                    animate-in
                    fade-in
                    zoom-in-95
                    duration-500
                "
            >
                {/* Logo */}
                <div className="mb-8 flex justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                        <span className="text-xl font-bold">I</span>
                    </div>
                </div>

                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold tracking-tight">
                        Welcome Back
                    </h1>

                    <p className="text-sm text-muted-foreground">
                        Sign in to continue managing your invoices
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-8 space-y-5"
                >
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>

                        <Input
                            {...register("email", { required: true })}
                            type="email"
                            placeholder="you@example.com"
                            className="h-11 transition-all duration-200 focus-visible:ring-2"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Password</label>

                        <Input
                            {...register("password", { required: true })}
                            type="password"
                            placeholder="••••••••"
                            className="h-11 transition-all duration-200 focus-visible:ring-2"
                        />
                    </div>

                    <div className="flex justify-end">
                        <Link
                            to="/forgot-password"
                            className="text-sm text-primary hover:underline"
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    {error && (
                        <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400">
                            {" "}
                            {error}
                        </div>
                    )}

                    <Button
                        size="lg"
                        className="
                            w-full
                            shadow-lg
                            shadow-primary/20
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            hover:shadow-xl
                        "
                    >
                        Sign In
                    </Button>
                </form>

                <p className="mt-6 text-center text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <Link
                        to="/signup"
                        className="font-medium text-primary hover:underline"
                    >
                        Create Account
                    </Link>
                </p>
            </div>
        </main>
    );
}
