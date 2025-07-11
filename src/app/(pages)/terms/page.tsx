import { PolicyLayout } from '@/components/sections/policy-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, RefreshCw, CreditCard } from 'lucide-react';

export default function TermsOfService() {
  return (
    <PolicyLayout
      title="Terms of Service"
      lastUpdated="December 15, 2024"
      description="These Terms of Service govern your use of our e-commerce platform and the purchase of products from our store."
    >
      <div className="space-y-8">
        {/* Acceptance of Terms */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span className="text-blue-600">1.</span>
              <span>Acceptance of Terms</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              By accessing and using our website, you accept and agree to be bound by the terms and
              provision of this agreement. If you do not agree to abide by the above, please do not
              use this service.
            </p>
          </CardContent>
        </Card>

        {/* Account Terms */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span className="text-blue-600">2.</span>
              <span>Account Terms</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>You must be 18 years or older to create an account</li>
              <li>You are responsible for maintaining the security of your account</li>
              <li>You must provide accurate and complete information</li>
              <li>You are responsible for all activities under your account</li>
              <li>We reserve the right to suspend or terminate accounts that violate our terms</li>
            </ul>
          </CardContent>
        </Card>

        {/* Products and Pricing */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span className="text-blue-600">3.</span>
              <span>Products and Pricing</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>All prices are subject to change without notice</li>
              <li>We strive to display accurate product information and pricing</li>
              <li>We reserve the right to correct any errors in pricing or product information</li>
              <li>Product availability is subject to change</li>
              <li>We reserve the right to limit quantities purchased</li>
            </ul>
          </CardContent>
        </Card>

        {/* Payment Terms */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CreditCard className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600">4.</span>
              <span>Payment Terms</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Payment is due at the time of purchase</li>
              <li>We accept major credit cards, PayPal, and other approved payment methods</li>
              <li>All payments are processed securely through encrypted connections</li>
              <li>You authorize us to charge your payment method for all purchases</li>
              <li>Additional fees may apply for international transactions</li>
            </ul>
          </CardContent>
        </Card>

        {/* Exchange and Refund Policy */}
        <Card className="border-2 border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <RefreshCw className="w-5 h-5 text-green-600" />
              <span className="text-green-600">5.</span>
              <span>Exchange and Refund Policy</span>
              <Badge variant="secondary" className="ml-2">
                Important
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Return Window */}
            <div>
              <h4 className="font-semibold mb-3 text-green-800">Return Window</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>
                  <strong>30-day return policy</strong> for most items from delivery date
                </li>
                <li>
                  <strong>14-day return policy</strong> for electronics and personal care items
                </li>
                <li>
                  <strong>7-day return policy</strong> for perishable goods
                </li>
              </ul>
            </div>

            {/* Return Conditions */}
            <div>
              <h4 className="font-semibold mb-3 text-green-800">Return Conditions</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Items must be in original condition and packaging</li>
                <li>Items must include all original accessories and documentation</li>
                <li>Items must not show signs of wear or damage</li>
                <li>Custom or personalized items cannot be returned</li>
                <li>Sale items may have different return policies</li>
              </ul>
            </div>

            {/* Exchange Process */}
            <div>
              <h4 className="font-semibold mb-3 text-green-800">Exchange Process</h4>
              <ol className="list-decimal list-inside space-y-1 text-gray-700">
                <li>Contact customer service to initiate return/exchange</li>
                <li>Receive return authorization and shipping label</li>
                <li>Package item securely with original packaging</li>
                <li>Ship item using provided return label</li>
                <li>Refund/exchange processed within 5-7 business days of receipt</li>
              </ol>
            </div>

            {/* Refund Methods */}
            <div>
              <h4 className="font-semibold mb-3 text-green-800">Refund Methods</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Refunds issued to original payment method</li>
                <li>Store credit available for exchanges</li>
                <li>Shipping costs are non-refundable (unless item is defective)</li>
                <li>Return shipping costs are customers responsibility</li>
              </ul>
            </div>

            {/* Non-Returnable Items */}
            <div>
              <h4 className="font-semibold mb-3 text-red-800">Non-Returnable Items</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Personalized or custom-made products</li>
                <li>Perishable goods (food, flowers, etc.)</li>
                <li>Intimate or sanitary goods</li>
                <li>Hazardous materials</li>
                <li>Digital downloads or software</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Shipping and Delivery */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span className="text-blue-600">6.</span>
              <span>Shipping and Delivery</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Shipping costs and delivery times vary by location and method</li>
              <li>We are not responsible for delays caused by shipping carriers</li>
              <li>Risk of loss transfers to you upon delivery</li>
              <li>You must inspect items upon delivery and report damage immediately</li>
              <li>Undelivered packages returned to sender may incur additional fees</li>
            </ul>
          </CardContent>
        </Card>

        {/* Limitation of Liability */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <span className="text-blue-600">7.</span>
              <span>Limitation of Liability</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Our liability is limited to the maximum extent permitted by law. We are not liable
              for:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Indirect, incidental, or consequential damages</li>
              <li>Loss of profits, data, or business opportunities</li>
              <li>Damages exceeding the amount paid for the product</li>
              <li>Issues arising from misuse of products</li>
            </ul>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span className="text-blue-600">8.</span>
              <span>Contact Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              For questions about these terms or to initiate returns:
            </p>
            <div className="space-y-2 text-gray-600">
              <p>
                <strong>Customer Service:</strong> support@yourstore.com
              </p>
              <p>
                <strong>Returns Department:</strong> returns@yourstore.com
              </p>
              <p>
                <strong>Phone:</strong> 1-800-XXX-XXXX (Mon-Fri 9AM-6PM EST)
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
