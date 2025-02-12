'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Shield, Terminal, FileText, Lock, Check, Activity, Box } from "lucide-react";
import { ToastProvider, Toast, ToastTitle, ToastDescription, ToastViewport } from "@/components/ui/toast";
import { supabase } from '@/lib/supabase';
import Image from 'next/image';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState({ title: '', description: '', type: 'success' as 'success' | 'error' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('demo_requests')
        .insert([{ email }]);

      if (error) throw error;

      setToastMessage({
        title: 'Success!',
        description: 'Thank you for your interest. Our team will contact you shortly.',
        type: 'success'
      });
      setEmail('');
    } catch (error) {
      console.error('Error submitting email:', error);
      setToastMessage({
        title: 'Error',
        description: 'There was an error submitting your request. Please try again later.',
        type: 'error'
      });
    } finally {
      setShowToast(true);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <nav className="border-b border-gray-700 fixed w-full z-50 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-center p-2">
          <div className="flex items-center gap-2">
            <Image 
              src="/Rizk.svg" 
              alt="Rizk Logo" 
              width={64}
              height={64}
              className="w-18 h-18" 
            />
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <div className="container mx-auto px-4 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="font-mono text-sm px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full inline-block">
              Vanta for AI Agents
            </span>
            
            <h1 className="font-mono text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-200">
              Secure your AI Agents from costly mistakes
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              The AI Firewall for production agents. Enterprise-grade security, 
              compliance, and risk management for your AI operations.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <Card className="bg-gray-800 border-gray-700 p-3 px-4 flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-300" />
                <span className="font-mono text-gray-100">SOC 2 Ready</span>
              </Card>
              <Card className="bg-gray-800 border-gray-700 p-3 px-4 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-blue-300" />
                <span className="font-mono text-gray-100">Python SDK</span>
              </Card>
              <Card className="bg-gray-800 border-gray-700 p-3 px-4 flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-300" />
                <span className="font-mono text-gray-100">Audit Reports</span>
              </Card>
            </div>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="rounded-full bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                />
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full bg-blue-500 hover:bg-blue-600 text-white min-w-[120px]"
                >
                  {isSubmitting ? 'Sending...' : 'Request Demo'}
                </Button>
              </div>
              <p className="text-sm text-gray-300 mt-2">
                Enterprise-ready security for your AI applications
              </p>
            </form>
          </div>
        </div>

        {/* Features Grid */}
        <div className="bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4 py-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gray-800/80 border-gray-700 p-8 backdrop-blur-sm">
                <div className="h-12 w-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-6">
                  <Lock className="w-6 h-6 text-blue-300" />
                </div>
                <h3 className="text-lg mb-3 font-semibold text-white">AI Firewall</h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  Real-time protection against harmful outputs and policy violations. Monitor and control your AI responses.
                </p>
              </Card>
              
              <Card className="bg-gray-800/80 border-gray-700 p-8 backdrop-blur-sm">
                <div className="h-12 w-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-6">
                  <Activity className="w-6 h-6 text-blue-300" />
                </div>
                <h3 className="text-lg mb-3 font-semibold text-white">Risk Analytics</h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  Advanced risk scoring and analytics. Get detailed insights into your AI&apos;s behavior.
                </p>
              </Card>
              
              <Card className="bg-gray-800/80 border-gray-700 p-8 backdrop-blur-sm">
                <div className="h-12 w-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-6">
                  <Box className="w-6 h-6 text-blue-300" />
                </div>
                <h3 className="text-lg mb-3 font-semibold text-white">Compliance Suite</h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  Built-in support for SOC 2, GDPR, and major compliance frameworks. Stay compliant with ease.
                </p>
              </Card>
            </div>

            {/* Enterprise Features */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-white">Enterprise-Ready Security</h2>
                <p className="text-gray-200">Built for companies that take AI safety seriously</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {[
                  {
                    title: "Comprehensive Audit Trails",
                    description: "Track every interaction with detailed logs and analytics"
                  },
                  {
                    title: "Policy Management",
                    description: "Define and enforce custom guardrails and content policies"
                  },
                  {
                    title: "Compliance Automation",
                    description: "Automated compliance checks and reporting"
                  },
                  {
                    title: "Risk Detection",
                    description: "Advanced threat detection and prevention"
                  }
                ].map((feature, index) => (
                  <Card key={index} className="bg-gray-800/80 border-gray-700 p-6 backdrop-blur-sm">
                    <div className="flex gap-4">
                      <div className="h-8 w-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-blue-300" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-white">{feature.title}</h4>
                        <p className="text-gray-200 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <ToastProvider>
        {showToast && (
          <Toast 
            className={`${
              toastMessage.type === 'error' ? 'bg-red-900/90' : 'bg-gray-800'
            } border-gray-700 text-white`} 
            onOpenChange={setShowToast}
          >
            <ToastTitle>{toastMessage.title}</ToastTitle>
            <ToastDescription>
              {toastMessage.description}
            </ToastDescription>
          </Toast>
        )}
        <ToastViewport />
      </ToastProvider>
    </div>
  );
}
