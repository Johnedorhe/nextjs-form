"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { signUpSchema } from "../auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "sonner"

type SignUpProps = z.infer<typeof signUpSchema>;

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<SignUpProps>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { isSubmitting } = form.formState;

  const handleSignUp = (data: SignUpProps) => {
    console.log(data);
    form.reset();
    toast.success("Account has been created. Sign in to continue");
  };

  return (
    <div className="flex justify-center items-center min-h-[60vh] pt-12 pb-4">
      <Card className="w-full max-w-md shadow-md">
        <CardHeader className="space-y-1 pb-6">
          <CardTitle className="text-xl font-bold text-center">Sign Up</CardTitle>
          <CardDescription className="text-center">
            Create your account to get started.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(handleSignUp)} className="space-y-6">
            <FieldGroup className="space-y-4">
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel className="mb-1.5 inline-block">Name</FieldLabel>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      className="h-10 focus-visible:ring-1"
                      {...field}
                      aria-invalid={!!fieldState.error}
                    />
                    {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
                  </Field>
                )}
              />
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel className="mb-1.5 inline-block">Email</FieldLabel>
                    <Input
                      type="email"
                      placeholder="example@example.com"
                      className="h-10 focus-visible:ring-1"
                      {...field}
                      aria-invalid={!!fieldState.error}
                    />
                    {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
                  </Field>
                )}
              />
              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel className="mb-1.5 inline-block">Password</FieldLabel>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="h-10 pr-10 focus-visible:ring-1"
                        {...field}
                        aria-invalid={!!fieldState.error}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                    {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
                  </Field>
                )}
              />
              <Controller
                name="confirmPassword"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel className="mb-1.5 inline-block">Confirm Password</FieldLabel>
                    <div className="relative">
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="h-10 pr-10 focus-visible:ring-1"
                        {...field}
                        aria-invalid={!!fieldState.error}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                    {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
                  </Field>
                )}
              />
            </FieldGroup>
            <Button type="submit" className="w-full h-10 mt-2" disabled={isSubmitting}>
              {isSubmitting ? "Signing up..." : "Sign Up"}
            </Button>
          </form>
          <div className="text-center mt-6 text-sm">
            Already have an account?{' '}
              <Link href="/auth/sign-in" className="text-primary underline hover:no-underline font-medium">
                Sign In
              </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
