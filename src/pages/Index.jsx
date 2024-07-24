import { useState } from "react";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThumbsUp, ThumbsDown } from "lucide-react";

const Index = () => {
  const [reason, setReason] = useState("");
  const [amount, setAmount] = useState("");
  const [urgency, setUrgency] = useState("");
  const [generatedTagline, setGeneratedTagline] = useState("");
  const [sentimentScore, setSentimentScore] = useState(null);

  const handleGenerateTagline = () => {
    // TODO: Implement actual tagline generation and sentiment analysis
    const mockTagline = "Your generosity can make a world of difference today!";
    const mockSentimentScore = 0.8;
    setGeneratedTagline(mockTagline);
    setSentimentScore(mockSentimentScore);
  };

  const handleFeedback = (isPositive) => {
    // TODO: Implement feedback collection
    console.log(`Feedback received: ${isPositive ? "Positive" : "Negative"}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">AI Tagline Generator for Donation Requests</h1>
      <p className="text-xl mb-6">Crafting persuasive messages to inspire generosity</p>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Request Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label htmlFor="reason" className="block text-sm font-medium mb-1">
                  Reason for request
                </label>
                <Textarea
                  id="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Enter the reason for your donation request"
                />
              </div>
              <div>
                <label htmlFor="amount" className="block text-sm font-medium mb-1">
                  Amount needed
                </label>
                <Input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter the amount needed"
                />
              </div>
              <div>
                <label htmlFor="urgency" className="block text-sm font-medium mb-1">
                  Urgency
                </label>
                <Select onValueChange={setUrgency}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select urgency level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={handleGenerateTagline}>Generate Tagline</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Generated Tagline</CardTitle>
          </CardHeader>
          <CardContent>
            {generatedTagline && (
              <div className="space-y-4">
                <p className="text-lg font-medium">{generatedTagline}</p>
                <div>
                  <p className="text-sm font-medium mb-1">Sentiment Score</p>
                  <div className="bg-gray-200 h-2 rounded-full">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${sentimentScore * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={() => handleFeedback(true)}>
                    <ThumbsUp className="w-4 h-4 mr-2" /> Helpful
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleFeedback(false)}>
                    <ThumbsDown className="w-4 h-4 mr-2" /> Not Helpful
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;