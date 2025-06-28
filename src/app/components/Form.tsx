"use client";
import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { host_url } from "../constants/url";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";
import { generateTemplate } from "../constants/template";

type form_props = {
  set_result: Dispatch<SetStateAction<string>>;
  toggle: Dispatch<SetStateAction<boolean>>;
};
export interface FormData {
  applying_company: string;
  applying_role: string;
  cgpa: string;
  college: string;
  contact: string;
  current_company: string;
  current_role: string;
  email: string;
  first_name: string;
  job_id: string;
  job_link: string;
  resume_link: string;
  short_description: string;
  referee_name: string;
}

const Form = ({ set_result, toggle }: form_props) => {
  const [loading, setloading] = useState<boolean>(true);
  const [error, seterror] = useState<boolean>(false);

  const [formData, setformData] = useState<FormData>({
    referee_name: "",
    applying_company: "",
    applying_role: "",
    cgpa: "",
    college: "",
    contact: "",
    current_company: "",
    current_role: "",
    email: "",
    first_name: "",
    job_id: "",
    job_link: "",
    resume_link: "",
    short_description: "",
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`${host_url}/user`);
        Object.entries(data[0]).map((obj) => {
          if (obj[1]) {
            setformData((prev: FormData) => ({
              ...prev,
              [obj[0]]: obj[1],
            }));
          }
        });
        setloading(false);
      } catch (error) {
        console.log(error);
        seterror(true);
      }
    };
    getData();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setformData((prev: FormData) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    const result = generateTemplate({ data: formData });
    set_result(result);
    toggle(false);
  };
  if (error) {
    return <ErrorComponent message="Something Failed" />;
  }
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Referal template Generator
            </CardTitle>
            <CardDescription className="text-center">
              Please fill out all the required information for your Referal
              template.
              <br />
              <span className="text-red-800">
                Permanent details are required only once
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Application Details Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                  Application Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="applying_company">Refree Name *</Label>
                    <Input
                      id="refree_name"
                      name="referee_name"
                      type="text"
                      value={formData.referee_name}
                      onChange={handleInputChange}
                      placeholder="Enter the Refree Name"
                      //required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="applying_company">Applying Company *</Label>
                    <Input
                      id="applying_company"
                      name="applying_company"
                      type="text"
                      value={formData.applying_company}
                      onChange={handleInputChange}
                      placeholder="Enter the company you're applying to"
                      //required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="applying_role">Applying Role *</Label>
                    <Input
                      id="applying_role"
                      name="applying_role"
                      type="text"
                      value={formData.applying_role}
                      onChange={handleInputChange}
                      placeholder="Enter the role you're applying for"
                      //required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="job_id">Job ID *</Label>
                    <Input
                      id="job_id"
                      name="job_id"
                      type="text"
                      value={formData.job_id}
                      onChange={handleInputChange}
                      placeholder="Enter the job ID"
                      //required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="job_link">Job Link</Label>
                    <Input
                      id="job_link"
                      name="job_link"
                      type="url"
                      value={formData.job_link}
                      onChange={handleInputChange}
                      placeholder="Enter the job posting URL"
                    />
                  </div>
                </div>
              </div>

              {/* Personal Information Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first_name">First Name *</Label>
                    <Input
                      id="first_name"
                      name="first_name"
                      type="text"
                      value={formData.first_name}
                      onChange={handleInputChange}
                      placeholder="Enter your first name"
                      //required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      //required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact">Contact Number *</Label>
                  <Input
                    id="contact"
                    name="contact"
                    type="tel"
                    value={formData.contact}
                    onChange={handleInputChange}
                    placeholder="Enter your contact number"
                    //required
                  />
                </div>
              </div>

              {/* Education Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                  Education *
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="college">College/University *</Label>
                    <Input
                      id="college"
                      name="college"
                      type="text"
                      value={formData.college}
                      onChange={handleInputChange}
                      placeholder="Enter your college/university name"
                      //required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cgpa">CGPA/GPA *</Label>
                    <Input
                      id="cgpa"
                      name="cgpa"
                      type="number"
                      step="0.01"
                      min="0"
                      max="10"
                      value={formData.cgpa}
                      onChange={handleInputChange}
                      placeholder="Enter your CGPA (e.g., 8.5)"
                      //required
                    />
                  </div>
                </div>
              </div>

              {/* Current Position Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                  Current Position *
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="current_company">Current Company *</Label>
                    <Input
                      id="current_company"
                      name="current_company"
                      type="text"
                      value={formData.current_company}
                      onChange={handleInputChange}
                      placeholder="Enter your current company name"
                      //required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="current_role">Current Role *</Label>
                    <Input
                      id="current_role"
                      name="current_role"
                      type="text"
                      value={formData.current_role}
                      onChange={handleInputChange}
                      placeholder="Enter your current role/position"
                      //required
                    />
                  </div>
                </div>
              </div>

              {/* Additional Information Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                  Additional Information *
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="resume_link">Resume Link *</Label>
                  <Input
                    id="resume_link"
                    name="resume_link"
                    type="url"
                    value={formData.resume_link}
                    onChange={handleInputChange}
                    placeholder="Enter your resume URL (Google Drive, Dropbox, etc.)"
                    //required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="short_description">Short Description *</Label>
                  <Textarea
                    id="short_description"
                    name="short_description"
                    value={formData.short_description}
                    onChange={handleInputChange}
                    placeholder="Brief description about yourself, your experience, or why you're interested in this role..."
                    className="min-h-[120px] resize-none"
                    //required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-6">
                <Button type="submit" className="w-full md:w-auto px-8 py-2">
                  Submit Application
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Form;
