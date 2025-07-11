import type React from 'react';
import { Calendar, FileText } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

interface PolicyLayoutProps {
  title: string;
  lastUpdated: string;
  description: string;
  children: React.ReactNode;
}

export function PolicyLayout({ title, lastUpdated, description, children }: PolicyLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <FileText className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto mb-4">{description}</p>
            <div className="flex items-center justify-center text-sm text-gray-500">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
            <div className="grid md:grid-cols-2 gap-2 text-sm">
              {title === 'Privacy Policy' && (
                <>
                  <a href="#section-1" className="text-blue-600 hover:underline">
                    1. Information We Collect
                  </a>
                  <a href="#section-2" className="text-blue-600 hover:underline">
                    2. How We Use Your Information
                  </a>
                  <a href="#section-3" className="text-blue-600 hover:underline">
                    3. Information Sharing
                  </a>
                  <a href="#section-4" className="text-blue-600 hover:underline">
                    4. Data Security
                  </a>
                  <a href="#section-5" className="text-blue-600 hover:underline">
                    5. Your Rights
                  </a>
                  <a href="#section-6" className="text-blue-600 hover:underline">
                    6. Contact Us
                  </a>
                </>
              )}
              {title === 'Terms of Service' && (
                <>
                  <a href="#section-1" className="text-blue-600 hover:underline">
                    1. Acceptance of Terms
                  </a>
                  <a href="#section-2" className="text-blue-600 hover:underline">
                    2. Account Terms
                  </a>
                  <a href="#section-3" className="text-blue-600 hover:underline">
                    3. Products and Pricing
                  </a>
                  <a href="#section-4" className="text-blue-600 hover:underline">
                    4. Payment Terms
                  </a>
                  <a href="#section-5" className="text-blue-600 hover:underline">
                    5. Exchange & Refund Policy
                  </a>
                  <a href="#section-6" className="text-blue-600 hover:underline">
                    6. Shipping and Delivery
                  </a>
                  <a href="#section-7" className="text-blue-600 hover:underline">
                    7. Limitation of Liability
                  </a>
                  <a href="#section-8" className="text-blue-600 hover:underline">
                    8. Contact Information
                  </a>
                </>
              )}
              {title === 'Cookies Policy' && (
                <>
                  <a href="#section-1" className="text-blue-600 hover:underline">
                    1. What Are Cookies?
                  </a>
                  <a href="#section-2" className="text-blue-600 hover:underline">
                    2. Types of Cookies
                  </a>
                  <a href="#section-3" className="text-blue-600 hover:underline">
                    3. Third-Party Cookies
                  </a>
                  <a href="#section-4" className="text-blue-600 hover:underline">
                    4. Managing Preferences
                  </a>
                  <a href="#section-5" className="text-blue-600 hover:underline">
                    5. Policy Updates
                  </a>
                  <a href="#section-6" className="text-blue-600 hover:underline">
                    6. Contact Us
                  </a>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Content */}
        {children}

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            This document was last updated on {lastUpdated}. For questions or concerns, please
            contact our support team.
          </p>
          <div className="mt-4 space-x-4">
            <Link href="/privacy" className="text-blue-600 hover:underline text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-blue-600 hover:underline text-sm">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-blue-600 hover:underline text-sm">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
