import { PolicyLayout } from "@/components/sections/policy-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      lastUpdated="December 15, 2024"
      description="This Privacy Policy describes how we collect, use, and protect your personal information when you use our e-commerce platform."
    >
      <div className="space-y-8">
        {/* Information We Collect */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span className="text-blue-600">1.</span>
              <span>Information We Collect</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Personal Information</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Name, email address, phone number</li>
                <li>Billing and shipping addresses</li>
                <li>
                  Payment information (processed securely by our payment
                  providers)
                </li>
                <li>Account credentials and preferences</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Usage Information</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Browsing history and product interactions</li>
                <li>Device information and IP address</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Purchase history and transaction details</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* How We Use Your Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span className="text-blue-600">2.</span>
              <span>How We Use Your Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Process and fulfill your orders</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>
                Send order confirmations, shipping updates, and important
                notices
              </li>
              <li>
                Personalize your shopping experience and product recommendations
              </li>
              <li>Improve our website, products, and services</li>
              <li>Prevent fraud and ensure platform security</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </CardContent>
        </Card>

        {/* Information Sharing */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span className="text-blue-600">3.</span>
              <span>Information Sharing and Disclosure</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">We may share your information with:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>
                <strong>Service Providers:</strong> Payment processors, shipping
                companies, and technology providers
              </li>
              <li>
                <strong>Business Partners:</strong> Trusted partners who help us
                operate our business
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to
                protect our rights
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with mergers,
                acquisitions, or asset sales
              </li>
            </ul>
            <p className="text-gray-600 font-medium">
              We never sell your personal information to third parties for
              marketing purposes.
            </p>
          </CardContent>
        </Card>

        {/* Data Security */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span className="text-blue-600">4.</span>
              <span>Data Security</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              We implement appropriate security measures to protect your
              personal information:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>SSL encryption for data transmission</li>
              <li>Secure payment processing through PCI-compliant providers</li>
              <li>Regular security audits and monitoring</li>
              <li>Access controls and employee training</li>
              <li>Data backup and recovery procedures</li>
            </ul>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span className="text-blue-600">5.</span>
              <span>Your Rights and Choices</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>
                <strong>Access:</strong> Request access to your personal
                information
              </li>
              <li>
                <strong>Correction:</strong> Update or correct inaccurate
                information
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your personal
                information
              </li>
              <li>
                <strong>Portability:</strong> Request a copy of your data in a
                portable format
              </li>
              <li>
                <strong>Marketing Opt-out:</strong> Unsubscribe from marketing
                communications
              </li>
              <li>
                <strong>Cookie Management:</strong> Control cookie preferences
                through your browser
              </li>
            </ul>
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
              For privacy-related questions or requests, contact us:
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
