import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Loader2, UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { createOrganization } from "@/features/organization/organizationThunk";

const currencies = ["INR", "USD", "EUR", "GBP", "AUD", "CAD"];
const timezones = [
    "Asia/Kolkata",
    "UTC",
    "America/New_York",
    "Europe/London",
    "Europe/Berlin",
    "Asia/Singapore",
];

const CreateOrganization = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, organizations } = useSelector(
        (state) => state.organization,
    );
    const { register, handleSubmit, setValue, watch } = useForm({
        defaultValues: {
            currency: "INR",
            timezone: "Asia/Kolkata",
        },
    });
    const [logoPreview, setLogoPreview] = useState("");
    const logoFile = watch("logo")?.[0];

    useEffect(() => {
        if (!logoFile) return;

        const objectUrl = URL.createObjectURL(logoFile);
        setLogoPreview(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);
    }, [logoFile]);

    useEffect(() => {
        if (organizations.length) {
            navigate("/dashboard", { replace: true });
        }
    }, [navigate, organizations.length]);

    const onSubmit = async (formData) => {
        const payload = new FormData();

        payload.append("name", formData.name);
        payload.append("logo", formData.logo[0]);
        payload.append("email", formData.email || "");
        payload.append("phone", formData.phone || "");
        payload.append("website", formData.website || "");
        payload.append("address", formData.address || "");
        payload.append("taxId", formData.taxId || "");
        payload.append("currency", formData.currency);
        payload.append("timezone", formData.timezone);

        const result = await dispatch(createOrganization(payload));

        if (createOrganization.fulfilled.match(result)) {
            navigate("/dashboard", { replace: true });
        }
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 px-4 py-10">
            <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <section className="space-y-6 rounded-3xl border bg-card p-8 shadow-lg">
                    <div className="space-y-2">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                            First step
                        </p>
                        <h1 className="text-3xl font-bold tracking-tight">
                            Create your organization
                        </h1>
                        <p className="max-w-xl text-muted-foreground">
                            Set up the default organization for your workspace.
                            Once it’s created, you’ll be taken directly into the
                            dashboard.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="grid gap-5 md:grid-cols-2"
                    >
                        <div className="space-y-2 md:col-span-2">
                            <label className="text-sm font-medium">Name</label>
                            <Input
                                {...register("name", { required: true })}
                                placeholder="Acme Studio"
                            />
                        </div>

                        <div className="space-y-2 md:col-span-2">
                            <label className="text-sm font-medium">Logo</label>
                            <div className="flex items-center gap-4 rounded-2xl border border-dashed p-4">
                                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-muted">
                                    {logoPreview ? (
                                        <img
                                            src={logoPreview}
                                            alt="Logo preview"
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        <UploadCloud className="h-6 w-6 text-muted-foreground" />
                                    )}
                                </div>
                                <div className="flex-1">
                                    <Input
                                        type="file"
                                        accept="image/*"
                                        {...register("logo", { required: true })}
                                    />
                                    <p className="mt-2 text-xs text-muted-foreground">
                                        Upload a logo image for your organization.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Email</label>
                            <Input
                                {...register("email")}
                                type="email"
                                placeholder="billing@acme.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Phone</label>
                            <Input
                                {...register("phone")}
                                placeholder="+91 98765 43210"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">
                                Website
                            </label>
                            <Input
                                {...register("website")}
                                type="url"
                                placeholder="https://example.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Tax ID</label>
                            <Input
                                {...register("taxId")}
                                placeholder="GSTIN / VAT"
                            />
                        </div>

                        <div className="space-y-2 md:col-span-2">
                            <label className="text-sm font-medium">
                                Address
                            </label>
                            <Textarea
                                {...register("address")}
                                placeholder="Full business address"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">
                                Currency
                            </label>
                            <Select
                                defaultValue="INR"
                                onValueChange={(value) =>
                                    setValue("currency", value)
                                }
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select currency" />
                                </SelectTrigger>
                                <SelectContent>
                                    {currencies.map((currency) => (
                                        <SelectItem
                                            key={currency}
                                            value={currency}
                                        >
                                            {currency}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">
                                Time Zone
                            </label>
                            <Select
                                defaultValue="Asia/Kolkata"
                                onValueChange={(value) =>
                                    setValue("timezone", value)
                                }
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select time zone" />
                                </SelectTrigger>
                                <SelectContent>
                                    {timezones.map((timezone) => (
                                        <SelectItem
                                            key={timezone}
                                            value={timezone}
                                        >
                                            {timezone}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {error && (
                            <p className="md:col-span-2 text-sm text-red-500">
                                {error}
                            </p>
                        )}

                        <div className="md:col-span-2">
                            <Button type="submit" className="w-full" size="lg">
                                {loading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Creating organization...
                                    </>
                                ) : (
                                    "Create Organization"
                                )}
                            </Button>
                        </div>
                    </form>
                </section>

                <aside className="rounded-3xl border bg-card p-8 shadow-lg">
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">
                            What happens next?
                        </h2>
                        <div className="space-y-3 text-sm text-muted-foreground">
                            <p>
                                Your organization becomes the default workspace
                                for invoices, clients, services, and payments.
                            </p>
                            <p>
                                After creation, we’ll send you straight to the
                                dashboard so you can start working right away.
                            </p>
                            <p>
                                You can still manage members and settings later
                                from the app sidebar.
                            </p>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    );
};

export default CreateOrganization;
