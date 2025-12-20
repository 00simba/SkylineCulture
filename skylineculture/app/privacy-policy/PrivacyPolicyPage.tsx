export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-black">

      {/* Breadcrumb */}
      <div className="text-sm text-black mb-5">
        <a href="/" className="text-black">Home</a> / <span>Privacy Policy</span>
      </div>

      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="text-gray-700 mb-10">
        At SkylineCulture, your privacy is very important to us. This Privacy Policy
        explains how we collect, use, protect, and store your information when you
        use our website, purchase products, or submit vehicle listings.
      </p>

      {/* 1. Information We Collect */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>

        <p className="mb-2">We may collect the following information:</p>

        <ul className="list-disc ml-6 space-y-1">
          <li><span className="font-semibold">Contact Information:</span> Name, email address, phone number</li>
          <li><span className="font-semibold">Listing Information:</span> Vehicle details, photos, descriptions, and location</li>
          <li><span className="font-semibold">Order Information:</span> Shipping address, billing details, and items purchased</li>
          <li><span className="font-semibold">Payment Details:</span> Processed securely through Stripe (we do not store credit card data)</li>
          <li><span className="font-semibold">Browser & Device Data:</span> IP address, device type, pages visited, and cookies</li>
        </ul>
      </section>

      {/* 2. How We Use Your Information */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>

        <p className="mb-2">We use your information to:</p>

        <ul className="list-disc ml-6 space-y-1">
          <li>Process and ship orders</li>
          <li>Verify and publish vehicle listings</li>
          <li>Contact you regarding your listing or inquiries</li>
          <li>Facilitate communication between buyers and sellers</li>
          <li>Improve website functionality and user experience</li>
          <li>Prevent fraud and ensure platform safety</li>
        </ul>
      </section>

      {/* 3. Sharing Your Information */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">3. Sharing Your Information</h2>

        <p className="mb-2">
          SkylineCulture does <span className="font-semibold">not sell</span> your personal information.
          We may share your data only when necessary:
        </p>

        <ul className="list-disc ml-6 space-y-1">
          <li>
            <span className="font-semibold">Stripe:</span> To securely process payments
          </li>
          <li>
            <span className="font-semibold">Buyers/Sellers:</span> If you submit a vehicle listing,
            certain details (e.g., your email or phone number) may be shared with potential buyers
            with your consent.
          </li>
          <li>
            <span className="font-semibold">Legal Compliance:</span> If required by law or to prevent fraud
          </li>
        </ul>
      </section>

      {/* 4. Cookies & Tracking */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">4. Cookies & Tracking Technologies</h2>
        <p>
          SkylineCulture uses cookies and analytics tools (such as Google Analytics)
          to understand website traffic, enhance user experience, and improve performance.
        </p>
      </section>

      {/* 5. Data Security */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">5. Data Security</h2>
        <p>
          We take security seriously. All payment data is processed through encrypted,
          PCI-compliant systems (e.g., Stripe). While we follow industry best practices,
          no online platform can guarantee 100% data security.
        </p>
      </section>

      {/* 6. Your Rights */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">6. Your Rights</h2>

        <p className="mb-2">You have the right to:</p>

        <ul className="list-disc ml-6 space-y-1">
          <li>Request a copy of your personal data</li>
          <li>Request deletion of your data</li>
          <li>Update or correct your information</li>
          <li>Withdraw consent for communication at any time</li>
        </ul>

        <p className="mt-2">
          To exercise these rights, please contact us at{" "}
          <a href="mailto:info@skylineculture.com" className="text-blue-600 underline">
            info@skylineculture.com
          </a>.
        </p>
      </section>

      {/* 7. Children's Privacy */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">7. Children's Privacy</h2>
        <p>
          SkylineCulture does not knowingly collect or store information from children under
          13 years of age. If you believe a child has provided personal information,
          please contact us immediately.
        </p>
      </section>

      {/* 8. Updates to Privacy Policy */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">8. Updates to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this
          page with the updated effective date.
        </p>
      </section>

      {/* Footer */}
      <p className="text-gray-600 text-sm mt-12">
        Last updated: {new Date().getFullYear()}
      </p>
    </div>
  );
}
