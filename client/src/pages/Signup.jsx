import { Link } from "react-router-dom";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "@/features/authSlice";

export default function Signup() {
    const { register, handleSubmit } = useForm();
    const [isLoading, setIsLoading] = useState(false); // fake
    const [authError, setAuthError] = useState();
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        // Fake
        setIsLoading(true);
        setTimeout(() => {
            console.log(formData);
            dispatch(signup());
            setIsLoading(false);
        }, [800]);
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
                <div className="mb-8 flex justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                        <span className="text-xl font-bold">I</span>
                    </div>
                </div>

                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold tracking-tight">
                        Create Account
                    </h1>

                    <p className="text-sm text-muted-foreground">
                        Start managing invoices professionally
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-8 space-y-5"
                >
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Name</label>

                        <Input
                            {...register("name", { required: true })}
                            placeholder="John Doe"
                            className="h-11"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>

                        <Input
                            {...register("email", { required: true })}
                            type="email"
                            placeholder="you@example.com"
                            className="h-11"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Password</label>

                        <Input
                            {...register("password", { required: true })}
                            type="password"
                            placeholder="••••••••"
                            className="h-11"
                        />
                    </div>

                    {authError && (
                        <p className="text-sm text-red-500">{authError}</p>
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
                        Create Account
                    </Button>
                </form>

                <p className="mt-6 text-center text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="font-medium text-primary hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
            </div>
        </main>
    );
}
