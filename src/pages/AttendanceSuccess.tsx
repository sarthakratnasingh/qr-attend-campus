import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const AttendanceSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="glass-card w-full max-w-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-primary mb-2 uppercase tracking-wider">
          Gautam Buddha University
        </h1>
        <h2 className="text-lg text-muted-foreground mb-8">
          Attendance submitted successfully
        </h2>
        
        <div className="text-6xl text-primary mb-6 text-glow">
          <CheckCircle className="mx-auto" size={80} />
        </div>
        
        <h3 className="text-lg text-foreground mb-8">
          You may close this page
        </h3>
        
        <Button 
          onClick={() => navigate("/")}
          className="btn-glow text-primary-foreground font-medium mb-6"
        >
          Go to Home
        </Button>
        
        <div className="text-sm text-muted-foreground">
          © QR Attendance System 2025 - Team BYTEFORCE
        </div>
      </div>
    </div>
  );
};

export default AttendanceSuccess;