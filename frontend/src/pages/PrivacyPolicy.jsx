import React from "react";
import "../style/PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="privacy-wrapper">
        <div className="privacy-data">
          <h1>Privacy Policy</h1>
          <p>
            <b>Last Updated: </b>04-07-2024
          </p>
          <p>
            Welcome to Dave to Crack Code. Your privacy is important to us. This
            Privacy Policy explains how we collect, use, disclose, and protect
            your information when you visit our website and use our services.
          </p>
          
          <ul>
            <li>
              <h2>Information We Collect</h2>
              <p>We collect the following types of information from you:</p>
              <ul>
                <li>
                  <b>Personal Information: </b>
                  When you register on our website, we collect your first name,
                  last name, email address, and profile photo.
                </li>
                <li>
                  <b>Google Calendar Access: </b>
                  With your permission, we access your Google Calendar to create
                  and manage events, including generating Google Meet links for
                  scheduled mock interviews.
                </li>
              </ul>
            </li>
            <li>
              <h2>How We Use Your Information</h2>
              <p>
                We use the information we collect for the following purposes:
              </p>
              <ul>
                <li>
                  <b>Registration and Account Management: </b>
                  To register you on our website and manage your account.
                </li>
                <li>
                  <b>Scheduling Mock Interviews: </b>
                  To schedule mock interviews by creating events in your Google
                  Calendar.
                </li>
                <li>
                  <b>Generating Google Meet Links </b>
                  To create and manage Google Meet links for mock interviews,
                  ensuring they are available at the scheduled times.
                </li>
              </ul>
            </li>
            <li>
              <h2>Security of Your Information</h2>
              <p>
                We implement a variety of security measures to maintain the
                safety of your personal information. While we strive to use
                commercially acceptable means to protect your personal
                information, we cannot guarantee its absolute security.
              </p>
            </li>
            <li>
              <h2>How We Share Your Information</h2>
              <p>
                We do not sell or rent your personal information to third
                parties. We may share your information with: <br />
                <ul>
                  <li>
                    Service Providers: Third-party service providers who assist
                    us in operating our website and conducting our business, as
                    long as those parties agree to keep this information
                    confidential. <br />
                  </li>
                  <li>
                    Legal Requirements: If required by law or in response to
                    valid requests by public authorities (e.g., a court or a
                    government agency).
                  </li>
                </ul>
              </p>
            </li>
            <li>
              <h2>Your Choices</h2>
              <p>
                You can choose not to provide us with certain information.
                However, this may limit your ability to use some features of our
                website. You can also revoke access to your Google Calendar at
                any time through your Google account settings.
              </p>
            </li>
            <li>
              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page. You are advised to review this Privacy Policy
                periodically for any changes.
              </p>
            </li>
            <li>
              <h2>Links to Other Websites</h2>
              <p>
                Our Service may contain links to other websites that are not
                operated by Us. If You click on a third party link, You will be
                directed to that third party's site. We strongly advise You to
                review the Privacy Policy of every site You visit. <br />
                We have no control over and assume no responsibility for the
                content, privacy policies or practices of any third party sites
                or services.
              </p>
            </li>
            <li>
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at: <br />
                Dave To Crack Code <br />
                davetocrackcode@gmail.com
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default PrivacyPolicy;
