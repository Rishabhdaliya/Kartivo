import { PolicyLayout } from '@/components/sections/policy-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Cookie, Settings, Shield, BarChart3 } from 'lucide-react';

export default function CookiesPolicy() {
  return (
    <PolicyLayout
      title="Cookies Policy"
      lastUpdated="December 15, 2024"
      description="This Cookies Policy explains how we use cookies and similar technologies to recognize you when you visit our website."
    >
      <div className="space-y-8">
        {/* What Are Cookies */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Cookie className="w-5 h-5 text-amber-600" />
              <span className="text-blue-600">1.</span>
              <span>What Are Cookies?</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Cookies are small data files that are placed on your computer or mobile device when
              you visit a website. Cookies are widely used by website owners to make their websites
              work, or to work more efficiently, as well as to provide reporting information.
            </p>
            <p className="text-gray-600">
              We use both session cookies (which expire when you close your browser) and persistent
              cookies (which stay on your device until deleted or expired).
            </p>
          </CardContent>
        </Card>

        {/* Types of Cookies */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span className="text-blue-600">2.</span>
              <span>Types of Cookies We Use</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Essential Cookies */}
            <div className="border-l-4 border-red-500 pl-4">
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="w-4 h-4 text-red-500" />
                <h4 className="font-semibold text-red-700">Essential Cookies</h4>
                <Badge variant="destructive" className="text-xs">
                  Required
                </Badge>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                These cookies are necessary for the website to function and cannot be switched off.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                <li>Shopping cart functionality</li>
                <li>User authentication and security</li>
                <li>Payment processing</li>
                <li>Form submission and validation</li>
              </ul>
            </div>

            {/* Performance Cookies */}
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="flex items-center space-x-2 mb-2">
                <BarChart3 className="w-4 h-4 text-blue-500" />
                <h4 className="font-semibold text-blue-700">Performance Cookies</h4>
                <Badge variant="secondary" className="text-xs">
                  Optional
                </Badge>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                These cookies help us understand how visitors interact with our website.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                <li>Google Analytics for website traffic analysis</li>
                <li>Page load times and error tracking</li>
                <li>Popular content and user behavior</li>
                <li>A/B testing and optimization</li>
              </ul>
            </div>

            {/* Functional Cookies */}
            <div className="border-l-4 border-green-500 pl-4">
              <div className="flex items-center space-x-2 mb-2">
                <Settings className="w-4 h-4 text-green-500" />
                <h4 className="font-semibold text-green-700">Functional Cookies</h4>
                <Badge variant="secondary" className="text-xs">
                  Optional
                </Badge>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                These cookies enable enhanced functionality and personalization.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                <li>Language and region preferences</li>
                <li>Recently viewed products</li>
                <li>Wishlist and favorites</li>
                <li>Chat support functionality</li>
              </ul>
            </div>

            {/* Marketing Cookies */}
            <div className="border-l-4 border-purple-500 pl-4">
              <div className="flex items-center space-x-2 mb-2">
                <span className="w-4 h-4 bg-purple-500 rounded text-white text-xs flex items-center justify-center">
                  $
                </span>
                <h4 className="font-semibold text-purple-700">Marketing Cookies</h4>
                <Badge variant="secondary" className="text-xs">
                  Optional
                </Badge>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                These cookies are used to deliver relevant advertisements and track campaign
                effectiveness.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                <li>Facebook Pixel and Google Ads tracking</li>
                <li>Retargeting and remarketing campaigns</li>
                <li>Social media integration</li>
                <li>Email marketing optimization</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Third-Party Cookies */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span className="text-blue-600">3.</span>
              <span>Third-Party Cookies</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              We may allow third-party companies to set cookies on our website for:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Analytics Services</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                  <li>Google Analytics</li>
                  <li>Hotjar</li>
                  <li>Adobe Analytics</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Advertising Partners</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                  <li>Google Ads</li>
                  <li>Facebook Ads</li>
                  <li>Amazon Advertising</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Social Media</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                  <li>Facebook Like/Share buttons</li>
                  <li>Twitter embedded content</li>
                  <li>Instagram feeds</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Support Services</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                  <li>Live chat widgets</li>
                  <li>Customer feedback tools</li>
                  <li>Help desk systems</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Managing Cookies */}
        <Card className="border-2 border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600">4.</span>
              <span>Managing Your Cookie Preferences</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Cookie Consent Manager</h4>
              <p className="text-gray-600 text-sm mb-3">
                You can manage your cookie preferences using our cookie consent tool:
              </p>
              <Button variant="outline" className="mb-4 bg-transparent">
                <Settings className="w-4 h-4 mr-2" />
                Manage Cookie Preferences
              </Button>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Browser Settings</h4>
              <p className="text-gray-600 text-sm mb-2">
                You can also control cookies through your browser settings:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                <li>
                  <strong>Chrome:</strong> Settings → Privacy and Security → Cookies
                </li>
                <li>
                  <strong>Firefox:</strong> Preferences → Privacy & Security → Cookies
                </li>
                <li>
                  <strong>Safari:</strong> Preferences → Privacy → Cookies
                </li>
                <li>
                  <strong>Edge:</strong> Settings → Cookies and Site Permissions
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-amber-800 text-sm">
                <strong>Note:</strong> Disabling certain cookies may affect website functionality
                and your user experience.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Updates to Policy */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span className="text-blue-600">5.</span>
              <span>Updates to This Policy</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              We may update this Cookies Policy from time to time to reflect changes in our
              practices or for other operational, legal, or regulatory reasons. We will notify you
              of any material changes by posting the updated policy on our website and updating the
              Last Updated date.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span className="text-blue-600">6.</span>
              <span>Contact Us</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              If you have questions about our use of cookies, please contact us:
            </p>
            <div className="space-y-2 text-gray-600">
              <p>
                <strong>Email:</strong> privacy@yourstore.com
              </p>
              <p>
                <strong>Phone:</strong> 1-800-XXX-XXXX
              </p>
              <p>
                <strong>Address:</strong> 123 Commerce Street, City, State 12345
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </PolicyLayout>
  );
}
