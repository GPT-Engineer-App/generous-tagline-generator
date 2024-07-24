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
import { Plus, Trash2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const Index = () => {
  const [requests, setRequests] = useState([{ reason: "", amount: "", urgency: "" }]);
  const [generatedTaglines, setGeneratedTaglines] = useState([]);
  const [selectedTagline, setSelectedTagline] = useState("");
  const [sentimentScore, setSentimentScore] = useState(null);
  const [feedbackRating, setFeedbackRating] = useState(3);

  const handleAddRequest = () => {
    setRequests([...requests, { reason: "", amount: "", urgency: "" }]);
  };

  const handleRemoveRequest = (index) => {
    const newRequests = requests.filter((_, i) => i !== index);
    setRequests(newRequests);
  };

  const handleRequestChange = (index, field, value) => {
    const newRequests = [...requests];
    newRequests[index][field] = value;
    setRequests(newRequests);
  };

  const handleGenerateTagline = () => {
    // TODO: Implement actual tagline generation and sentiment analysis
    const mockTaglines = [
      "Your generosity can make a world of difference today!",
      "Be the change: Support our cause and transform lives!",
      "Every donation counts: Join us in making a lasting impact!",
      "Together, we can turn compassion into action!",
      "Empower change with your contribution!",
      "Small acts, big impact: Donate now and see the difference!",
      "Your kindness has the power to change lives!",
      "Be a hero in someone's story: Donate today!",
      "Join our mission to create a better tomorrow!",
      "Your support fuels hope and transforms communities!"
    ];
    const mockSentimentScore = 0.8;
    setGeneratedTaglines(mockTaglines);
    setSentimentScore(mockSentimentScore);
    setSelectedTagline(mockTaglines[0]); // Set the first tagline as default selected
  };

  const handleTaglineSelection = (tagline) => {
    setSelectedTagline(tagline);
  };

  const handleFeedback = () => {
    // TODO: Implement feedback collection with rating
    console.log(`Feedback received: ${feedbackRating}`);
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
              {requests.map((request, index) => (
                <div key={index} className="space-y-4 pb-4 border-b">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Request {index + 1}</h3>
                    {requests.length > 1 && (
                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => handleRemoveRequest(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  <div>
                    <label htmlFor={`reason-${index}`} className="block text-sm font-medium mb-1">
                      Reason for request
                    </label>
                    <Textarea
                      id={`reason-${index}`}
                      value={request.reason}
                      onChange={(e) => handleRequestChange(index, "reason", e.target.value)}
                      placeholder="Enter the reason for your donation request"
                    />
                  </div>
                  <div>
                    <label htmlFor={`amount-${index}`} className="block text-sm font-medium mb-1">
                      Amount needed
                    </label>
                    <Input
                      id={`amount-${index}`}
                      type="number"
                      value={request.amount}
                      onChange={(e) => handleRequestChange(index, "amount", e.target.value)}
                      placeholder="Enter the amount needed"
                    />
                  </div>
                  <div>
                    <label htmlFor={`urgency-${index}`} className="block text-sm font-medium mb-1">
                      Urgency
                    </label>
                    <Select
                      onValueChange={(value) => handleRequestChange(index, "urgency", value)}
                      value={request.urgency}
                    >
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
                </div>
              ))}
              <Button type="button" onClick={handleAddRequest} className="w-full">
                <Plus className="mr-2 h-4 w-4" /> Add Another Request
              </Button>
              <Button type="button" onClick={handleGenerateTagline} className="w-full">Generate Taglines</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Generated Taglines</CardTitle>
          </CardHeader>
          <CardContent>
            {generatedTaglines.length > 0 && (
              <div className="space-y-4">
                <RadioGroup onValueChange={handleTaglineSelection} defaultValue={selectedTagline}>
                  {generatedTaglines.map((tagline, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem value={tagline} id={`tagline-${index}`} />
                      <Label htmlFor={`tagline-${index}`}>{tagline}</Label>
                    </div>
                  ))}
                </RadioGroup>
                <div>
                  <p className="text-sm font-medium mb-1">Sentiment Score</p>
                  <div className="bg-gray-200 h-2 rounded-full">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${sentimentScore * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Rate this tagline:</p>
                  <Slider
                    value={[feedbackRating]}
                    onValueChange={(value) => setFeedbackRating(value[0])}
                    max={5}
                    step={1}
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                  </div>
                </div>
                <Button onClick={handleFeedback} className="w-full">
                  Submit Feedback
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;