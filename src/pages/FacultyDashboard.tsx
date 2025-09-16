import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FacultyDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-8 text-center">
          <h1 className="text-3xl font-bold text-primary mb-2 uppercase tracking-wider">
            Faculty Dashboard
          </h1>
          <h2 className="text-lg text-muted-foreground mb-8">
            Gautam Buddha University
          </h2>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <Card className="glass-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  onClick={() => navigate("/manual-attendance")}
                  className="w-full btn-glow text-primary-foreground"
                >
                  Take Attendance
                </Button>
                <Button 
                  onClick={() => navigate("/attendance-dashboard")}
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  View Reports
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">System Info</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span className="text-primary font-semibold">Active</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Today's Date:</span>
                    <span className="text-foreground">{new Date().toLocaleDateString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-x-4">
            <Button 
              onClick={() => navigate("/")}
              className="btn-glow text-primary-foreground"
            >
              Logout
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate("/student-dashboard")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Student View
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;