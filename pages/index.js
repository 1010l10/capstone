import { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import CategoryTab from "./../components/elements/CategoryTab";
import Link from "next/link";
import { useRouter } from "next/router"; // Import the router

export default function Home() {
  const router = useRouter(); // Initialize the router

  const handleClick = (values) => {
    // This function will only be called if the form is valid
    console.log("Opening Google Form ");
    const googleFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLScceJFMz36glj_FpmlS19cHsfeowt_eAIvkER5BuzpSykxgvQ/viewform?usp=sf_link';
    window.open(googleFormURL, '_blank');
  };

  return (
    <>
      <Layout>
        <div className="bg-homepage1" />

        <section className="section-box mt-50">
          <div className="container">
            <div className="text-center">
              <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">CyberSecurity Competitions</h2>
              <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
              There are many cybersecurity-related competitions that are associated with this field.
              NIST is charged with energizing and promoting a robust network and ecosystem of cybersecurity education, 
              training, and workforce development. NIST, is a partnership between government, academia, and the private sector 
              focused on cybersecurity education, training, and workforce development. Its mission is to energize and promote a 
              robust network and an ecosystem of cybersecurity education, training, and workforce development. 
              </p>
            </div>
            <div className="mt-70">
              <CategoryTab />
            </div>
          </div>
          <div className="container">
            <div className="box-we-hiring">
              <div className="text-1">
                <span className="text-we-are">Submit your event for approval</span>
                <span className="text-hiring">Organizers</span>
              </div>
              <button
                type="button" // Use "button" as the type
                className="btn btn-default font-heading icon-send-letter"
                onClick={() => handleClick(FormData)}
              >
                Apply now
              </button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
