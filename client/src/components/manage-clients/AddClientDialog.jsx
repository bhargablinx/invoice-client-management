import { useState } from "react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const AddClientDialog = ({ open, onOpenChange }) => {
    const [form, setForm] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        gst: "",
        address: "",
        notes: "",
    });

    const handleChange = (field, value) => {
        setForm((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-xl">
                <DialogHeader>
                    <DialogTitle>Add Client</DialogTitle>

                    <DialogDescription>
                        Create a new client for your organization.
                    </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                        <Label>Client Name</Label>

                        <Input
                            value={form.name}
                            onChange={(e) =>
                                handleChange("name", e.target.value)
                            }
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Company</Label>

                        <Input
                            value={form.company}
                            onChange={(e) =>
                                handleChange("company", e.target.value)
                            }
                        />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label>Email</Label>

                            <Input
                                type="email"
                                value={form.email}
                                onChange={(e) =>
                                    handleChange("email", e.target.value)
                                }
                            />
                        </div>

                        <div className="space-y-2">
                            <Label>Phone</Label>

                            <Input
                                value={form.phone}
                                onChange={(e) =>
                                    handleChange("phone", e.target.value)
                                }
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label>GST Number</Label>

                        <Input
                            value={form.gst}
                            onChange={(e) =>
                                handleChange("gst", e.target.value)
                            }
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Address</Label>

                        <Textarea
                            rows={3}
                            value={form.address}
                            onChange={(e) =>
                                handleChange("address", e.target.value)
                            }
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Notes</Label>

                        <Textarea
                            rows={3}
                            value={form.notes}
                            onChange={(e) =>
                                handleChange("notes", e.target.value)
                            }
                        />
                    </div>
                </div>

                <DialogFooter>
                    <Button
                        variant="outline"
                        onClick={() => onOpenChange(false)}
                    >
                        Cancel
                    </Button>

                    <Button>Create Client</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default AddClientDialog;
