"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";

export function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      const userInfo = {
        fullName: data.fullName,
        email: data.email,
        password: data.password,
      };

      const res = await axios.post(
        "http://localhost:3000/signup",
        userInfo
      );

      console.log("Response:", res.data);

      if (res?.data) {
        // ✅ Save in localStorage
        localStorage.setItem("user", JSON.stringify(res.data));

        // ✅ Show success toast
        toast.success("Signup successful 🎉", {
          description: "Account created successfully",
        });

        // ✅ Reset form
        reset({
          fullName: "",
          email: "",
          password: "",
        });

        // ✅ Redirect after short delay
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }
    } catch (err) {
      console.error(err);

      if (err.response) {
        toast.error(err.response.data.message || "Signup failed ❌");
      } else {
        toast.error("Server error ❌");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="w-full flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">

          <Card className="border border-gray-200 shadow-xl bg-white/95 backdrop-blur-sm">
            
            <CardHeader className="space-y-3 pb-8">
              <CardTitle className="text-2xl font-bold text-center">
                Create Account
              </CardTitle>
              <CardDescription className="text-center text-gray-600">
                Join us today by creating your account
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                {/* Name */}
                <div>
                  <Label>Full Name</Label>
                  <div className="relative mt-1">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="John Doe"
                      className="pl-10"
                      disabled={isLoading}
                      {...register("fullName", {
                        required: "Name is required",
                      })}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-red-500 text-sm">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <Label>Email</Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      className="pl-10"
                      disabled={isLoading}
                      {...register("email", {
                        required: "Email is required",
                      })}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <Label>Password</Label>
                  <div className="relative mt-1">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password"
                      className="pl-10 pr-10"
                      disabled={isLoading}
                      {...register("password", {
                        required: "Password is required",
                      })}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-sm">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full text-white"
                >
                  {isLoading ? "Creating account..." : "Sign Up"}
                </Button>

                {/* Divider */}
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-px bg-gray-300" />
                  <span className="text-xs text-gray-600">OR</span>
                  <div className="flex-1 h-px bg-gray-300" />
                </div>

                {/* Google */}
                <Button type="button" variant="outline" className="w-full">
                  Sign up with Google
                </Button>
              </form>

              {/* Footer */}
              <div className="mt-6 text-center text-sm">
                Already have an account?{" "}
                <Link to="/login" className="font-semibold">
                  Sign in
                </Link>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 text-center text-xs text-gray-500">
            Protected by enterprise-grade security
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}