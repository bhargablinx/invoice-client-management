import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/features/authSlice";
import api from "@/lib/axios";
import { Loader2, CheckCircle2 } from "lucide-react";

export default function Signup() {
    const { register, handleSubmit } = useForm();
    const { loading } = useSelector((state) => state.auth);
    const [authError, setAuthError] = useState(null);
    const [authSuccess, setAuthSuccess] = useState(null);
    const [resendLoading, setResendLoading] = useState(false);
    const [registeredEmail, setRegisteredEmail] = useState("");
    const dispatch = useDispatch();

    const handleResendEmail = async () => {
        try {
            setResendLoading(true);

            const { data } = await api.post("/auth/resend-email", {
                email: registeredEmail,
            });

            setAuthSuccess(data.message);
            setAuthError(null);
        } catch (error) {
            setAuthError(
                error.response?.data?.message ||
                    "Unable to resend verification email.",
            );
        } finally {
            setResendLoading(false);
        }
    };

    const onSubmit = async (formData) => {
        setAuthError(null);
        setAuthSuccess(null);
        try {
            dispatch(setLoading(true));
            const response = await api.post("/auth/signup", formData);
            setAuthSuccess(response.data.data);
            setRegisteredEmail(formData.email);
        } catch (error) {
            const message = error.response?.data?.message || "Unknown error";

            setAuthError(message);
        } finally {
            dispatch(setLoading(false));
        }
    };

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

                {!authSuccess ? (
                    <>
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
                                <label className="text-sm font-medium">
                                    Name
                                </label>

                                <Input
                                    {...register("name", { required: true })}
                                    placeholder="John Doe"
                                    className="h-11"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">
                                    Email
                                </label>

                                <Input
                                    {...register("email", { required: true })}
                                    type="email"
                                    placeholder="you@example.com"
                                    className="h-11"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">
                                    Password
                                </label>

                                <Input
                                    {...register("password", {
                                        required: true,
                                    })}
                                    type="password"
                                    placeholder="••••••••"
                                    className="h-11"
                                />
                            </div>

                            {authError && (
                                <p className="text-center text-sm text-red-500">
                                    {authError}
                                </p>
                            )}

                            <Button
                                type="submit"
                                size="lg"
                                disabled={loading}
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
                                {loading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Creating Account...
                                    </>
                                ) : (
                                    "Create Account"
                                )}
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
                    </>
                ) : (
                    <div className="space-y-6 text-center">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
                            <CheckCircle2 className="h-8 w-8 text-green-600" />
                        </div>

                        <div>
                            <h1 className="text-3xl font-bold tracking-tight">
                                Verify your email
                            </h1>

                            <p className="mt-3 text-sm text-muted-foreground">
                                {authSuccess}
                            </p>

                            <p className="mt-2 text-sm text-muted-foreground">
                                Please check your inbox and click the
                                verification link before signing in.
                            </p>
                        </div>

                        {authError && (
                            <p className="text-sm text-red-500">{authError}</p>
                        )}

                        <Button
                            variant="outline"
                            className="w-full"
                            onClick={handleResendEmail}
                            disabled={resendLoading}
                        >
                            {resendLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                "Resend Verification Email"
                            )}
                        </Button>

                        <Button asChild className="w-full">
                            <Link to="/login">Go to Login</Link>
                        </Button>
                    </div>
                )}
            </div>
        </main>
    );
}
