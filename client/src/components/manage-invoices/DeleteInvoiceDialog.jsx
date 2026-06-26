import { AlertTriangle } from "lucide-react";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const DeleteInvoiceDialog = ({ open, onOpenChange, invoiceNumber }) => {
    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <div className="flex justify-center">
                        <div className="rounded-full bg-destructive/10 p-3">
                            <AlertTriangle className="size-7 text-destructive" />
                        </div>
                    </div>

                    <AlertDialogTitle className="text-center">
                        Delete Invoice
                    </AlertDialogTitle>

                    <AlertDialogDescription className="text-center">
                        Are you sure you want to permanently delete{" "}
                        <span className="font-semibold">{invoiceNumber}</span>
                        ?
                        <br />
                        <br />
                        This action cannot be undone.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>

                    <AlertDialogAction className="bg-destructive hover:bg-destructive/90">
                        Delete Invoice
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default DeleteInvoiceDialog;
