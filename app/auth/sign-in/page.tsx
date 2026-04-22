"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { signInSchema } from "../auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type signInProps = z.infer<typeof signInSchema>;

export default function SignIn() {
  const form = useForm<signInProps>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { isSubmitting } = form.formState;

  const handleSignIn = (data: signInProps) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center min-h-[60vh] p-4">
      <Card className="w-full max-w-md shadow-md pb-8">
        <CardHeader className="space-y-1 pb-6">
          <CardTitle className="text-xl font-bold text-center">Sign In</CardTitle>
          <CardDescription className="text-center">
            Enter your details to access your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(handleSignIn)} className="space-y-6">
            <FieldGroup className="space-y-1">
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel className="mb-1.5 inline-block">Email</FieldLabel>
                    <Input 
                      type="email" 
                      placeholder="example@example.com" 
                      className="h-10"
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
                    <Input 
                      type="password" 
                      placeholder="••••••••" 
                      className="h-10"
                      {...field} 
                      aria-invalid={!!fieldState.error}
                    />
                    {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
                  </Field>
                )}
              />
            </FieldGroup>
            <Button type="submit" className="w-full h-10 mt-2" disabled={isSubmitting}>
              {isSubmitting ? "Signing in..." : "Sign In"}
            </Button>
          </form>
          <div className="text-center mt-4 text-sm">
            Don&apos;t have an account?{' '}
            <Link href="/auth/sign-up" className="text-primary underline hover:no-underline">Sign Up</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
