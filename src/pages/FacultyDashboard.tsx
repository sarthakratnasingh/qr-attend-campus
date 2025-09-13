import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock attendance data
const mockAttendanceRecords = [
  { student: "245UCS190 - Shaurya Kant Gautam", email: "shaurya@student.gbu.ac.in" },
  { student: "245UCS185 - Shalini Kumari", email: "shalini@student.gbu.ac.in" },
  { student: "245UCS181 - Sarthak Ratna Singh", email: "sarthak@student.gbu.ac.in" },
  { student: "245UCS236 - Vedika Kumari", email: "vedika@student.gbu.ac.in" },
];

// Mock chart data for last 30 days
const mockChartData = Array.from({ length: 30 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() - (29 - i));
  return {
    date: date.toISOString().split('T')[0],
    count: Math.floor(Math.random() * 25) + 5 // Random attendance between 5-30
  };
});

const FacultyDashboard = () => {
  const navigate = useNavigate();
  const [attendanceRecords] = useState(mockAttendanceRecords);

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="glass-card p-6">
          <h1 className="text-3xl font-bold text-primary text-center mb-2 uppercase tracking-wider">
            Faculty Dashboard
          </h1>
          <h2 className="text-lg text-center text-muted-foreground mb-8">
            Gautam Buddha University
          </h2>

          {/* Attendance Records Table */}
          <Card className="glass-card border-primary/20 mb-8">
            <CardHeader>
              <CardTitle className="text-primary text-xl">Attendance Records</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-primary/20">
                    <TableHead className="text-primary font-semibold">Student</TableHead>
                    <TableHead className="text-primary font-semibold">Email</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {attendanceRecords.map((record, index) => (
                    <TableRow key={index} className="border-primary/10 hover:bg-primary/5">
                      <TableCell className="text-foreground">{record.student}</TableCell>
                      <TableCell className="text-foreground">{record.email}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Attendance Chart */}
          <Card className="glass-card border-primary/20 mb-8">
            <CardHeader>
              <CardTitle className="text-primary text-xl">Attendance Last 30 Days</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-end justify-between gap-1 p-4 bg-background/10 rounded-lg">
                {mockChartData.slice(-7).map((data, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <div 
                      className="bg-gradient-to-t from-primary to-accent rounded-t transition-all hover:opacity-80"
                      style={{ 
                        height: `${(data.count / 30) * 200}px`,
                        width: '40px',
                        minHeight: '20px'
                      }}
                    />
                    <div className="text-xs text-muted-foreground transform -rotate-45 w-12">
                      {new Date(data.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                    <div className="text-xs text-primary font-semibold">{data.count}</div>
                  </div>
                ))}
              </div>
              <div className="text-center text-sm text-muted-foreground mt-4">
                Daily Attendance Count (Last 7 Days)
              </div>
            </CardContent>
          </Card>

          <div className="text-center space-x-4">
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
              View Student Dashboard
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;