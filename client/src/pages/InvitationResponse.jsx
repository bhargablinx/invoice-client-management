import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    acceptInvitation,
    rejectInvitation,
} from "@/features/invitations/invitationThunk";

const InvitationResponse = () => {
    const { token } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [status, setStatus] = useState("pending");
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (!token) return;

        const autoAccept = async () => {
            try {
                await dispatch(acceptInvitation(token)).unwrap();
                setStatus("accepted");
                setMessage("Invitation accepted successfully.");
            } catch (error) {
                setStatus("ready");
                setMessage(error?.message || "Invitation could not be accepted.");
            }
        };

        autoAccept();
    }, [dispatch, token]);

    const handleReject = async () => {
        try {
            await dispatch(rejectInvitation(token)).unwrap();
            setStatus("rejected");
            setMessage("Invitation rejected successfully.");
        } catch (error) {
            setMessage(error?.message || "Invitation could not be rejected.");
        }
    };

    if (status === "pending") return <Loading />;

    return (
        <div className="mx-auto flex min-h-[60vh] max-w-xl items-center">
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>Invitation Response</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{message}</p>

                    <div className="flex gap-3">
                        <Button onClick={() => navigate("/dashboard")}>
                            Go to Dashboard
                        </Button>
                        {status !== "rejected" && (
                            <Button variant="outline" onClick={handleReject}>
                                Reject
                            </Button>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default InvitationResponse;
