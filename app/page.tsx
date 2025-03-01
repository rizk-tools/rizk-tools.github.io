'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Shield, Code, Clock, FileCheck, AlertCircle, Activity, Zap } from "lucide-react";
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
            <h1 className="font-mono text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-100">
              Build AI Agents That Stay in Bounds
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Rizk lets developers bake policy compliance into AI agents with a few lines of code—so you can innovate fearlessly.
            </p>

            <div className="flex flex-col items-center gap-4">
              <Button 
                className="rounded-full bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg"
                onClick={() => document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Early Access →
              </Button>
              <p className="text-sm text-gray-300">
                Join the 50+ developers in our open-source community
              </p>
            </div>
          </div>
        </div>

        {/* The Problem Section */}
        <div className="bg-gradient-to-b from-gray-900 to-black py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">The Problem</h2>
              
              <Card className="bg-gray-800/60 border-gray-700 p-8 mb-10 backdrop-blur-sm">
                <p className="text-xl italic text-gray-200 mb-4">
                  &quot;I want to push AI&apos;s limits, not waste time reinventing guardrails.&quot;
                </p>
                <p className="text-right text-gray-400">– Actual feedback from an AI engineer</p>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Manual compliance checks slow down development",
                    icon: <Clock className="w-5 h-5 text-red-400" />
                  },
                  {
                    title: "API-based tools leak sensitive data",
                    icon: <AlertCircle className="w-5 h-5 text-red-400" />
                  },
                  {
                    title: "No standard way to version/test policies",
                    icon: <FileCheck className="w-5 h-5 text-red-400" />
                  },
                  {
                    title: "Security teams breathing down your neck",
                    icon: <Shield className="w-5 h-5 text-red-400" />
                  }
                ].map((pain, index) => (
                  <Card key={index} className="bg-gray-800/40 border-gray-700 p-5 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0">❌</div>
                      <div className="flex items-center gap-2">
                        {pain.icon}
                        <p className="text-gray-200">{pain.title}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* The Solution Section */}
        <div className="bg-gradient-to-b from-black to-gray-900 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">The Solution</h2>
              <h3 className="text-2xl font-semibold mb-4 text-blue-300">Compliance as Code for AI Agents</h3>
              <p className="text-xl text-gray-200">
                Define policies in code. Enforce them at runtime. Sleep well at night.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="bg-gray-800/80 border-gray-700 p-8 backdrop-blur-sm">
                <div className="h-12 w-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-6">
                  <Code className="w-6 h-6 text-blue-300" />
                </div>
                <h3 className="text-lg mb-3 font-semibold text-white">Code-Driven Guardrails</h3>
                <p className="text-gray-200 text-sm leading-relaxed mb-4">
                  Write policies like you write tests—version-controlled, reusable, and CI/CD-ready.
                </p>
                {/* <div className="bg-gray-900 p-3 rounded-md font-mono text-xs text-gray-300 overflow-x-auto">
                  <pre>{`policies:
  - rule: block_ssn
    type: regex
    pattern: \\d{3}-\\d{2}-\\d{4}
  - rule: prevent_harm
    type: llm_check
    system_prompt: "Is this response harmful? (Y/N)"`}</pre>
                </div> */ }
              </Card>
              
              <Card className="bg-gray-800/80 border-gray-700 p-8 backdrop-blur-sm">
                <div className="h-12 w-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-blue-300" />
                </div>
                <h3 className="text-lg mb-3 font-semibold text-white">Real-Time Enforcement</h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  A lightweight SDK that runs locally—<span className="font-semibold">no data leaks</span>, <span className="font-semibold">no added latency</span>.
                </p>
              </Card>
              
              <Card className="bg-gray-800/80 border-gray-700 p-8 backdrop-blur-sm">
                <div className="h-12 w-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-6">
                  <FileCheck className="w-6 h-6 text-blue-300" />
                </div>
                <h3 className="text-lg mb-3 font-semibold text-white">Audit-Ready, Always</h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  Auto-generated compliance reports make security teams smile.
                </p>
              </Card>
            </div>
          </div>
        </div>

        {/* Why Developers Love Rizk */}
        <div className="bg-gradient-to-b from-gray-900 to-black py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">Why Developers ❤️ Rizk</h2>
              
              <div className="overflow-x-auto mb-12">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="py-4 px-4 text-left text-gray-300"></th>
                      <th className="py-4 px-4 text-left text-gray-300">Rizk</th>
                      <th className="py-4 px-4 text-left text-gray-300">DIY Scripts</th>
                      <th className="py-4 px-4 text-left text-gray-300">API-Based Tools</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 text-gray-300 font-medium">Data Privacy</td>
                      <td className="py-3 px-4 text-green-400">✅ Local</td>
                      <td className="py-3 px-4 text-green-400">✅ Local</td>
                      <td className="py-3 px-4 text-red-400">❌ External</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 text-gray-300 font-medium">Latency</td>
                      <td className="py-3 px-4 text-green-400">&lt;5ms</td>
                      <td className="py-3 px-4 text-yellow-400">Variable</td>
                      <td className="py-3 px-4 text-red-400">+100ms</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 text-gray-300 font-medium">Maintenance</td>
                      <td className="py-3 px-4 text-green-400">Auto-updates</td>
                      <td className="py-3 px-4 text-red-400">High</td>
                      <td className="py-3 px-4 text-red-400">High</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 text-gray-300 font-medium">Framework Support</td>
                      <td className="py-3 px-4 text-green-400">Any</td>
                      <td className="py-3 px-4 text-red-400">Limited</td>
                      <td className="py-3 px-4 text-red-400">Limited</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              {/* <Card className="bg-gray-800/60 border-gray-700 p-8 backdrop-blur-sm">
                <p className="text-xl italic text-gray-200 mb-4">
                  &quot;Rizk cut our compliance setup from 3 weeks to 3 hours. Finally, a dev tool that doesn&apos;t treat security as an afterthought.&quot;
                </p>
                <p className="text-right text-gray-400">– CTO, AI Startup</p>
              </Card> */ }
            </div>
          </div>
        </div>

        {/* For Security Teams */}
        <div className="bg-gradient-to-b from-black to-gray-900 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-center text-white">For Security Teams</h2>
              <h3 className="text-2xl font-semibold mb-8 text-center text-blue-300">Trust, But Verify</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Shield className="w-6 h-6 text-blue-300" />,
                    title: "Full audit trails of every agent decision"
                  },
                  {
                    icon: <FileCheck className="w-6 h-6 text-blue-300" />,
                    title: "Pre-built templates for GDPR, HIPAA, SOC2"
                  },
                  {
                    icon: <Activity className="w-6 h-6 text-blue-300" />,
                    title: "Continuous compliance monitoring"
                  }
                ].map((feature, index) => (
                  <Card key={index} className="bg-gray-800/40 border-gray-700 p-6 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                        {feature.icon}
                      </div>
                      <p className="text-gray-200">🛡️ {feature.title}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Get Started Section */}
        <div className="bg-gradient-to-b from-gray-900 to-black py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Get Started in 2 Minutes</h2>
              
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6 mb-6 font-mono text-sm text-gray-300 overflow-x-auto">
                <div className="mb-4">
                  <span className="text-gray-400"># Install the SDK</span>
                  <pre className="mt-1">pip install rizk-sdk</pre>
                </div>
                <div>
                  <span className="text-gray-400"># Add guardrails</span>
                  <pre className="mt-1">{`from rizk import PolicyEngine

engine = PolicyEngine(policies="your_policies.co")
safe_response = engine.apply(your_ai_response)`}</pre>
                </div>
              </div>
              
              <p className="text-center text-gray-300 mb-12">
                Works with LangChain, LlamaIndex, AutoGPT, and more, even custom agents
              </p>
            </div>
          </div>
        </div>

        {/* The Vision */}
        <div className="bg-gradient-to-b from-black to-gray-900 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Building the Compliance Layer for AGI</h2>
              <p className="text-xl text-gray-200 leading-relaxed">
                Just as Kubernetes became the backbone of cloud-native apps, Rizk will power trustworthy AI—from chatbots to autonomous agents.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-b from-gray-900 to-black py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">FAQ</h2>
              
              <div className="space-y-8">
                {[
                  {
                    question: "Will this slow down my AI agents?",
                    answer: "Nope. Our benchmarks show <5ms overhead—faster than most logging systems."
                  },
                  {
                    question: "What if my policies need to change?",
                    answer: "Update your YAML file and deploy. Versioning included."
                  }
                  /* {
                    question: "Can I contribute policies?",
                    answer: "Yes! Our community policy library is already growing."
                  } */
                ].map((faq, index) => (
                  <Card key={index} className="bg-gray-800/40 border-gray-700 p-6 backdrop-blur-sm">
                    <h4 className="font-semibold text-lg mb-2 text-blue-300">&quot;{faq.question}&quot;</h4>
                    <p className="text-gray-200">{faq.answer}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div id="early-access" className="bg-gradient-to-b from-black to-gray-900 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Build AI That&apos;s Powerful <span className="text-blue-300">and</span> Responsible
              </h2>
              
              <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
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
                    {isSubmitting ? 'Sending...' : 'Start Free →'}
                  </Button>
                </div>
              </form>
              
              {/* <div className="text-gray-400 text-sm">
                Backed by [Angel Investor Logos] | Loved by AI teams at [Early Adopter Logos]
              </div> */}
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
